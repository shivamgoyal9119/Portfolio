"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import SectionHeading from "./SectionHeading";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#07070B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          badge="CAREER TIMELINE"
          title="Professional Experience"
          description="Real-world software engineering experience working within collaborative agile team environments."
          badgeColor="#4169FF"
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
              className="relative pl-8 sm:pl-10 before:absolute before:left-3 sm:before:left-3.5 before:top-3 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-[#4169FF] before:to-transparent"
            >
              {/* Timeline Node Icon */}
              <div className="absolute left-0 sm:left-0.5 top-0 w-6 h-6 rounded-full bg-[#0B0B10] border-2 border-[#4169FF] flex items-center justify-center shadow-lg shadow-[#4169FF]/20">
                <div className="w-2 h-2 rounded-full bg-[#4169FF]" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0B0B10] border border-white/[0.08] hover:border-[#4169FF]/40 transition-all duration-300 shadow-xl group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/[0.07]">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="font-heading font-bold text-xl text-white group-hover:text-white transition-colors">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[#4169FF]/10 text-[#4169FF] border border-[#4169FF]/20">
                        {exp.type}
                      </span>
                    </div>

                    <div className="text-base font-semibold text-gradient-accent mt-1 flex items-center gap-2">
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-[#A1A1AA]">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#4169FF]" />
                      <span>{exp.timeline}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#9747FF]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <div className="py-6 space-y-3.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-sm text-[#A1A1AA] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#4169FF] mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-[#A1A1AA]/60 mr-1">STACK:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#171720] border border-white/[0.06] text-white/90"
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
