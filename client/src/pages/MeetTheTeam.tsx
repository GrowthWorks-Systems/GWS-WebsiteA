import React, { useState, useRef } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Seo } from "@/components/Seo";

// ─── Constants ────────────────────────────────────────────────────────────────

const CONTAINER = "max-w-[1200px] mx-auto px-5 md:px-8 lg:px-16";

// ─── Team Data ───────────────────────────────────────────────────────────────

const LEADERSHIP = [
  {
    name: "Leigh Tidwell",
    role: "Chief Revenue Officer",
    bio: "Leigh leads GrowthWorks Systems' revenue initiatives across marketing, sales, and business development. She also oversees GWS sales affiliates, including training, development, and sales standards, helping ensure every revenue initiative stays focused on creating measurable value and sustainable growth for our clients.",
    image: "/assets/images/team/leigh-tidwell.png",
    linkedin: "https://www.linkedin.com",
    page: "/teams/leigh-tidwell",
  },
  {
    name: "John Baylon",
    role: "Operations Lead",
    bio: "Focused on streamlining day-to-day operations, improving workflows, and implementing scalable systems and automation. Supports cross-functional execution by turning plans into organized, repeatable processes. Helps ensure projects and operational priorities move forward efficiently and consistently.",
    image: "/assets/images/team/John Baylon.png",
    linkedin: "https://www.linkedin.com",
    page: "/teams/john-baylon",
  },
  {
    name: "Jhed Serrano",
    role: "Lead Developer",
    bio: "Lead Developer focused on building practical, scalable systems across web development, AI, automation, and platform integrations. Turns complex workflows into reliable solutions, connects tools and infrastructure, improves deployment and operational systems, and helps move projects from concept to implementation with clarity, adaptability, and technical precision.",
    image: "/assets/images/team/jhed-serrano.png",
    linkedin: "https://www.linkedin.com",
    page: "/teams/jhed-serrano",
  },
];

// ─── RevealOnScroll Helper ────────────────────────────────────────────────────

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
  const hasTriggered = useRef(false);

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

// ─── Section Label ────────────────────────────────────────────────────────────

function SectionLabel({ label }: { label: string }) {
  return (
    <p className="text-[14px] font-sans font-semibold tracking-[0.18em] uppercase mb-4 text-[#841617]">
      {label}
    </p>
  );
}

// ─── Team Member Card (Flippable) ──────────────────────────────────────────────

function TeamMemberCard({
  name,
  role,
  bio,
  image,
  page,
  delay = 0,
}: {
  name: string;
  role: string;
  bio: string;
  image: string;
  page: string;
  delay?: number;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <RevealOnScroll delay={delay}>
      <div className="flip-box-wrapper perspective w-full">
        <div
          className="flip-box relative mx-auto w-full max-w-[436px] h-[562px] cursor-pointer border border-gray-200"
          tabIndex={0}
          role="button"
          aria-label={`View ${name}, ${role}`}
        >
          <div className="flip-box-inner absolute inset-0">
          {/* ── Front face ── */}
          <div className="flip-box__front absolute inset-0">
            <div className="relative h-[374px] w-full overflow-hidden">
              {!imgError ? (
                <img
                  src={image}
                  alt={`${name} — ${role}, GrowthWorks Systems`}
                  className="h-full w-full object-contain object-top"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex h-full w-full items-end justify-center bg-[#F2E7E3] pb-4">
                  <span className="text-[42px] font-sans font-bold text-[#841617] sm:text-[46px]">
                    {name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>
              )}
            </div>
            <div className="p-5 text-center">
              <h3 className="font-serif font-normal text-gray-900 text-[28px] md:text-[32px] leading-[1.2]">
                {name}
              </h3>
              <p className="font-sans text-[18px] font-semibold tracking-widest uppercase text-[#841617]">
                {role}
              </p>
            </div>
          </div>

          {/* ── Back face ── */}
          <div className="flip-box__back absolute inset-0 flex flex-col items-center justify-center text-center">
            <div className="p-8 md:p-10">
              <h3 className="font-serif font-normal text-gray-900 text-[28px] md:text-[32px] leading-[1.2] mb-1">
                {name}
              </h3>
              <p className="font-sans text-[17px] font-semibold tracking-widest uppercase text-[#841617] mb-2">
                {role}
              </p>
              <p className="text-[18px] leading-[1.7] text-gray-500 mb-4">
                {bio}
              </p>
              <a
                href={page}
                className="inline-flex items-center justify-center rounded-sm border border-gray-300 bg-white px-6 py-2.5 text-[18px] font-sans font-semibold text-gray-700 shadow transition-colors hover:bg-[#841617] hover:text-white hover:border-[#841617]"
                aria-label={`Read ${name}'s story`}
              >
                My Story
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

// ─── Page Export ──────────────────────────────────────────────────────────────

export default function Teams() {
  return (
    <div className="min-h-full antialiased">
      <Seo
        canonical="/teams"
        title="Meet the Team — GrowthWorks Systems"
        description="The leadership team behind GrowthWorks Systems. Leigh Tidwell, John Baylon, and Jhed Serrano."
      />
      <SiteHeader />
      <main>
        {/* Leadership Section */}
        <section className="bg-white py-[80px] md:py-[112px] border-b border-[#D8D5CE]">
          <div className={CONTAINER}>
            <RevealOnScroll>
              <SectionLabel label="Leadership" />
              <h1 className="font-serif font-normal text-gray-900 leading-[1.15] text-[32px] md:text-[44px] mb-4 max-w-[700px]">
                The people behind <span style={{ color: "#841617" }}>GrowthWorks Systems</span>
              </h1>
              <p className="text-[17px] leading-[1.7] text-gray-500 mb-14 max-w-[640px]">
                Revenue infrastructure built on operational discipline, enterprise thinking, and measurable outcomes.
              </p>
            </RevealOnScroll>

            <div className="mt-[140px] mb-[80px] p-10">
              {/* Leigh — centered on her own row */}
              <div className="mb-10">
                <TeamMemberCard
                  key={LEADERSHIP[0].name}
                  name={LEADERSHIP[0].name}
                  role={LEADERSHIP[0].role}
                  bio={LEADERSHIP[0].bio}
                  image={LEADERSHIP[0].image}
                  page={LEADERSHIP[0].page}
                  delay={0}
                />
              </div>

              {/* John beside Jhed */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-50">
                {LEADERSHIP.slice(1).map((member, idx) => (
                  <TeamMemberCard
                    key={member.name}
                    name={member.name}
                    role={member.role}
                    bio={member.bio}
                    image={member.image}
                    page={member.page}
                    delay={(idx + 1) * 80}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Board of Advisors */}
        <section className="bg-surface py-[80px] md:py-[112px]">
          <div className={CONTAINER}>
            <RevealOnScroll>
              <SectionLabel label="Board of Advisors" />
              <h2 className="font-serif font-normal text-gray-900 leading-[1.15] text-[32px] md:text-[44px] mb-4 max-w-[700px]">
                Guided by <span style={{ color: "#841617" }}>seasoned perspective</span>
              </h2>
              <p className="text-[17px] leading-[1.7] text-gray-500 mb-10 max-w-[640px]">
                Advisor profiles will be added here. This section is ready for content — names, photos, and bios can be added as they become available.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="border border-dashed border-gray-300 rounded-none p-8 md:p-12 text-center bg-white/50">
                <p className="text-[15px] leading-[1.7] text-gray-400 font-sans">
                  Advisor profiles coming soon
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
