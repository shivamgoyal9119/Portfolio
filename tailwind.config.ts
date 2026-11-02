import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep obsidian canvas & rich slate/indigo-tinted dark surfaces
        background: "#030407",
        "bg-secondary": "#07090E",
        "bg-card": "#0C0E17",
        "bg-card-hover": "#111422",
        "bg-elevated": "#161A2B",
        
        // High-contrast refined typography
        "text-primary": "#F8FAFC",
        "text-secondary": "#94A3B8",
        "text-muted": "#64748B",

        // Vibrant Modern Electric Accents
        "electric-blue": "#38BDF8",     // Radiant Sky/Electric Blue
        "cyber-indigo": "#6366F1",     // Vivid Indigo
        "vibrant-violet": "#A855F7",   // Glowing Ultraviolet / Purple
        "neon-cyan": "#06B6D4",        // Hyper Cyan
        "emerald-glow": "#10B981",     // Status green
        "amber-gold": "#F59E0B",       // Trophy & achievement gold

        // Hairline borders
        border: "rgba(255, 255, 255, 0.08)",
        "border-glow": "rgba(99, 102, 241, 0.35)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "accent-gradient": "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #A855F7 100%)",
        "accent-gradient-hover": "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #C084FC 100%)",
        "cyan-indigo-gradient": "linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)",
        "card-gradient": "linear-gradient(180deg, rgba(16, 20, 35, 0.7) 0%, rgba(10, 12, 20, 0.85) 100%)",
        "glow-conic": "conic-gradient(from 180deg at 50% 50%, #38BDF8 0deg, #6366F1 120deg, #A855F7 240deg, #38BDF8 360deg)",
      },
      boxShadow: {
        "glow-indigo": "0 0 35px -5px rgba(99, 102, 241, 0.3)",
        "glow-violet": "0 0 35px -5px rgba(168, 85, 247, 0.3)",
        "glow-cyan": "0 0 35px -5px rgba(6, 182, 212, 0.3)",
        "card-subtle": "0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(255, 255, 255, 0.05)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 8s ease-in-out infinite alternate",
        "gradient-x": "gradientX 12s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glow: {
          "0%": { opacity: "0.35", transform: "scale(0.96)" },
          "100%": { opacity: "0.75", transform: "scale(1.04)" },
        },
        gradientX: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
