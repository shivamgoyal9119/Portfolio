"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import SectionHeading from "./SectionHeading";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#05060A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          badge="CAREER TIMELINE"
          title="Professional Experience"
          description="Real-world software engineering experience working within collaborative agile team environments."
          badgeColor="#38BDF8"
        />

        {/* Experience Timeline */}
        <div className="max-w-4xl">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company + idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 sm:pl-10 before:absolute before:left-3 sm:before:left-3.5 before:top-3 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-[#6366F1] via-[#A855F7] before:to-transparent"
            >
              {/* Timeline Node Icon */}
              <div className="absolute left-0 sm:left-0.5 top-0 w-6 h-6 rounded-full bg-[#080A12] border-2 border-[#6366F1] flex items-center justify-center shadow-lg shadow-[#6366F1]/40">
                <div className="w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_6px_#38BDF8]" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0C14] border border-white/[0.08] hover:border-[#6366F1]/50 hover:bg-[#0E111D] transition-all duration-300 shadow-xl group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/[0.07]">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="font-heading font-bold text-xl text-white group-hover:text-white transition-colors">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[#6366F1]/15 text-[#818CF8] border border-[#6366F1]/30">
                        {exp.type}
                      </span>
                    </div>

                    <div className="text-base font-semibold text-gradient-accent mt-1 flex items-center gap-2">
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-[#94A3B8]">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>{exp.timeline}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#A855F7]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <div className="py-6 space-y-3.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-sm text-[#94A3B8] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#38BDF8] mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-[#94A3B8]/70 mr-1">STACK:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#141726] border border-white/[0.07] text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
