"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import SectionHeading from "./SectionHeading";
import AirXDriveVisual from "./ProjectVisuals/AirXDriveVisual";
import MyCineVerseVisual from "./ProjectVisuals/MyCineVerseVisual";
import CodeNestVisual from "./ProjectVisuals/CodeNestVisual";
import {
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const flagshipProject = projects.find((p) => p.featured) || projects[0];
  const secondaryProjects = projects.filter((p) => !p.featured);

  const renderProjectVisual = (id: string) => {
    switch (id) {
      case "airx-drive":
        return <AirXDriveVisual />;
      case "mycineverse":
        return <MyCineVerseVisual />;
      case "codenest":
        return <CodeNestVisual />;
      default:
        return <AirXDriveVisual />;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#030407]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#6366F1]/10 via-[#38BDF8]/10 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          badge="FEATURED WORK & ARCHITECTURES"
          title="Engineered Projects"
          description="Real software systems engineered from ground up focusing on scalability, distributed resiliency, and clean architecture."
          badgeColor="#38BDF8"
        />

        {/* 1. Flagship Project: AirX Drive */}
        <div className="mb-14">
          <div className="relative rounded-3xl bg-[#0A0C14] border border-white/[0.1] hover:border-[#6366F1]/60 transition-all duration-300 p-6 sm:p-10 shadow-2xl overflow-hidden group">
            {/* Top flagship badge */}
            <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#6366F1]/20 via-[#38BDF8]/15 to-[#A855F7]/20 border border-[#6366F1]/40 text-xs font-semibold text-white shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span className="text-gradient-accent">FLAGSHIP ARCHITECTURAL PROJECT</span>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3">
                {flagshipProject.githubUrl ? (
                  <a
                    href={flagshipProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#141726] hover:bg-[#1C2237] border border-white/[0.1] hover:border-[#38BDF8]/50 transition-all shadow-sm"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>View Repository</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-[#94A3B8]/60 bg-[#0E111D] border border-white/[0.05]">
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Repo Private / Offline</span>
                  </span>
                )}

                {flagshipProject.liveUrl ? (
                  <a
                    href={flagshipProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#6366F1] hover:to-[#8B5CF6] transition-all shadow-md shadow-[#6366F1]/30"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-[#94A3B8]/60 bg-[#0E111D] border border-white/[0.05]">
                    <span>Local Deployment Target</span>
                  </span>
                )}
              </div>
            </div>

            {/* Grid Layout: Details on left, interactive preview on right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Details & Key Contributions */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                    {flagshipProject.title}
                  </h3>
                  <div className="text-sm font-mono font-medium text-gradient-accent mt-1">
                    {flagshipProject.subtitle}
                  </div>
                  <p className="text-sm text-[#94A3B8] mt-3 leading-relaxed">
                    {flagshipProject.description}
                  </p>
                </div>

                {/* Key Contributions List */}
                <div className="space-y-2.5">
                  <div className="text-xs font-mono uppercase tracking-wider text-white/90 font-semibold">
                    Key Technical Highlights:
                  </div>
                  {flagshipProject.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#94A3B8] leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Architectural Patterns */}
                {flagshipProject.architectureHighlights && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                    {flagshipProject.architectureHighlights.map((arch, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-[#0F121E] border border-white/[0.07] space-y-1 hover:border-[#6366F1]/40 transition-colors"
                      >
                        <div className="text-white text-xs font-semibold flex items-center gap-1.5">
                          <Cpu className="w-3 h-3 text-[#38BDF8]" />
                          <span>{arch.pattern}</span>
                        </div>
                        <p className="text-[11px] text-[#94A3B8] leading-normal font-sans">
                          {arch.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {flagshipProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#141726] border border-white/[0.08] text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Custom Architecture Visual */}
              <div className="lg:col-span-6">
                {renderProjectVisual(flagshipProject.id)}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Secondary Projects: MyCineVerse & CodeNest */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#0A0C14] border border-white/[0.09] hover:border-[#6366F1]/50 hover:bg-[#0E111D] transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Visual Preview */}
                <div className="mb-6">{renderProjectVisual(project.id)}</div>

                {/* Project Header */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs font-mono text-gradient-accent mt-0.5">
                      {project.subtitle}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-[#141726] hover:bg-[#1E233A] text-white border border-white/[0.09] transition-colors shadow-sm"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4 text-[#38BDF8]" />
                      </a>
                    ) : (
                      <span
                        className="p-2 rounded-xl bg-[#0E111D] text-[#94A3B8]/40 border border-white/[0.05]"
                        title="Repository link placeholder"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </span>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-[#141726] hover:bg-[#1E233A] text-white border border-white/[0.09] transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Bullets */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-[#141726] border border-white/[0.07] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
