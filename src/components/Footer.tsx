"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUp, FileText } from "lucide-react";

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-12 bg-[#03060E] border-t border-white/[0.08] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00D8F6] via-[#0284C7] to-[#2563EB] p-[1.5px] shadow-sm shadow-[#00D8F6]/25">
              <div className="w-full h-full bg-[#070C18] rounded-[9px] flex items-center justify-center">
                <span className="font-heading font-bold text-xs text-white">
                  {personal.monogram}
                </span>
              </div>
            </div>
            <div>
              <div className="font-heading font-bold text-sm text-white">
                {personal.name}
              </div>
              <div className="font-mono text-[11px] text-[#94A3B8]">
                Java Backend Developer • Computer Science &amp; Engineering
              </div>
            </div>
          </div>

          {/* Quick Resume Link & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center md:text-right">
            <a
              href={personal.contact.resumeUrl}
              download="Shivam_Goyal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono text-white/95 bg-[#0B1120] hover:bg-[#15223C] border border-white/[0.09] hover:border-[#00D8F6]/50 transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#00D8F6]" />
              <span>Resume PDF (195 KB)</span>
            </a>

            <div className="space-y-0.5">
              <p className="text-xs text-[#94A3B8] font-mono">
                Designed &amp; Engineered with Next.js &amp; Tailwind CSS
              </p>
              <p className="text-[11px] text-[#94A3B8]/60 font-mono">
                © {new Date().getFullYear()} Shivam Goyal. All rights reserved.
              </p>
            </div>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#0B1120] hover:bg-[#15223C] border border-white/[0.09] text-[#94A3B8] hover:text-[#00D8F6] hover:border-[#00D8F6]/40 transition-all shadow-sm group"
            aria-label="Scroll back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
