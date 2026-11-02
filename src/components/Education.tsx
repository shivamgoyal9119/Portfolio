"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import SectionHeading from "./SectionHeading";
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#030407]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          badge="ACADEMIC BACKGROUND"
          title="Education"
          description="Formal foundations in computer science theory, systems architecture, and mathematical algorithms."
          badgeColor="#38BDF8"
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
              className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-[#0A0C14] border border-white/[0.09] hover:border-[#6366F1]/50 hover:bg-[#0E111D] transition-all duration-300 shadow-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/[0.07]">
                  <div className="flex items-start gap-3.5">
                    <div className="p-3 rounded-2xl bg-[#141726] border border-white/[0.08] text-[#38BDF8] shrink-0 mt-1 shadow-sm">
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

                  <div className="flex flex-row sm:flex-col sm:items-end justify-between gap-1 font-mono text-xs text-[#94A3B8]">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>{item.timeline}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#A855F7]" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Score highlight */}
                <div className="my-6 p-4 rounded-2xl bg-[#0F121E] border border-white/[0.07] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-[#94A3B8] font-mono">Academic Standing:</span>
                  </div>
                  <div className="font-heading font-extrabold text-lg text-white">
                    CGPA: <span className="text-emerald-400 font-mono">{item.grade}</span> / 10.0
                  </div>
                </div>

                {/* Coursework */}
                {item.coursework && (
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-3">
                      <BookOpen className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>Relevant Coursework:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1.5 rounded-xl text-xs font-medium bg-[#141726] border border-white/[0.07] text-slate-200 hover:border-[#38BDF8]/50 hover:bg-[#1A1F33] transition-all"
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
                className="p-6 rounded-3xl bg-[#0A0C14] border border-white/[0.09] hover:border-[#A855F7]/50 hover:bg-[#0E111D] transition-all duration-300 shadow-xl flex-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] mb-2">
                    <span>{item.timeline}</span>
                    <span className="text-[#C084FC] font-semibold">{item.location}</span>
                  </div>

                  <h4 className="font-heading font-bold text-base text-white group-hover:text-white transition-colors">
                    {item.institution}
                  </h4>

                  <div className="text-xs text-[#94A3B8] mt-1 font-medium">
                    {item.degree}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-[#94A3B8] font-mono">Score:</span>
                  <span className="font-mono text-sm font-bold text-white bg-[#141726] px-3 py-0.5 rounded-xl border border-white/[0.08]">
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
