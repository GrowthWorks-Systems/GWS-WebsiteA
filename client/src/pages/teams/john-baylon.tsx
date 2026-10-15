import React from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Seo } from "@/components/Seo";

export default function JohnBaylon() {
  return (
    <div className="min-h-full antialiased">
      <Seo
        canonical="/teams/john-baylon"
        title="John Baylon — GrowthWorks Systems"
        description="John Baylon, Operations Lead at GrowthWorks Systems. Streamlines day-to-day operations, improves workflows, and implements scalable systems and automation."
      />
      <SiteHeader />
      <main>
        <section className="bg-white py-[80px] md:py-[112px] border-b border-[#D8D5CE]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-16">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/3">
                <img
                  src="/assets/images/team/John Baylon.png"
                  alt="John Baylon — Operations Lead, GrowthWorks Systems"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h1 className="font-serif font-normal text-gray-900 leading-[1.15] text-[32px] md:text-[44px] mb-4">
                  John Baylon
                </h1>
                <p className="font-sans text-[18px] font-semibold tracking-widest uppercase text-[#841617] mb-6">
                  Operations Lead
                </p>
                <p className="text-[17px] leading-[1.7] text-gray-500 mb-8">
                  Focused on streamlining day-to-day operations, improving workflows, and implementing scalable systems and automation. Supports cross-functional execution by turning plans into organized, repeatable processes. Helps ensure projects and operational priorities move forward efficiently and consistently.
                </p>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-gray-300 bg-white px-6 py-2.5 text-[18px] font-sans font-semibold text-gray-700 shadow transition-colors hover:bg-[#841617] hover:text-white hover:border-[#841617]"
                  aria-label="John Baylon on LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.227 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  View on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}