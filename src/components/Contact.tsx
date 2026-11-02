"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import SectionHeading from "./SectionHeading";
import {
  Copy,
  Check,
  MapPin,
  Phone,
  Send,
  Code,
  Terminal,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeChefIcon } from "./SocialIcons";

export default function Contact() {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.contact.email}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "GitHub":
        return <GithubIcon className="w-4 h-4" />;
      case "LinkedIn":
        return <LinkedinIcon className="w-4 h-4" />;
      case "LeetCode":
        return <LeetCodeIcon className="w-4 h-4 text-[#FFA116]" />;
      case "CodeChef":
        return <CodeChefIcon className="w-4 h-4 text-[#C084FC]" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#030407]">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[550px] bg-gradient-to-t from-[#6366F1]/15 via-[#A855F7]/10 to-transparent blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct info, copy email, socials (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A0C14] border border-white/[0.09] text-xs font-mono text-[#38BDF8] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[0_0_6px_#38BDF8]" />
                GET IN TOUCH
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Let&apos;s Build Something <span className="text-gradient-accent">Great Together.</span>
              </h2>
              <p className="text-[#94A3B8] text-base mt-4 max-w-lg leading-relaxed">
                I&apos;m always interested in connecting with developers, exploring interesting opportunities and discussing challenging engineering problems.
              </p>
            </div>

            {/* Email Contact Card with Copy Feature */}
            <div className="p-6 rounded-3xl bg-[#0A0C14] border border-white/[0.09] hover:border-[#6366F1]/50 transition-all duration-300 shadow-2xl space-y-4">
              <div className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider">
                Direct Correspondence
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="font-heading font-bold text-lg sm:text-xl text-white select-all">
                  {personal.contact.email}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-[#141726] hover:bg-[#1E233A] border border-white/[0.09] transition-all active:scale-95 shadow-sm"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#38BDF8]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${personal.contact.email}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#A855F7] hover:from-[#6366F1] hover:to-[#C084FC] shadow-md shadow-[#6366F1]/30 transition-all border border-white/[0.1]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Mail</span>
                  </a>
                </div>
              </div>

              {/* Location & Phone info */}
              <div className="pt-4 border-t border-white/[0.07] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#94A3B8] font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#A855F7]" />
                  <span>{personal.contact.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{personal.contact.phone}</span>
                </div>
              </div>
            </div>

            {/* Social Network Tiles */}
            <div>
              <div className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-3">
                Coding Platforms &amp; Profiles
              </div>
              <div className="grid grid-cols-2 gap-3">
                {personal.socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-[#0A0C14] border border-white/[0.09] hover:border-[#6366F1]/50 hover:bg-[#0E111D] transition-all duration-200 flex items-center justify-between group shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-xl bg-[#141726] text-[#94A3B8] group-hover:text-white transition-colors">
                        {getSocialIcon(link.platform)}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">
                          {link.platform}
                        </div>
                        <div className="text-[10px] text-[#94A3B8] font-mono truncate max-w-[100px]">
                          {link.handle}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#94A3B8]/50 group-hover:text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-[#0A0C14] border border-white/[0.09] shadow-2xl relative">
              <h3 className="font-heading font-bold text-xl text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-[#94A3B8] mb-6">
                Have an internship, project, or role in mind? Drop a message below.
              </p>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Email client opened! Thank you for reaching out.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#94A3B8]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0E111D] border border-white/[0.08] text-sm text-white placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]/50 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#94A3B8]">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0E111D] border border-white/[0.08] text-sm text-white placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#94A3B8]">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Backend Internship / SDE Role Discussion"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0E111D] border border-white/[0.08] text-sm text-white placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]/50 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#94A3B8]">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your team, system requirements, or project ideas..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0E111D] border border-white/[0.08] text-sm text-white placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]/50 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#A855F7] hover:from-[#6366F1] hover:via-[#8B5CF6] hover:to-[#C084FC] shadow-lg shadow-[#6366F1]/30 hover:shadow-xl hover:shadow-[#6366F1]/40 transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.99] border border-white/[0.1]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
