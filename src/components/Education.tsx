"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import SectionHeading from "./SectionHeading";
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          badge="ACADEMIC BACKGROUND"
          title="Education"
          description="Formal foundations in computer science theory, systems architecture, and mathematical algorithms."
          badgeColor="#4169FF"
        />

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main University Degree (8 cols) */}
          {education.slice(0, 1).map((item) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-[#0B0B10] border border-white/[0.08] hover:border-[#4169FF]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/[0.07]">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-[#171720] border border-white/[0.08] text-[#4169FF] shrink-0 mt-1">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-white transition-colors">
                        {item.institution}
                      </h3>
                      <div className="text-sm font-semibold text-gradient-accent mt-1">
                        {item.degree}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row sm:flex-col sm:items-end justify-between gap-1 font-mono text-xs text-[#A1A1AA]">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#4169FF]" />
                      <span>{item.timeline}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#9747FF]" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Score highlight */}
                <div className="my-6 p-4 rounded-2xl bg-[#111116] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-[#A1A1AA] font-mono">Academic Standing:</span>
                  </div>
                  <div className="font-heading font-extrabold text-lg text-white">
                    CGPA: <span className="text-emerald-400">{item.grade}</span> / 10.0
                  </div>
                </div>

                {/* Coursework */}
                {item.coursework && (
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA]/80 uppercase tracking-wider mb-3">
                      <BookOpen className="w-3.5 h-3.5 text-[#4169FF]" />
                      <span>Relevant Coursework:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 rounded-xl text-xs font-medium bg-[#171720] border border-white/[0.06] text-white/90 hover:border-[#4169FF]/40 transition-colors"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}

          {/* Schooling Cards (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {education.slice(1).map((item, idx) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-6 rounded-2xl bg-[#0B0B10] border border-white/[0.08] hover:border-[#9747FF]/40 transition-all duration-300 shadow-lg flex-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#A1A1AA] mb-2">
                    <span>{item.timeline}</span>
                    <span className="text-[#9747FF] font-semibold">{item.location}</span>
                  </div>

                  <h4 className="font-heading font-bold text-base text-white group-hover:text-white transition-colors">
                    {item.institution}
                  </h4>

                  <div className="text-xs text-[#A1A1AA] mt-1 font-medium">
                    {item.degree}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-[#A1A1AA] font-mono">Score:</span>
                  <span className="font-mono text-sm font-bold text-white bg-[#171720] px-2.5 py-0.5 rounded-lg border border-white/[0.06]">
                    {item.grade}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
