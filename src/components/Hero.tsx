"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import HeroVisual from "./HeroVisual";
import {
  ArrowRight,
  Download,
  Code,
  Terminal,
  MapPin,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeChefIcon } from "./SocialIcons";

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsEl = document.getElementById("projects");
    if (projectsEl) {
      const navOffset = 80;
      const elementPosition = projectsEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "GitHub":
        return <GithubIcon className="w-4 h-4" />;
      case "LinkedIn":
        return <LinkedinIcon className="w-4 h-4" />;
      case "LeetCode":
        return <LeetCodeIcon className="w-4 h-4" />;
      case "CodeChef":
        return <CodeChefIcon className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-grid-pattern"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4169FF]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-[#9747FF]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111116] border border-white/[0.08] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs text-white/90 font-medium tracking-wide">
                {personal.status.indicator}
              </span>
            </div>

            {/* Name & Main Headline */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#A1A1AA] uppercase">
                <span>Computer Science &amp; Engineering Student</span>
                <span>•</span>
                <span className="text-[#4169FF]">JECRC University</span>
              </div>

              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
                <span className="block text-white">SHIVAM GOYAL</span>
                <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-gradient-accent">
                  {personal.headline}
                </span>
              </h1>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl font-normal">
              {personal.bioDescription}
            </p>

            {/* Professional Labels */}
            <div className="flex flex-wrap gap-2 pt-1">
              {personal.labels.map((label) => (
                <span
                  key={label}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium font-mono bg-[#111116] border border-white/[0.08] text-white/90 hover:border-[#4169FF]/50 transition-colors"
                >
                  #{label.replace(/\s+/g, "")}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#4169FF] to-[#9747FF] hover:from-[#5077ff] hover:to-[#a45aff] shadow-lg shadow-[#4169FF]/25 hover:shadow-xl hover:shadow-[#4169FF]/35 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.contact.resumeUrl}
                download="Shivam_Goyal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#111116] hover:bg-[#171720] border border-white/[0.1] hover:border-white/[0.2] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4 text-[#4169FF]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Location Quick Bar */}
            <div className="pt-4 border-t border-white/[0.07] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#A1A1AA]/70 mr-1">PROFILES:</span>
                {personal.socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#111116] border border-white/[0.08] text-[#A1A1AA] hover:text-white hover:border-[#4169FF]/50 hover:bg-[#171720] transition-all duration-200"
                    aria-label={`${personal.name} on ${link.platform}`}
                    title={`${link.platform}: ${link.handle}`}
                  >
                    {getSocialIcon(link.platform)}
                  </a>
                ))}
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs text-[#A1A1AA] font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#4169FF]" />
                <span>{personal.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Microservice Visual (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
