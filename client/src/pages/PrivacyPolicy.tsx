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

// ─── Policy Content Sections ───────────────────────────────────────────────────

function HeroSection() {
  return (
    <section id="privacy-h1" className="bg-surface pt-[96px] md:pt-[128px] pb-[40px] md:pb-[48px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <h1 className="font-serif font-normal text-gray-900 leading-[1.08] tracking-tight text-[40px] md:text-[60px]">
            Privacy Policy
          </h1>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function LastUpdated() {
  return (
    <section id="privacy-last-updated" className="bg-white py-[40px] md:py-[48px] border-b border-[#D8D5CE]">
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
    <section id="privacy-intro" className="bg-surface py-[64px] md:py-[80px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <p className="text-[17px] leading-[1.75] text-gray-900 mb-6">
            GrowthWorks Systems LLC ("GrowthWorks Systems," "we," "us," or "our") respects your privacy. This Privacy Policy describes how we collect, use, disclose, and protect information when you visit our website, communicate with us, request information, or use our services.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function InformationWeCollectSection() {
  return (
    <section id="privacy-collect" className="bg-white py-[64px] md:py-[80px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <SectionLabel label="Information We Collect" />
          <h2 className="font-serif font-normal text-gray-900 leading-[1.15] text-[28px] md:text-[32px] mb-8">
            Information We Collect
          </h2>
          <p className="text-[17px] leading-[1.75] text-gray-900 mb-6">
            We may collect information that you voluntarily provide to us, including your:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Name",
              "Email address",
              "Telephone or mobile number",
              "Company name",
              "Job title or role",
              "Information about your business",
              "Information submitted through forms, surveys, appointment requests, or other communications",
              "Communications and correspondence with GrowthWorks Systems",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[16px] md:text-[17px] leading-[1.65] text-gray-700">
                <span className="flex-shrink-0 w-[6px] h-[6px] rounded-full bg-[#841617] mt-[10px]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[17px] leading-[1.75] text-gray-700">
            We may also automatically collect certain technical information when you use our website, such as your IP address, browser type, device information, referring pages, and website usage information.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function HowWeUseSection() {
  const uses = [
    "Respond to inquiries and requests",
    "Provide information about our services",
    "Schedule and manage appointments",
    "Provide customer service and support",
    "Deliver services requested by our clients",
    "Send administrative and service-related communications",
    "Send marketing communications when permitted by applicable law and your communication preferences",
    "Improve our website, services, and customer experience",
    "Maintain security and prevent fraud or misuse",
    "Comply with legal and regulatory requirements",
  ];

  return (
    <section id="privacy-use" className="bg-surface py-[64px] md:py-[80px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <SectionLabel label="How We Use Information" />
          <h2 className="font-serif font-normal text-gray-900 leading-[1.15] text-[28px] md:text-[32px] mb-8">
            How We Use Information
          </h2>
          <p className="text-[17px] leading-[1.75] text-gray-700 mb-6">
            We may use information we collect to:
          </p>
          <ul className="space-y-3">
            {uses.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[16px] md:text-[17px] leading-[1.65] text-gray-700">
                <span className="flex-shrink-0 w-[6px] h-[6px] rounded-full bg-[#841617] mt-[10px]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function SmsMobileSection() {
  return (
    <section id="privacy-sms" className="bg-white py-[64px] md:py-[80px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <SectionLabel label="SMS and Mobile Information" />
          <h2 className="font-serif font-normal text-gray-900 leading-[1.15] text-[28px] md:text-[32px] mb-8">
            SMS and Mobile Information
          </h2>
          <p className="text-[17px] leading-[1.75] text-gray-700 mb-6">
            If you provide your mobile number and consent to receive text messages from GrowthWorks Systems, we may use that number to send messages related to your inquiry, requested information, appointments, customer service, service follow-up, and, where you have consented, marketing communications.
          </p>
          <p className="text-[17px] leading-[1.75] text-gray-700 mb-6">
            Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes.
          </p>
          <p className="text-[17px] leading-[1.75] text-gray-700 mb-6">
            Information sharing with service providers that support our communications and business operations is permitted only as necessary to provide those services on our behalf. SMS opt-in consent and mobile telephone information will not be sold, rented, or shared with third parties for their own marketing or promotional purposes.
          </p>
          <p className="text-[17px] leading-[1.75] text-gray-700">
            Message frequency may vary. Message and data rates may apply. You may reply STOP to a text message to opt out of further SMS communications and HELP for assistance.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function HowWeShareSection() {
  return (
    <section id="privacy-share" className="bg-surface py-[64px] md:py-[80px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <SectionLabel label="How We Share Information" />
          <h2 className="font-serif font-normal text-gray-900 leading-[1.15] text-[28px] md:text-[32px] mb-8">
            How We Share Information
          </h2>
          <p className="text-[17px] leading-[1.75] text-gray-700 mb-6">
            We may disclose information to service providers and vendors that perform services on our behalf, such as website hosting, customer relationship management, communications, analytics, scheduling, and other business operations.
          </p>
          <p className="text-[17px] leading-[1.75] text-gray-700 mb-6">
            We may also disclose information when required by law, to respond to lawful requests, to protect our rights or the rights and safety of others, or in connection with a merger, acquisition, sale, or other business transaction.
          </p>
          <p className="text-[17px] leading-[1.75] text-gray-700">
            We do not sell your personal information for third-party marketing purposes.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function CookiesSection() {
  return (
    <section id="privacy-cookies" className="bg-white py-[64px] md:py-[80px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <SectionLabel label="Cookies and Analytics" />
          <h2 className="font-serif font-normal text-gray-900 leading-[1.15] text-[28px] md:text-[32px] mb-8">
            Cookies and Analytics
          </h2>
          <p className="text-[17px] leading-[1.75] text-gray-700">
            Our website may use cookies and similar technologies to operate the website, understand website usage, improve performance, and support marketing and analytics activities. You may be able to control cookies through your browser settings.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function DataSecuritySection() {
  return (
    <section id="privacy-security" className="bg-surface py-[64px] md:py-[80px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <SectionLabel label="Data Security" />
          <h2 className="font-serif font-normal text-gray-900 leading-[1.15] text-[28px] md:text-[32px] mb-8">
            Data Security
          </h2>
          <p className="text-[17px] leading-[1.75] text-gray-700">
            We use reasonable administrative, technical, and organizational safeguards designed to protect personal information. No method of transmission or electronic storage, however, can be guaranteed to be completely secure.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function YourChoicesSection() {
  return (
    <section id="privacy-choices" className="bg-white py-[64px] md:py-[80px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <SectionLabel label="Your Choices" />
          <h2 className="font-serif font-normal text-gray-900 leading-[1.15] text-[28px] md:text-[32px] mb-8">
            Your Choices
          </h2>
          <p className="text-[17px] leading-[1.75] text-gray-700 mb-6">
            You may opt out of marketing email communications by using the unsubscribe mechanism provided in those messages.
          </p>
          <p className="text-[17px] leading-[1.75] text-gray-700">
            You may opt out of SMS communications at any time by replying STOP. For assistance with SMS communications, reply HELP or contact us using the information below.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function ThirdPartySection() {
  return (
    <section id="privacy-thirdparty" className="bg-surface py-[64px] md:py-[80px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <SectionLabel label="Third-Party Websites" />
          <h2 className="font-serif font-normal text-gray-900 leading-[1.15] text-[28px] md:text-[32px] mb-8">
            Third-Party Websites
          </h2>
          <p className="text-[17px] leading-[1.75] text-gray-700">
            Our website may contain links to third-party websites or services. GrowthWorks Systems is not responsible for the privacy practices of those third parties.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function ChangesSection() {
  return (
    <section id="privacy-changes" className="bg-white py-[64px] md:py-[80px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <SectionLabel label="Changes to This Privacy Policy" />
          <h2 className="font-serif font-normal text-gray-900 leading-[1.15] text-[28px] md:text-[32px] mb-8">
            Changes to This Privacy Policy
          </h2>
          <p className="text-[17px] leading-[1.75] text-gray-700">
            We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last Updated" date.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="privacy-contact" className="bg-surface py-[64px] md:py-[80px] border-b border-[#D8D5CE]">
      <div className={CONTAINER}>
        <RevealOnScroll>
          <SectionLabel label="Contact Us" />
          <h2 className="font-serif font-normal text-gray-900 leading-[1.15] text-[28px] md:text-[32px] mb-8">
            Contact Us
          </h2>
          <p className="text-[17px] leading-[1.75] text-gray-700 mb-4">
            For questions about this Privacy Policy or our privacy practices, contact:
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

export default function PrivacyPolicy() {
  return (
    <div className="min-h-full antialiased">
      <Seo
        canonical="/privacy"
        title="Privacy Policy — GrowthWorks Systems"
        description="GrowthWorks Systems Privacy Policy. Learn how we collect, use, disclose, and protect your information."
      />
      <SiteHeader />
      <main>
        <TableOfContents />
        <HeroSection />
        <LastUpdated />
        <IntroSection />
        <InformationWeCollectSection />
        <HowWeUseSection />
        <SmsMobileSection />
        <HowWeShareSection />
        <CookiesSection />
        <DataSecuritySection />
        <YourChoicesSection />
        <ThirdPartySection />
        <ChangesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
