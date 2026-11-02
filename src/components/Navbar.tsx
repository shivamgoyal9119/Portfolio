"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Menu, X, FileText, ChevronRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-[#030407]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity / Monogram */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="group flex items-center gap-3 cursor-pointer select-none"
            aria-label="Shivam Goyal Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#38BDF8] via-[#6366F1] to-[#A855F7] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-[#6366F1]/25">
              <div className="w-full h-full bg-[#07090E] rounded-[10px] flex items-center justify-center">
                <span className="font-heading font-bold text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC]">
                  {PORTFOLIO_DATA.personal.monogram}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base text-white tracking-tight group-hover:text-white transition-colors flex items-center gap-1.5">
                {PORTFOLIO_DATA.personal.name}
                <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] inline-block shadow-[0_0_8px_#06B6D4] animate-pulse"></span>
              </span>
              <span className="font-mono text-[11px] text-[#94A3B8] tracking-wider uppercase">
                Backend Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0C0E17]/85 px-4 py-1.5 rounded-full border border-white/[0.09] backdrop-blur-xl shadow-inner shadow-black/60">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-[#94A3B8] hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6366F1]/25 via-[#8B5CF6]/25 to-[#06B6D4]/20 border border-[#6366F1]/45 -z-10 shadow-sm" />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.contact.resumeUrl}
              download="Shivam_Goyal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#A855F7] hover:from-[#6366F1] hover:via-[#8B5CF6] hover:to-[#C084FC] transition-all duration-300 shadow-md shadow-[#6366F1]/30 hover:shadow-lg hover:shadow-[#6366F1]/40 border border-white/[0.1] active:scale-[0.98]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#0C0E17] border border-white/[0.09] text-white hover:bg-[#141726] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 top-[65px] bg-[#030407]/95 backdrop-blur-2xl border-t border-white/[0.09] z-40 transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="px-6 py-6 flex flex-col h-[calc(100vh-65px)] justify-between overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#141726] text-white border border-[#6366F1]/40 text-[#38BDF8]"
                      : "text-[#94A3B8] hover:text-white hover:bg-[#0C0E17]"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? "text-[#38BDF8]" : "opacity-40"}`} />
                </a>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-3">
            <a
              href={PORTFOLIO_DATA.personal.contact.resumeUrl}
              download="Shivam_Goyal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#A855F7] shadow-lg shadow-[#6366F1]/30"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
            <p className="text-center font-mono text-xs text-[#94A3B8]/70">
              {PORTFOLIO_DATA.personal.contact.location}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
