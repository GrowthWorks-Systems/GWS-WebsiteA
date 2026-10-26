/**
 * POST /api/contact
 *
 * Secure server-side submission for the GrowthWorks Systems Contact form.
 *
 * Environment variables required (set in the deployment dashboard):
 *   MAVIS_CONTACT_WEBHOOK_URL   - The Mavis webhook endpoint URL
 *   MAVIS_CONTACT_WEBHOOK_TOKEN - Bearer token for authenticating to the webhook
 *
 * Security measures:
 *   - Zod schema validation on all fields (server-side trust boundary)
 *   - Input normalization (trim, lowercase email, etc.)
 *   - String length limits to prevent oversized payloads
 *   - Rate limiting (in-memory, per-IP) — suitable for a single-instance deploy
 *   - Idempotency via optional idempotency key header
 *   - Sanitized error responses (no internal details leaked to client)
 *   - Sanitized logs (no PII — emails/phones redacted in logs)
 *   - No credentials echoed in responses
 *
 * @returns JSON { success: true, submissionId, submittedAt } on success
 *          JSON { success: false, error: string, code: string } on failure
 */

import express from "express";
import { z } from "zod";
import { nanoid } from "nanoid";

// ─── Validation Schema ───────────────────────────────────────────────────────

const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(100, "First name must be 100 characters or fewer")
    .trim(),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(100, "Last name must be 100 characters or fewer")
    .trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .max(254, "Email must be 254 characters or fewer")
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .max(30, "Phone number must be 30 characters or fewer")
    .trim(),
  company: z
    .string()
    .max(200, "Company must be 200 characters or fewer")
    .trim()
    .optional()
    .transform((v) => (v && v.length > 0 ? v : undefined)),
  inquiryCategory: z
    .enum(
      [
        "ai_visibility",
        "gbp_optimization",
        "ai_receptionist",
        "crm_automation",
        "website_conversion",
        "revenue_infrastructure",
        "general_inquiry",
      ],
      {
        message: "Please select a valid topic",
      }
    )
    .optional(),
  message: z
    .string()
    .min(1, "Message is required")
    .max(3000, "Message must be 3000 characters or fewer")
    .trim(),
  smsConsent: z
    .union([z.boolean(), z.literal("true"), z.literal("false"), z.string().transform((s) => s === "true")])
    .transform((v) => v === true || v === "true")
    .default(false),
  // Honeypot field — bots that fill it out will be rejected
  website: z.string().optional(),
});

// ─── Rate Limiter (in-memory, per-IP, simple token bucket) ────────────────────

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5; // max 5 submissions per minute per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  entry.count++;
  return true;
}

// ─── Idempotency Store ───────────────────────────────────────────────────────

const idempotencyStore = new Map<string, { success: boolean; responseBody: unknown }>();
const IDEMPOTENCY_TTL_MS = 5 * 60_000; // 5 minutes

// ─── Sanitization Helpers ──────────────────────────────────────────────────────

// Redact PII from logs
function redactEmail(email: string): string {
  const [local, domain] = email.split("@");
  if (!local || !domain) return "[invalid-email]";
  const redacted =
    local.length <= 2 ? local[0] + "*" : local[0] + "*".repeat(local.length - 2) + local[local.length - 1];
  return `${redacted}@${domain}`;
}

function redactPhone(phone: string): string {
  if (phone.length <= 4) return "*".repeat(phone.length);
  return phone.slice(0, 2) + "*".repeat(phone.length - 4) + phone.slice(-2);
}

// ─── Express Router ────────────────────────────────────────────────────────────

const contactRouter = express.Router();

contactRouter.use(express.json({ limit: "100kb" }));
contactRouter.use(express.urlencoded({ limit: "100kb", extended: true }));

