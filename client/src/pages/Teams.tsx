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
  },
  {
    name: "Clayton Tidwell",
    role: "Founder",
    bio: "Three decades in operational problem solving across enterprise systems, Marine Corps leadership, and large-scale integration. Founded GrowthWorks Systems to design the complete revenue architecture that growing businesses actually need.",
    image: "/assets/images/team/clayton-tidwell.png",
    linkedin: "https://www.linkedin.com/in/clayton-tidwell-11a2525",
  },
  {
    name: "John Baylon",
    role: "Operations Lead",
    bio: "Focused on streamlining day-to-day operations, improving workflows, and implementing scalable systems and automation. Supports cross-functional execution by turning plans into organized, repeatable processes. Helps ensure projects and operational priorities move forward efficiently and consistently.",
    image: "/assets/images/team/john-baylon.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Jhed Serrano",
    role: "Lead Developer",
    bio: "Lead Developer focused on building practical, scalable systems across web development, AI, automation, and platform integrations. Turns complex workflows into reliable solutions, connects tools and infrastructure, improves deployment and operational systems, and helps move projects from concept to implementation with clarity, adaptability, and technical precision.",
    image: "/assets/images/team/jhed-serrano.png",
    linkedin: "https://www.linkedin.com",
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

// ─── Team Member Card ────────────────────────────────────────────────────────────

function TeamMemberCard({
  name,
  role,
  image,
  delay = 0,
}: {
  name: string;
  role: string;
  image: string;
  delay?: number;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <RevealOnScroll delay={delay}>
      <div className="bg-white shadow-xl shadow-amber-900/20 flex flex-col">
        {/* Portrait container - image flushed to bottom */}
        <div className="relative w-full h-[260px] md:h-[300px] flex items-end">
          {!imgError ? (
            <img
              src={image}
              alt={`${name} — ${role}, GrowthWorks Systems`}
              className="w-full h-full object-contain object-bottom"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[28px] md:text-[32px] font-sans font-bold text-[#841617]">
                {name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </span>
            </div>
          )}
          {/* Subtle darker shadow at bottom of portrait */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 via-black/8 to-transparent pointer-events-none"></div>
        </div>

        {/* Name and Role below portrait */}
        <div className="pt-4 pb-2">
          <h3 className="font-serif font-normal text-gray-900 text-center text-[20px] md:text-[22px] mb-1">
            {name}
          </h3>
          <p className="text-[14px] font-sans font-semibold text-[#841617] text-center tracking-wide uppercase">
            {role}
          </p>
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
        description="The leadership team behind GrowthWorks Systems. Leigh Tidwell, Clayton Tidwell, John Baylon, and Jhed Serrano."
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {LEADERSHIP.map((member, idx) => (
                <TeamMemberCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  delay={idx * 80}
                />
              ))}
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
