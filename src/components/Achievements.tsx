"use client";

import React, { useState, useEffect, useRef } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import SectionHeading from "./SectionHeading";
import {
  Trophy,
  ExternalLink,
  Medal,
} from "lucide-react";
import { LeetCodeIcon, CodeChefIcon } from "./SocialIcons";

export default function Achievements() {
  const { achievementStats, honors } = PORTFOLIO_DATA;
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-[#050814]"
    >
      {/* Background glow (NO PURPLE) */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-[#0284C7]/8 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeading
            badge="ALGORITHMIC EXCELLENCE"
            title="Competitive Programming & Honors"
            description="High-tier contest rankings, deep algorithmic intuition, and time-pressured problem solving milestones."
            badgeColor="#00D8F6"
          />

          {/* Quick Profile Links */}
          <div className="flex items-center gap-3 mb-14 md:mb-0">
            <a
              href="https://leetcode.com/u/Shivam9119/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#0B1120] hover:bg-[#15223C] border border-white/[0.09] hover:border-[#FFA116]/60 transition-all shadow-sm"
            >
              <LeetCodeIcon className="w-3.5 h-3.5 text-[#FFA116]" />
              <span>LeetCode Profile</span>
              <ExternalLink className="w-3 h-3 text-[#94A3B8]" />
            </a>

            <a
              href="https://www.codechef.com/users/shivam_9119"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#0B1120] hover:bg-[#15223C] border border-white/[0.09] hover:border-[#00D8F6]/60 transition-all shadow-sm"
            >
              <CodeChefIcon className="w-3.5 h-3.5 text-[#00D8F6]" />
              <span>CodeChef Profile</span>
              <ExternalLink className="w-3 h-3 text-[#94A3B8]" />
            </a>
          </div>
        </div>

        {/* 1. Large Numeric Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
          {achievementStats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-3xl bg-[#0B1120] border border-white/[0.09] hover:border-[#00D8F6]/60 hover:bg-[#0E1527] transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] text-[#94A3B8] border border-white/[0.07]">
                    {stat.platform}
                  </span>
                  {stat.badge && (
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {stat.badge}
                    </span>
                  )}
                </div>

                {/* Animated Stat Value */}
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#00D8F6] group-hover:to-[#38BDF8] transition-all">
                  {stat.value}
                </div>

                <div className="text-xs font-semibold text-slate-100 mt-2">
                  {stat.label}
                </div>
              </div>

              <p className="text-[11px] text-[#94A3B8] mt-4 pt-3 border-t border-white/[0.05] leading-relaxed">
                {stat.context}
              </p>
            </div>
          ))}
        </div>

        {/* 2. Hackathons, Contests & Tournament Honors */}
        <div className="space-y-4">
          <h3 className="font-heading font-bold text-xl text-white flex items-center gap-2">
            <Medal className="w-5 h-5 text-amber-400" />
            <span>Contest Wins &amp; Corporate Invitations</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {honors.map((honor, idx) => (
              <div
                key={honor.event + idx}
                className="p-6 rounded-3xl bg-[#0B1120] border border-white/[0.09] hover:border-[#00D8F6]/50 hover:bg-[#0E1527] transition-all duration-300 relative group overflow-hidden shadow-xl"
              >
                {/* Subtle top indicator (NO PURPLE) */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D8F6] via-[#0284C7] to-[#2563EB]" />

                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2.5 rounded-2xl bg-[#15223C] border border-white/[0.08] text-amber-400 shadow-sm">
                    <Trophy className="w-5 h-5" />
                  </div>
                  {honor.rank && (
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#0284C7]/15 text-[#38BDF8] border border-[#0284C7]/30 shadow-sm">
                      {honor.rank}
                    </span>
                  )}
                </div>

                <h4 className="font-heading font-bold text-base text-white group-hover:text-white transition-colors">
                  {honor.title} — {honor.event}
                </h4>

                <div className="text-xs font-mono text-[#00D8F6] mt-1 font-semibold">
                  {honor.organizer}
                </div>

                <p className="text-xs text-[#94A3B8] mt-3 leading-relaxed">
                  {honor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