contactRouter.post("/api/contact", async (req, res) => {
  const clientIp =
    (req.headers["x-forwarded-for"] as string | undefined)?.split(",")[0]?.trim() ??
    req.socket.remoteAddress ??
    "unknown";

  // 1. Rate limit check
  if (!checkRateLimit(clientIp)) {
    console.warn(`[contact] rate limit exceeded for IP: ${clientIp}`);
    return res.status(429).json({
      success: false,
      error: "Too many submissions. Please try again later.",
      code: "RATE_LIMITED",
    });
  }

  // 2. Idempotency check — if the client sends an idempotency key, deduplicate
  const idempotencyKey = req.headers["idempotency-key"] as string | undefined;
  if (idempotencyKey) {
    const existing = idempotencyStore.get(idempotencyKey);
    if (existing) {
      console.info(`[contact] idempotent replay for key: ${idempotencyKey}`);
      return res.status(200).json(existing.responseBody);
    }
  }

  // 3. Honeypot spam check — silently reject bots
  if (req.body?.website && req.body.website.length > 0) {
    console.warn(`[contact] spam honeypot triggered for IP: ${clientIp}`);
    return res.status(200).json({
      success: true,
      submissionId: nanoid(12),
      submittedAt: new Date().toISOString(),
    });
  }

  // 4. Schema validation
  const parseResult = contactSchema.safeParse(req.body);
  if (!parseResult.success) {
    const firstError = parseResult.error.issues[0];
    console.warn(
      `[contact] validation error from IP ${clientIp}: field=${firstError.path.join(".")} message=${firstError.message}`
    );
    return res.status(400).json({
      success: false,
      error: firstError.message,
      code: "VALIDATION_ERROR",
      field: firstError.path.join("."),
    });
  }

  const data = parseResult.data;

  // 5. Generate submission metadata
  const submissionId = nanoid(21);
  const submittedAt = new Date().toISOString();

  // 6. Build webhook payload
  const webhookPayload = {
    submissionId,
    submittedAt,
    source: "contact-page",
    consent: {
      sms: data.smsConsent,
      consentedAt: data.smsConsent ? submittedAt : null,
      method: "website_checkbox",
      source: "https://www.growthworks-systems.com/contact",
      disclosureVersion: "votel-2026-10-19",
      disclosureText: "By providing your phone number, you agree to receive SMS e.g., Marketing, Customer Care from GrowthWorks Systems. Message frequency may vary. Standard Message and Data Rates may apply. Reply STOP to opt out. Reply HELP for help.",
      privacyUrl: "https://www.growthworks-systems.com/privacy",
      termsUrl: "https://www.growthworks-systems.com/terms",
    },
    fields: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      company: data.company ?? null,
      inquiryCategory: data.inquiryCategory ?? null,
      message: data.message,
    },
  };

  // 7. Forward to Mavis webhook
  const webhookUrl = process.env.MAVIS_CONTACT_WEBHOOK_URL;
  const webhookToken = process.env.MAVIS_CONTACT_WEBHOOK_TOKEN;

  if (!webhookUrl || !webhookToken) {
    console.error("[contact] webhook not configured — MAVIS_CONTACT_WEBHOOK_URL or MAVIS_CONTACT_WEBHOOK_TOKEN missing");
    return res.status(503).json({
      success: false,
      error: "Contact service is temporarily unavailable. Please try again later or email info@growthworks-systems.com.",
      code: "SERVICE_UNAVAILABLE",
    });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${webhookToken}`,
        "X-GWS-Submission-Id": submissionId,
        "X-GWS-Source": "contact-page",
      },
      body: JSON.stringify(webhookPayload),
      signal: AbortSignal.timeout(15_000), // 15s timeout
    });

    if (!response.ok) {
      const responseBody = (await response.text()).slice(0, 500);
      console.error(`[contact] webhook returned ${response.status}: ${responseBody}`);
      return res.status(502).json({
        success: false,
        error: "Failed to process submission. Please try again later.",
        code: "WEBHOOK_ERROR",
      });
    }

    console.info(
      `[contact] submission ${submissionId} forwarded — email=${redactEmail(data.email)} phone=${redactPhone(data.phone)} category=${data.inquiryCategory} sms=${data.smsConsent}`
    );

    // 8. Store idempotency result
    if (idempotencyKey) {
      const responseBody = { success: true, submissionId, submittedAt };
      idempotencyStore.set(idempotencyKey, { success: true, responseBody });
      setTimeout(() => idempotencyStore.delete(idempotencyKey), IDEMPOTENCY_TTL_MS);
    }

    return res.status(200).json({
      success: true,
      submissionId,
      submittedAt,
    });
  } catch (err) {
    if (err instanceof Error && err.name === "TimeoutError") {
      console.error(`[contact] webhook timeout for submission ${submissionId}`);
      return res.status(504).json({
        success: false,
        error: "Request timed out. Please try again later.",
        code: "TIMEOUT",
      });
    }

    console.error(
      `[contact] unexpected error for submission: ${err instanceof Error ? err.message : "unknown"}`
    );
    return res.status(500).json({
      success: false,
      error: "An unexpected error occurred. Please try again later.",
      code: "INTERNAL_ERROR",
    });
  }
});

export default contactRouter;