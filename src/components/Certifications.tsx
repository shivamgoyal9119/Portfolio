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
        return "text-[#00D8F6] bg-[#00D8F6]/15 border-[#00D8F6]/30 shadow-sm shadow-[#00D8F6]/20";
      case "HackerRank":
        return "text-[#10B981] bg-[#10B981]/15 border-[#10B981]/30 shadow-sm shadow-[#10B981]/20";
      case "CodeChef":
        return "text-[#38BDF8] bg-[#38BDF8]/15 border-[#38BDF8]/30 shadow-sm shadow-[#38BDF8]/20";
      case "Deloitte":
        return "text-[#A3E635] bg-[#A3E635]/15 border-[#A3E635]/30 shadow-sm shadow-[#A3E635]/20";
      default:
        return "text-[#0284C7] bg-[#0284C7]/15 border-[#0284C7]/30 shadow-sm shadow-[#0284C7]/20";
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#050814]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          badge="VALIDATED CREDENTIALS"
          title="Certifications & Badges"
          description="Officially verified competencies evaluated by industry organizations and competitive judging systems."
          badgeColor="#00D8F6"
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
              className="p-6 rounded-3xl bg-[#0B1120] border border-white/[0.09] hover:border-[#00D8F6]/50 hover:bg-[#0E1527] transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-2xl bg-[#15223C] border border-white/[0.08] group-hover:scale-105 transition-transform shadow-sm">
                    <Award className="w-5 h-5 text-[#00D8F6]" />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold border ${getIssuerBadgeColor(
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

              <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{cert.platform || "Official Credential"}</span>
                </div>
                <span className="text-[#00D8F6] font-mono text-[10px] bg-[#00D8F6]/10 px-2 py-0.5 rounded border border-[#00D8F6]/20">Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
