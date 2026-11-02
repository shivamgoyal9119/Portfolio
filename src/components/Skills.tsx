"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import SectionHeading from "./SectionHeading";
import {
  Code2,
  Server,
  Layout,
  Database,
  Boxes,
  Wrench,
  Users,
  CheckCircle,
} from "lucide-react";

export default function Skills() {
  const { skillCategories } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...skillCategories.map((c) => c.title)];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-4 h-4 text-[#00D8F6]" />;
      case "Server":
        return <Server className="w-4 h-4 text-[#38BDF8]" />;
      case "Layout":
        return <Layout className="w-4 h-4 text-[#0284C7]" />;
      case "Database":
        return <Database className="w-4 h-4 text-emerald-400" />;
      case "Boxes":
        return <Boxes className="w-4 h-4 text-amber-300" />;
      case "Wrench":
        return <Wrench className="w-4 h-4 text-cyan-400" />;
      case "Users":
        return <Users className="w-4 h-4 text-sky-400" />;
      default:
        return <Code2 className="w-4 h-4 text-[#00D8F6]" />;
    }
  };

  const filteredCategories =
    selectedCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#03060E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="TECHNICAL COMPETENCIES"
            title="Skills & Technologies"
            description="A comprehensive toolkit cultivated through rigorous coursework, microservice projects, and 1500+ algorithmic challenges."
            badgeColor="#00D8F6"
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#0B1120] rounded-2xl border border-white/[0.08] max-w-full overflow-x-auto shadow-inner shadow-black/60 mb-14 md:mb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#00D8F6] to-[#0284C7] text-white shadow-md shadow-[#00D8F6]/30 font-semibold"
                    : "text-[#94A3B8] hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-3xl bg-[#0B1120] border border-white/[0.08] hover:border-[#0284C7]/60 hover:bg-[#0E1527] transition-all duration-300 hover:shadow-xl hover:shadow-[#0284C7]/10 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-[#15223C] border border-white/[0.08] group-hover:scale-105 transition-transform shadow-sm">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <h3 className="font-heading font-bold text-white text-sm tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-[#00D8F6] bg-[#00D8F6]/10 px-2.5 py-0.5 rounded-full border border-[#00D8F6]/20">
                    {category.skills.length}
                  </span>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-3 py-1.5 rounded-xl bg-[#10192D] hover:bg-[#16223D] border border-white/[0.07] hover:border-[#00D8F6]/40 text-xs text-slate-200 font-medium transition-all duration-200 flex items-center gap-1.5 group/item cursor-default shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D8F6] group-hover/item:shadow-[0_0_8px_#00D8F6] transition-all" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer status info */}
              <div className="pt-5 mt-5 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-[#94A3B8]/60">
                <span>Verified in code &amp; tests</span>
                <CheckCircle className="w-3.5 h-3.5 text-[#00D8F6]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
