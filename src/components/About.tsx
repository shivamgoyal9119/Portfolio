"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import SectionHeading from "./SectionHeading";
import {
  Server,
  Network,
  Layers,
  Cpu,
  Sparkles,
  GraduationCap,
  Code2,
  Terminal,
} from "lucide-react";

export default function About() {
  const { personal, aboutHighlights } = PORTFOLIO_DATA;

  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case "Server":
        return <Server className="w-5 h-5 text-[#00D8F6]" />;
      case "Network":
        return <Network className="w-5 h-5 text-[#38BDF8]" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-[#0284C7]" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-amber-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#00D8F6]" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#050814]">
      {/* Decorative background glow (NO PURPLE) */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0284C7]/8 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D8F6]/8 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          badge="BACKGROUND & PHILOSOPHY"
          title="A Little About Me"
          description="Bridging strong algorithmic thinking with clean, scalable distributed backend architecture."
          badgeColor="#00D8F6"
        />

        {/* Editorial Grid: Narrative & Quick Card (Left 6 cols), Core Pillars (Right 6 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative Editorial */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0B1120] border border-white/[0.09] relative group shadow-xl">
              <div className="space-y-4 text-[#94A3B8] text-base leading-relaxed">
                {personal.aboutParagraphs.map((paragraph, index) => (
                  <p key={index} className="first:text-white first:font-medium">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Quick Academic Snapshot inside About */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-2xl bg-[#0E1527] border border-white/[0.07] hover:border-[#00D8F6]/40 transition-colors">
                  <div className="flex items-center gap-2 text-xs text-[#94A3B8] font-mono mb-1">
                    <GraduationCap className="w-3.5 h-3.5 text-[#00D8F6]" />
                    <span>UNIVERSITY</span>
                  </div>
                  <div className="text-white text-xs font-semibold">JECRC University</div>
                  <div className="text-[11px] text-[#94A3B8] mt-0.5 font-mono">B.Tech CSE • CGPA 8.6</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#0E1527] border border-white/[0.07] hover:border-[#38BDF8]/40 transition-colors">
                  <div className="flex items-center gap-2 text-xs text-[#94A3B8] font-mono mb-1">
                    <Code2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>FOCUS AREA</span>
                  </div>
                  <div className="text-white text-xs font-semibold">Java &amp; Spring Boot</div>
                  <div className="text-[11px] text-[#94A3B8] mt-0.5 font-mono">Microservices &amp; Systems</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Core Highlights */}
          <div className="lg:col-span-6 space-y-3.5">
            <h3 className="font-heading font-semibold text-lg text-white mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#00D8F6]" />
              Core Engineering Pillars
            </h3>

            {aboutHighlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="p-5 rounded-2xl bg-[#0B1120] border border-white/[0.08] hover:border-[#0284C7]/50 hover:bg-[#10192D] transition-all duration-300 group flex items-start gap-4 shadow-sm"
              >
                <div className="p-3 rounded-xl bg-[#15223C] border border-white/[0.08] group-hover:scale-105 transition-transform shrink-0 shadow-sm">
                  {getHighlightIcon(highlight.icon)}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-white font-semibold text-sm group-hover:text-white transition-colors">
                      {highlight.title}
                    </h4>
                    <span className="font-mono text-[10px] text-[#00D8F6] bg-[#00D8F6]/10 px-1.5 py-0.5 rounded border border-[#00D8F6]/20">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
