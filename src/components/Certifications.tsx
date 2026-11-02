"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import SectionHeading from "./SectionHeading";
import { Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Certifications() {
  const { certifications } = PORTFOLIO_DATA;

  const getIssuerBadgeColor = (issuer: string) => {
    switch (issuer) {
      case "Google":
        return "text-[#4285F4] bg-[#4285F4]/10 border-[#4285F4]/20";
      case "HackerRank":
        return "text-[#00EA64] bg-[#00EA64]/10 border-[#00EA64]/20";
      case "CodeChef":
        return "text-[#9747FF] bg-[#9747FF]/10 border-[#9747FF]/20";
      case "Deloitte":
        return "text-[#86BC25] bg-[#86BC25]/10 border-[#86BC25]/20";
      default:
        return "text-[#4169FF] bg-[#4169FF]/10 border-[#4169FF]/20";
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#07070B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          badge="VALIDATED CREDENTIALS"
          title="Certifications & Badges"
          description="Officially verified competencies evaluated by industry organizations and competitive judging systems."
          badgeColor="#4169FF"
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[#0B0B10] border border-white/[0.08] hover:border-[#4169FF]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-[#171720] border border-white/[0.08] group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5 text-[#4169FF]" />
                  </div>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border ${getIssuerBadgeColor(
                      cert.issuer
                    )}`}
                  >
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base text-white group-hover:text-white transition-colors leading-snug">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{cert.platform || "Official Credential"}</span>
                </div>
                <span className="text-[#A1A1AA]/50 font-mono text-[10px]">Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
