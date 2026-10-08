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

// ─── Team Member Card (Flippable) ──────────────────────────────────────────────

function TeamMemberCard({
  name,
  role,
  bio,
  image,
  linkedin,
  delay = 0,
}: {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  delay?: number;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <RevealOnScroll delay={delay}>
      <div className="group perspective">
        <div className="flip-card-inner relative w-full h-[320px] md:h-[360px] border border-gray-200 rounded-none bg-white shadow-lg">
          {/* Front face - Portrait only */}
          <div className="flip-card-front absolute inset-0 overflow-hidden bg-[#F2E7E3]">
            {!imgError ? (
              <img
                src={image}
                alt={`${name} — ${role}, GrowthWorks Systems`}
                className="w-full h-full object-contain object-center"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-[28px] md:text-[32px] font-sans font-bold text-[#841617]">
                  {name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </span>
              </div>
            )}
            {/* Bottom gradient shadow */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/25 via-black/10 to-transparent"></div>
          </div>

          {/* Back face - Name, Role, Bio, LinkedIn */}
          <div className="flip-card-back absolute inset-0 [transform:rotateY(180deg)] p-7 md:p-8 flex flex-col items-center text-center">
            <h3 className="font-serif font-normal text-gray-900 leading-[1.2] text-[22px] md:text-[24px] mb-1">
              {name}
            </h3>
            <p className="text-[15px] font-sans font-semibold text-[#841617] tracking-wide uppercase mb-4">
              {role}
            </p>
            <p className="text-[15px] leading-[1.7] text-gray-500 mb-6 flex-1">
              {bio}
            </p>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] font-sans font-semibold text-gray-400 hover:text-[#841617] transition-colors"
              aria-label={`${name} on LinkedIn`}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
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
