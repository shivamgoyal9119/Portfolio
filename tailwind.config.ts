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
        // High-tech Deep Midnight Obsidian
        background: "#03060E",
        "bg-secondary": "#070C18",
        "bg-card": "#0B1120",
        "bg-card-hover": "#10192D",
        "bg-elevated": "#15223C",

        // Crisp typography
        "text-primary": "#F8FAFC",
        "text-secondary": "#94A3B8",
        "text-muted": "#64748B",

        // Vibrant Tech Blue & Cyan (NO PURPLE)
        "electric-blue": "#0284C7",   // Rich Sky/Cobalt Blue
        "royal-blue": "#2563EB",      // Deep High-Tech Royal Blue
        "neon-cyan": "#00D8F6",       // Luminous Vivid Cyan
        "hyper-teal": "#06B6D4",      // Deep Cyan / Teal
        "emerald-glow": "#10B981",    // Crisp Emerald
        "amber-gold": "#F59E0B",      // Amber for medals

        border: "rgba(255, 255, 255, 0.08)",
        "border-glow": "rgba(2, 132, 199, 0.35)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "accent-gradient": "linear-gradient(135deg, #00D8F6 0%, #2563EB 50%, #1D4ED8 100%)",
        "accent-gradient-hover": "linear-gradient(135deg, #38BDF8 0%, #3B82F6 50%, #2563EB 100%)",
        "cyan-blue-gradient": "linear-gradient(135deg, #00D8F6 0%, #0284C7 50%, #1D4ED8 100%)",
        "card-gradient": "linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(11, 17, 32, 0.85) 100%)",
      },
      boxShadow: {
        "glow-blue": "0 0 35px -5px rgba(37, 99, 235, 0.3)",
        "glow-cyan": "0 0 35px -5px rgba(0, 216, 246, 0.3)",
        "card-subtle": "0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(255, 255, 255, 0.06)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 8s ease-in-out infinite alternate",
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
      },
    },
  },
  plugins: [],
};
export default config;
