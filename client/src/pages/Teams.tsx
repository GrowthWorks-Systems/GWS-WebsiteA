import React, { useState, useRef } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Seo } from "@/components/Seo";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// ─── Constants ────────────────────────────────────────────────────────────────

const CONTAINER = "max-w-[1200px] mx-auto px-5 md:px-8 lg:px-16";

// ─── Team Data ───────────────────────────────────────────────────────────────

const LEADERSHIP = [
  {
    name: "Leigh Tidwell",
    role: "Chief Revenue Officer",
    bio: "Leigh leads GrowthWorks Systems' revenue initiatives across marketing, sales, and business development. She also oversees GWS sales affiliates, including training, development, and sales standards, helping ensure every revenue initiative stays focused on creating measurable value and sustainable growth for our clients.",
    image: "/assets/images/team/leigh-tidwell.jpg",
    initials: "LT",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Clayton Tidwell",
    role: "Founder",
    bio: "Three decades in operational problem solving across enterprise systems, Marine Corps leadership, and large-scale integration. Founded GrowthWorks Systems to design the complete revenue architecture that growing businesses actually need.",
    image: "/assets/images/branding/clayton-tidwell.jpg",
    initials: "CT",
    linkedin: "https://www.linkedin.com/in/clayton-tidwell-11a2525",
  },
  {
    name: "John Baylon",
    role: "Team Member",
    bio: "Brings expertise to GrowthWorks Systems' delivery and client engagement. Committed to building the operational discipline that turns strategy into measurable revenue outcomes.",
    image: "/assets/images/team/john-baylon.jpg",
    initials: "JB",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Jhed Serrano",
    role: "Team Member",
    bio: "Part of the GrowthWorks Systems team focused on executing the firm's methodology across client engagements. Dedicated to building the systems and capabilities that create lasting revenue performance.",
    image: "/assets/images/team/jhed-serrano.jpg",
    initials: "JS",
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

// ─── Team Member Card ────────────────────────────────────────────────────────

function TeamMemberCard({
  name,
  role,
  bio,
  image,
  initials,
  linkedin,
  delay = 0,
}: {
  name: string;
  role: string;
  bio: string;
  image: string;
  initials: string;
  linkedin: string;
  delay?: number;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <RevealOnScroll delay={delay}>
      <div className="bg-white border border-gray-200 rounded-none p-7 md:p-8 flex flex-col items-center text-center h-full">
        {/* Photo */}
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gray-100 mb-5 shrink-0 bg-[#F2E7E3]">
          {!imgError ? (
            <img
              src={image}
              alt={`${name} — ${role}, GrowthWorks Systems`}
              className="w-full h-full object-cover object-top"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[28px] md:text-[32px] font-sans font-bold text-[#841617]">
                {initials}
              </span>
            </div>
          )}
        </div>

        {/* Name & Role */}
        <h3 className="font-serif font-normal text-gray-900 leading-[1.2] text-[22px] md:text-[24px] mb-1">
          {name}
        </h3>
        <p className="text-[15px] font-sans font-semibold text-[#841617] tracking-wide uppercase mb-4">
          {role}
        </p>

        {/* Bio */}
        <p className="text-[15px] leading-[1.7] text-gray-500 flex-1">
          {bio}
        </p>

        {/* LinkedIn */}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-5 text-[14px] font-sans font-semibold text-gray-400 hover:text-[#841617] transition-colors"
          aria-label={`${name} on LinkedIn`}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
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
                  bio={member.bio}
                  image={member.image}
                  initials={member.initials}
                  linkedin={member.linkedin}
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
