"use client";

import React, { useState, useEffect, useRef } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Trophy,
  Award,
  Code,
  Flame,
  ExternalLink,
  Medal,
  Sparkles,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

export default function Achievements() {
  const { achievementStats, honors, personal } = PORTFOLIO_DATA;
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
      className="py-24 relative overflow-hidden bg-[#07070B]"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#9747FF]/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111116] border border-white/[0.08] text-xs font-mono text-[#9747FF] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9747FF]" />
              ALGORITHMIC EXCELLENCE
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Competitive Programming &amp; Honors
            </h2>
            <p className="text-[#A1A1AA] text-sm sm:text-base mt-2 max-w-xl font-normal">
              High-tier contest rankings, deep algorithmic intuition, and time-pressured problem solving milestones.
            </p>
          </div>

          {/* Quick Profile Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://leetcode.com/u/shivamgoyal9119"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-white bg-[#111116] hover:bg-[#171720] border border-white/[0.08] hover:border-[#FFA116]/50 transition-colors"
            >
              <Code className="w-3.5 h-3.5 text-[#FFA116]" />
              <span>LeetCode Profile</span>
              <ExternalLink className="w-3 h-3 text-[#A1A1AA]" />
            </a>

            <a
              href="https://www.codechef.com/users/shivamgoyal9119"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-white bg-[#111116] hover:bg-[#171720] border border-white/[0.08] hover:border-[#9747FF]/50 transition-colors"
            >
              <Trophy className="w-3.5 h-3.5 text-[#9747FF]" />
              <span>CodeChef Profile</span>
              <ExternalLink className="w-3 h-3 text-[#A1A1AA]" />
            </a>
          </div>
        </div>

        {/* 1. Large Numeric Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
          {achievementStats.map((stat, idx) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl bg-[#0B0B10] border border-white/[0.08] hover:border-[#4169FF]/50 hover:bg-[#111116] transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-[#A1A1AA] border border-white/[0.05]">
                    {stat.platform}
                  </span>
                  {stat.badge && (
                    <span className="text-[10px] font-mono text-emerald-400 font-medium">
                      {stat.badge}
                    </span>
                  )}
                </div>

                {/* Animated Stat Value */}
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#4169FF] transition-all">
                  {stat.value}
                </div>

                <div className="text-xs font-semibold text-white/90 mt-2">
                  {stat.label}
                </div>
              </div>

              <p className="text-[11px] text-[#A1A1AA] mt-4 pt-3 border-t border-white/[0.05] leading-relaxed">
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
                className="p-6 rounded-2xl bg-[#0B0B10] border border-white/[0.08] hover:border-[#9747FF]/40 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Subtle top indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4169FF] to-[#9747FF]" />

                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-[#171720] border border-white/[0.06] text-amber-400">
                    <Trophy className="w-5 h-5" />
                  </div>
                  {honor.rank && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-[#9747FF]/15 text-[#b57eff] border border-[#9747FF]/30">
                      {honor.rank}
                    </span>
                  )}
                </div>

                <h4 className="font-heading font-bold text-base text-white group-hover:text-white transition-colors">
                  {honor.title} — {honor.event}
                </h4>

                <div className="text-xs font-mono text-[#4169FF] mt-1">
                  {honor.organizer}
                </div>

                <p className="text-xs text-[#A1A1AA] mt-3 leading-relaxed">
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

