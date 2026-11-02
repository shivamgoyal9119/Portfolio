"use client";

import React from "react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import SectionHeading from "./SectionHeading";
import AirXDriveVisual from "./ProjectVisuals/AirXDriveVisual";
import MyCineVerseVisual from "./ProjectVisuals/MyCineVerseVisual";
import CodeNestVisual from "./ProjectVisuals/CodeNestVisual";
import {
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
  GitFork,
  Star,
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
    <section id="projects" className="py-24 relative overflow-hidden bg-[#050507]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4169FF]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          badge="FEATURED WORK & ARCHITECTURES"
          title="Engineered Projects"
          description="Real software systems engineered from ground up focusing on scalability, distributed resiliency, and clean architecture."
          badgeColor="#4169FF"
        />

        {/* 1. Flagship Project: AirX Drive */}
        <div className="mb-14">
          <div className="relative rounded-3xl bg-[#0B0B10] border border-white/[0.1] hover:border-[#4169FF]/50 transition-all duration-300 p-6 sm:p-10 shadow-2xl overflow-hidden group">
            {/* Top flagship badge */}
            <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#4169FF]/20 to-[#9747FF]/20 border border-[#4169FF]/40 text-xs font-semibold text-white">
                <Sparkles className="w-3.5 h-3.5 text-[#4169FF]" />
                <span>FLAGSHIP ARCHITECTURAL PROJECT</span>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3">
                {flagshipProject.githubUrl ? (
                  <a
                    href={flagshipProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-white bg-[#171720] hover:bg-[#20202c] border border-white/[0.1] hover:border-[#4169FF]/40 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-[#A1A1AA]/60 bg-[#111116] border border-white/[0.05]">
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Repo Private / Offline</span>
                  </span>
                )}

                {flagshipProject.liveUrl ? (
                  <a
                    href={flagshipProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-white bg-gradient-to-r from-[#4169FF] to-[#9747FF] hover:from-[#5077ff] hover:to-[#a45aff] transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-[#A1A1AA]/50 bg-[#111116] border border-white/[0.05]">
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
                  <p className="text-sm text-[#A1A1AA] mt-3 leading-relaxed">
                    {flagshipProject.description}
                  </p>
                </div>

                {/* Key Contributions List */}
                <div className="space-y-2.5">
                  <div className="text-xs font-mono uppercase tracking-wider text-white/80 font-semibold">
                    Key Technical Highlights:
                  </div>
                  {flagshipProject.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#A1A1AA] leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4169FF] shrink-0 mt-0.5" />
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
                        className="p-3 rounded-xl bg-[#111116] border border-white/[0.06] space-y-1"
                      >
                        <div className="text-white text-xs font-semibold flex items-center gap-1.5">
                          <Cpu className="w-3 h-3 text-[#4169FF]" />
                          <span>{arch.pattern}</span>
                        </div>
                        <p className="text-[11px] text-[#A1A1AA]/80 leading-normal">
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
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#171720] border border-white/[0.07] text-white/90"
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
              className="p-6 sm:p-8 rounded-3xl bg-[#0B0B10] border border-white/[0.08] hover:border-[#4169FF]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
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
                        className="p-2 rounded-xl bg-[#171720] hover:bg-[#222230] text-white border border-white/[0.08] transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    ) : (
                      <span
                        className="p-2 rounded-xl bg-[#111116] text-[#A1A1AA]/40 border border-white/[0.05]"
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
                        className="p-2 rounded-xl bg-[#171720] hover:bg-[#222230] text-white border border-white/[0.08] transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Bullets */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#A1A1AA]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4169FF] shrink-0 mt-0.5" />
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
                    className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-[#111116] border border-white/[0.06] text-white/80"
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
