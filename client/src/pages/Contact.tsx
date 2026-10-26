import React, { useRef, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import TableOfContents from "@/components/TableOfContents";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, Mail, Phone, Calendar } from "lucide-react";

// ─── Zod Schema (mirrors server-side contactSchema) ──────────────────────────
// Note: We avoid .transform() on optional fields to keep the inferred type
// compatible with react-hook-form + zodResolver. The server-side schema
// performs the definitive validation and normalization.
// The client-side normalization (trim, lowercase email) happens in
// the form's onSubmit handler before sending to the API.

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(100),
  lastName: z.string().min(1, "Last name is required").max(100),
  email: z
    .string()
    .min(1, "Email is required")
    .max(254)
    .email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required").max(30),
  company: z.string().max(200).optional(),
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
  message: z.string().min(1, "Message is required").max(3000),
  smsConsent: z.boolean().optional(),
  // Honeypot — hidden from real users, filled by bots
  website: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const INQUIRY_CATEGORIES = [
  { value: "ai_visibility", label: "AI Visibility & Search Optimization" },
  { value: "gbp_optimization", label: "Google Business Profile Optimization" },
  { value: "ai_receptionist", label: "AI Receptionist & Lead Response" },
  { value: "crm_automation", label: "CRM & Business Automation" },
  { value: "website_conversion", label: "Website & Conversion Optimization" },
  { value: "revenue_infrastructure", label: "Revenue Infrastructure Assessment" },
  { value: "general_inquiry", label: "General Inquiry / Not Sure" },
] as const;

// ─── Contact Information ─────────────────────────────────────────────────

const CONTACT_INFO = {
  email: "info@growthworks-systems.com",
  phone: "+1 (214) 302-7720",
  phoneHref: "tel:+12143027720",
  emailHref: "mailto:info@growthworks-systems.com",
  bookingHref: "/revenue-diagnostic",
} as const;

// ─── Left Column Content ─────────────────────────────────────────────────

