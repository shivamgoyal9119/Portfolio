"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
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
        return <Code2 className="w-4 h-4 text-[#4169FF]" />;
      case "Server":
        return <Server className="w-4 h-4 text-[#9747FF]" />;
      case "Layout":
        return <Layout className="w-4 h-4 text-cyan-400" />;
      case "Database":
        return <Database className="w-4 h-4 text-emerald-400" />;
      case "Boxes":
        return <Boxes className="w-4 h-4 text-amber-400" />;
      case "Wrench":
        return <Wrench className="w-4 h-4 text-rose-400" />;
      case "Users":
        return <Users className="w-4 h-4 text-indigo-400" />;
      default:
        return <Code2 className="w-4 h-4 text-[#4169FF]" />;
    }
  };

  const filteredCategories =
    selectedCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111116] border border-white/[0.08] text-xs font-mono text-[#4169FF] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4169FF]" />
              TECHNICAL COMPETENCIES
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Skills &amp; Technologies
            </h2>
            <p className="text-[#A1A1AA] text-sm sm:text-base mt-2 max-w-xl font-normal">
              A comprehensive toolkit cultivated through rigorous coursework, microservice projects, and 1500+ algorithmic challenges.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#111116] rounded-xl border border-white/[0.08] max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-[#4169FF] text-white shadow-sm"
                    : "text-[#A1A1AA] hover:text-white hover:bg-white/[0.04]"
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
              className="p-6 rounded-2xl bg-[#0B0B10] border border-white/[0.07] hover:border-[#4169FF]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#4169FF]/5 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#171720] border border-white/[0.07] group-hover:scale-105 transition-transform">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <h3 className="font-heading font-bold text-white text-sm tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-[#A1A1AA]/60 bg-[#171720] px-2 py-0.5 rounded-full border border-white/[0.05]">
                    {category.skills.length}
                  </span>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-3 py-1.5 rounded-xl bg-[#111116] hover:bg-[#171720] border border-white/[0.07] hover:border-[#4169FF]/40 text-xs text-white/90 font-medium transition-all duration-200 flex items-center gap-1.5 group/item cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4169FF]/60 group-hover/item:bg-[#4169FF] transition-colors" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer status info */}
              <div className="pt-5 mt-5 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-[#A1A1AA]/50">
                <span>Verified in code &amp; tests</span>
                <CheckCircle className="w-3 h-3 text-[#4169FF]/60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

