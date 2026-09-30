import React, { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import TableOfContents from "@/components/TableOfContents";
import { Seo } from "@/components/Seo";

// ─── Layout Constants ───────────────────────────────────────────────────────────

const CONTAINER = "max-w-[680px] mx-auto px-5 md:px-8 lg:px-16";

// ─── RevealOnScroll Helper ─────────────────────────────────────────────────────

function RevealOnScroll({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [visible, setVisible] = useState(false);
  const hasTriggered = React.useRef(false);

  React.useEffect(() => {
    if (hasTriggered.current) return;
    if (!className) return;
    const el = document.querySelector(`.${className}`);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const winH = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < winH && rect.bottom > 0) {
      setVisible(true);
      hasTriggered.current = true;
    }
  }, [className]);

  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 600ms ease-out ${delay}ms, transform 600ms ease-out ${delay}ms`,
      }}
      ref={(el) => {
        if (!el || visible || hasTriggered.current) return;
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                setVisible(true);
                hasTriggered.current = true;
                obs.disconnect();
              }
            });
          },
          { threshold: 0.12 }
        );
        obs.observe(el);
      }}
    >
      {children}
    </div>
  );
}

// ─── Section Label ─────────────────────────────────────────────────────────────

function SectionLabel({ label }: { label: string }) {
  return (
    <p className="text-[14px] font-sans font-semibold tracking-[0.18em] uppercase mb-4 text-[#841617] industries-section-label">
      {label}
    </p>
  );
}

// ─── Policy Sections ───────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section id="terms-h1" className="bg-surface pt-[96px] md:pt-[128px] pb-[40px] md:pb-[48px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <h1 className="font-serif font-normal text-gray-900 leading-[1.08] tracking-tight text-[40px] md:text-[60px]">
            Terms & Conditions
          </h1>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function LastUpdated() {
  return (
    <section id="terms-last-updated" className="bg-white py-[40px] md:py-[48px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <p className="text-[15px] font-sans text-gray-500">
            Last Updated: September 30, 2026
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section id="terms-intro" className="bg-surface py-[64px] md:py-[80px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <p className="text-[17px] leading-[1.75] text-gray-900 mb-6">
            These Terms & Conditions govern your use of the GrowthWorks Systems LLC ("GrowthWorks Systems," "we," "us," or "our") website and communications with GrowthWorks Systems.
          </p>
          <p className="text-[17px] leading-[1.75] text-gray-700">
            By using our website or voluntarily submitting information through our website, you agree to these Terms & Conditions and our <a href="/privacy" className="text-[#841617] hover:text-[#721315] underline">Privacy Policy</a>.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function WebsiteUseSection() {
  return (
    <section id="terms-website" className="bg-white py-[64px] md:py-[80px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <SectionLabel label="Website Use" />
          <h2 className="font-serif font-normal text-gray-900 leading-[1.15] text-[28px] md:text-[32px] mb-8">
            Website Use
          </h2>
          <p className="text-[17px] leading-[1.75] text-gray-700 mb-6">
            The information provided on this website is for general informational purposes. GrowthWorks Systems may modify website content, services, or these Terms & Conditions at any time.
          </p>
          <p className="text-[17px] leading-[1.75] text-gray-700">
            You agree not to misuse our website, interfere with its operation, attempt unauthorized access to our systems, or use the website for unlawful purposes.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="terms-services" className="bg-surface py-[64px] md:py-[80px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <SectionLabel label="Services" />
          <h2 className="font-serif font-normal text-gray-900 leading-[1.15] text-[28px] md:text-[32px] mb-8">
            Services
          </h2>
          <p className="text-[17px] leading-[1.75] text-gray-700 mb-6">
            Descriptions of GrowthWorks Systems services on this website are general in nature and do not constitute a binding offer or guarantee of specific results.
          </p>
          <p className="text-[17px] leading-[1.75] text-gray-700">
            Specific client engagements may be governed by separate proposals, agreements, statements of work, or other written terms. Where such an agreement conflicts with these general website Terms & Conditions, the applicable client agreement will control for that engagement.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function SmsMessagingSection() {
  return (
    <section id="terms-sms" className="bg-white py-[64px] md:py-[80px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <SectionLabel label="SMS Messaging Terms" />
          <h2 className="font-serif font-normal text-gray-900 leading-[1.15] text-[28px] md:text-[32px] mb-8">
            SMS Messaging Terms
          </h2>
          <p className="text-[17px] leading-[1.75] text-gray-700 mb-6">
            GrowthWorks Systems may offer SMS/text messaging to individuals who voluntarily provide a mobile telephone number and consent to receive messages.
          </p>
          <p className="text-[17px] leading-[1.75] text-gray-700 mb-6">
            Depending on the consent provided and the nature of your relationship with GrowthWorks Systems, messages may include:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Responses to inquiries",
              "Requested information",
              "Appointment confirmations and reminders",
              "Service and account communications",
              "Customer support and follow-up",
              "Information about GrowthWorks Systems services and offers when you have consented to receive marketing communications",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[16px] md:text-[17px] leading-[1.65] text-gray-700">
                <span className="flex-shrink-0 w-[6px] h-[6px] rounded-full bg-[#841617] mt-[10px]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[17px] leading-[1.75] text-gray-700 mb-6">
            Message frequency varies. Message and data rates may apply.
          </p>
          <p className="text-[17px] leading-[1.75] text-gray-700 mb-6">
            Consent to receive marketing text messages is not a condition of purchasing goods or services.
          </p>
          <p className="text-[17px] leading-[1.75] text-gray-700">
            You may opt out of SMS communications at any time by replying STOP. After opting out, you may receive a confirmation message. You will no longer receive SMS messages from that messaging program unless you subsequently provide consent again.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function SmsPrivacySection() {
  return (
    <section id="terms-sms-privacy" className="bg-surface py-[64px] md:py-[80px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <SectionLabel label="SMS Privacy" />
          <h2 className="font-serif font-normal text-gray-900 leading-[1.15] text-[28px] md:text-[32px] mb-8">
            SMS Privacy
          </h2>
          <p className="text-[17px] leading-[1.75] text-gray-700 mb-6">
            GrowthWorks Systems respects the privacy of SMS subscribers. Mobile information will not be sold, rented, or shared with third parties or affiliates for their own marketing or promotional purposes.
          </p>
          <p className="text-[17px] leading-[1.75] text-gray-700">
            For additional information about how we collect and use information, please review our <a href="/privacy" className="text-[#841617] hover:text-[#721315] underline">Privacy Policy</a>.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function HelpSection() {
  return (
    <section id="terms-help" className="bg-white py-[48px] md:py-[64px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <p className="text-[17px] leading-[1.75] text-gray-700">
            For assistance, reply <strong>HELP</strong> or contact us at <a href="mailto:support@growthworks-systems.com" className="text-[#841617] hover:text-[#721315] underline">support@growthworks-systems.com</a>.
          </p>
          <p className="text-[17px] leading-[1.75] text-gray-700 mt-4">
            Wireless carriers are not liable for delayed or undelivered messages.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function IntellectualPropertySection() {
  return (
    <section id="terms-ip" className="bg-surface py-[64px] md:py-[80px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <SectionLabel label="Intellectual Property" />
          <h2 className="font-serif font-normal text-gray-900 leading-[1.15] text-[28px] md:text-[32px] mb-8">
            Intellectual Property
          </h2>
          <p className="text-[17px] leading-[1.75] text-gray-700">
            Unless otherwise indicated, the content of this website, including text, graphics, branding, designs, and other materials, is owned by or licensed to GrowthWorks Systems and is protected by applicable intellectual-property laws.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function DisclaimerSection() {
  return (
    <section id="terms-disclaimer" className="bg-white py-[64px] md:py-[80px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <SectionLabel label="Disclaimer" />
          <h2 className="font-serif font-normal text-gray-900 leading-[1.15] text-[28px] md:text-[32px] mb-8">
            Disclaimer
          </h2>
          <p className="text-[17px] leading-[1.75] text-gray-700 mb-6">
            GrowthWorks Systems does not warrant that this website will always be available, uninterrupted, secure, or error-free.
          </p>
          <p className="text-[17px] leading-[1.75] text-gray-700">
            Information presented on the website is provided on an "as available" basis and should not be interpreted as a guarantee of any particular business, marketing, financial, or other result.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function LimitationSection() {
  return (
    <section id="terms-liability" className="bg-surface py-[64px] md:py-[80px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <SectionLabel label="Limitation of Liability" />
          <h2 className="font-serif font-normal text-gray-900 leading-[1.15] text-[28px] md:text-[32px] mb-8">
            Limitation of Liability
          </h2>
          <p className="text-[17px] leading-[1.75] text-gray-700">
            To the extent permitted by applicable law, GrowthWorks Systems will not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of this website.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function ChangesTermsSection() {
  return (
    <section id="terms-changes" className="bg-white py-[64px] md:py-[80px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <SectionLabel label="Changes to These Terms" />
          <h2 className="font-serif font-normal text-gray-900 leading-[1.15] text-[28px] md:text-[32px] mb-8">
            Changes to These Terms
          </h2>
          <p className="text-[17px] leading-[1.75] text-gray-700">
            We may modify these Terms & Conditions periodically. Revised terms will be posted on this page with an updated "Last Updated" date.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="terms-contact" className="bg-surface py-[64px] md:py-[80px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <SectionLabel label="Contact" />
          <h2 className="font-serif font-normal text-gray-900 leading-[1.15] text-[28px] md:text-[32px] mb-8">
            Contact
          </h2>
          <p className="text-[17px] leading-[1.75] text-gray-700 mb-4">
            Questions concerning these Terms & Conditions may be directed to:
          </p>
          <div className="space-y-2 text-[17px] leading-[1.75] text-gray-700">
            <p><strong>GrowthWorks Systems LLC</strong></p>
            <p>Email: <a href="mailto:support@growthworks-systems.com" className="text-[#841617] hover:text-[#721315] underline">support@growthworks-systems.com</a></p>
            <p>Website: <a href="https://www.growthworks-systems.com" className="text-[#841617] hover:text-[#721315] underline" target="_blank" rel="noopener noreferrer">https://www.growthworks-systems.com</a></p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

// ─── Page Export ───────────────────────────────────────────────────────────────

export default function TermsConditions() {
  return (
    <div className="min-h-full antialiased">
      <Seo
        canonical="/terms"
        title="Terms & Conditions — GrowthWorks Systems"
        description="GrowthWorks Systems Terms & Conditions. Website use terms, SMS messaging terms, and legal policies for GrowthWorks Systems."
      />
      <SiteHeader />
      <main>
        <TableOfContents />
        <HeroSection />
        <LastUpdated />
        <IntroSection />
        <WebsiteUseSection />
        <ServicesSection />
        <SmsMessagingSection />
        <SmsPrivacySection />
        <HelpSection />
        <IntellectualPropertySection />
        <DisclaimerSection />
        <LimitationSection />
        <ChangesTermsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