function ContactInfo() {
  return (
    <aside>
      <h2
        className="font-serif font-normal text-gray-900 leading-[1.08] tracking-tight text-[32px] md:text-[40px] mb-6"
        style={{ textWrap: "balance" }}
      >
        Let's talk about your{" "}
        <span style={{ color: "#841617" }}>revenue infrastructure</span>.
      </h2>

      <p className="text-[17px] md:text-[18px] leading-[1.65] text-gray-600 mb-8 max-w-[560px]">
        Tell us a little about your business and what you're looking to improve.
        The GrowthWorks Systems team will review your inquiry and follow up.
      </p>

      <div className="space-y-4 mb-10">
        <div className="flex items-start gap-4">
          <Mail className="w-5 h-5 mt-0.5 text-crimson flex-shrink-0" aria-hidden="true" />
          <div>
            <span className="block text-[14px] font-sans font-semibold tracking-[0.05em] uppercase text-gray-500 mb-1">
              Email
            </span>
            <a
              href={CONTACT_INFO.emailHref}
              className="text-[16px] text-gray-900 hover:text-crimson transition-colors"
            >
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="w-5 h-5 mt-0.5 text-crimson flex-shrink-0" aria-hidden="true" />
          <div>
            <span className="block text-[14px] font-sans font-semibold tracking-[0.05em] uppercase text-gray-500 mb-1">
              Phone
            </span>
            <a
              href={CONTACT_INFO.phoneHref}
              className="text-[16px] text-gray-900 hover:text-crimson transition-colors"
            >
              {CONTACT_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="pt-6">
        <button
          onClick={() => window.location.href = CONTACT_INFO.bookingHref}
          className="inline-flex items-center gap-2 text-[#721315] hover:text-[#5a0e10] font-sans font-semibold text-[15px] leading-[1.2] transition-all duration-200 group bg-white border border-[#721315] px-4 py-2 rounded cursor-pointer hover:bg-[#fdf0f0] hover:border-[#5a0e10] hover:shadow-md"
        >
          <Calendar className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          Prefer a scheduled conversation? Book a Revenue Diagnostic →
        </button>
      </div>
    </aside>
  );
}

// ─── Contact Form ────────────────────────────────────────────────────────────

function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Keep one key for retries of the same submission; rotate after success.
  const submissionKey = useRef<string | null>(null);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      inquiryCategory: "general_inquiry",
      message: "",
      smsConsent: false,
      website: "",
    },
    mode: "onBlur",
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    setSubmitState("idle");
    setErrorMessage("");

    // Client-side normalization to match server expectations
    const payload = {
      ...values,
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      email: values.email.trim().toLowerCase(),
      phone: values.phone.trim(),
      company: values.company ? values.company.trim() || undefined : undefined,
      message: values.message.trim(),
    };

    try {
      submissionKey.current ??= crypto.randomUUID();
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": submissionKey.current,
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        success: boolean;
        error?: string;
        code?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setSubmitState("success");
      submissionKey.current = null;
      form.reset();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMessage(msg);
      setSubmitState("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitState === "success") {
    return (
      <section
        aria-label="Message sent confirmation"
        className="bg-surface py-12"
      >
        <div className="text-center">
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-6"
            style={{ backgroundColor: "#841617" }}
            aria-hidden="true"
          >
            <Send className="h-6 w-6 text-white" />
          </div>
          <h3 className="font-serif font-normal text-gray-900 leading-[1.08] tracking-tight text-[32px] md:text-[40px] mb-5">
            Thank you for reaching out.
          </h3>
          <p className="text-[17px] md:text-[18px] leading-[1.65] text-gray-600 mb-4 max-w-[560px] mx-auto">
            Your message has been sent. A member of the GrowthWorks Systems
            team will follow up soon.
          </p>
          <p className="text-[15px] leading-[1.6] text-gray-500">
            If you need immediate assistance, you can also reach us at{" "}
            <a
              href={CONTACT_INFO.emailHref}
              className="text-crimson hover:text-crimson-dark underline underline-offset-2"
            >
              {CONTACT_INFO.email}
            </a>
            .
          </p>
        </div>
      </section>
    );
  }

  return (
    <section aria-label="Contact form" style={{ borderTop: "none" }}>
      <div className="mb-6">
        <h2 className="font-serif font-normal text-gray-900 leading-[1.08] tracking-tight text-[24px] md:text-[28px]">
          Send us a message
        </h2>
        <p className="text-[16px] leading-[1.65] text-gray-600 mt-2 max-w-[500px]">
          Share your details and we'll get back to you.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          noValidate
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5"
        >
          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="sm:col-span-1">
                <FormLabel>
                  First Name <span aria-hidden="true" className="text-destructive">
                    *
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Jane"
                    autoComplete="given-name"
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="sm:col-span-1">
                <FormLabel>
                  Last Name <span aria-hidden="true" className="text-destructive">
                    *
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Doe"
                    autoComplete="family-name"
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel>
                  Email <span aria-hidden="true" className="text-destructive">
                    *
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="jane.doe@example.com"
                    autoComplete="email"
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel>
                  Phone <span aria-hidden="true" className="text-destructive">
                    *
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    autoComplete="tel"
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormDescription>We will only call if necessary to clarify.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* What can we help you with? */}
          <FormField
            control={form.control}
            name="inquiryCategory"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel>What can we help you with?</FormLabel>
                <Select
                  // @ts-expect-error - modal prop is supported by Radix but not exposed in wrapper type
                  modal={false}
                  onValueChange={field.onChange}
                  value={field.value ?? undefined}
                  disabled={isSubmitting}
                >
                  <FormControl>
                    <SelectTrigger className="w-full rounded-md border border-gray-200">
                      <SelectValue placeholder="Select a topic (optional)" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="rounded-md border border-gray-200 bg-white shadow-sm">
                    {INQUIRY_CATEGORIES.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value} className="px-3 py-2 rounded-md hover:text-crimson hover:bg-gray-50 transition-all duration-150">
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Company (optional) */}
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel>Company (optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Acme Corp"
                    autoComplete="organization"
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel>
                  Message <span aria-hidden="true" className="text-destructive">
                    *
                  </span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your business and how we can help..."
                    rows={5}
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* SMS Consent checkbox + exact Votel disclosure */}
          <FormField
            control={form.control}
            name="smsConsent"
            render={({ field }) => (
              <FormItem className="sm:col-span-2 flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    id="sms-consent"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <label htmlFor="sms-consent" className="text-[13px] leading-[1.5] text-gray-500 max-w-[580px]">
                  By providing your phone number, you agree to receive SMS e.g., Marketing, Customer Care from GrowthWorks Systems. Message frequency may vary. Standard Message and Data Rates may apply. Reply STOP to opt out. Reply HELP for help.
                </label>
              </FormItem>
            )}
          />

          {/* Separate legal link row */}
          <div className="sm:col-span-2 flex justify-center flex-col sm:flex-row gap-4 sm:gap-8 text-[13px]">
            <a
              href="/privacy"
              style={{ color: "#0078d9" }}
              className="hover:text-blue-700 underline underline-offset-2 transition-colors"
              onClick={() => window.scrollTo(0, 0)}
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              style={{ color: "#0078d9" }}
              className="hover:text-blue-700 underline underline-offset-2 transition-colors"
              onClick={() => window.scrollTo(0, 0)}
            >
              Terms &amp; Conditions
            </a>
          </div>

          {/* Error message (server-side) */}
          {submitState === "error" && errorMessage && (
            <div
              role="alert"
              className="sm:col-span-2 p-4 rounded-md border border-destructive/30 bg-destructive/5 text-destructive"
            >
              <p className="text-sm">{errorMessage}</p>
            </div>
          )}

          {/* Submit button */}
          <div className="sm:col-span-2 pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-crimson hover:bg-crimson-dark text-white h-12 text-[15px] font-sans font-semibold tracking-[0.05em] uppercase transition-colors"
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </div>

          {/* Honeypot field — hidden from users, filled by bots */}
          <div className="hidden">
            <label htmlFor="website-field">Do not fill this out if you are human</label>
            <input
              id="website-field"
              {...form.register("website")}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
        </form>
      </Form>
    </section>
  );
}

// ─── Page Component ────────────────────────────────────────────────────────────

export default function Contact() {
  return (
    <div className="min-h-full antialiased">
      <Seo canonical="/contact" />
      <SiteHeader />
      <main>
        <TableOfContents />

        {/* Two-column contact section */}
        <section className="bg-surface py-[80px] md:py-[112px]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-20 gap-y-12 lg:items-start">
              {/* Left column: intro + contact info */}
              <div className="lg:pt-4">
                <ContactInfo />
              </div>

              {/* Right column: form panel */}
              <section aria-label="Contact form" className="bg-white border border-gray-300 shadow-md rounded-[9px] p-7 md:p-8">
                <ContactFormSection />
              </section>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
