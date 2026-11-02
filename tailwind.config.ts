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
        background: "#050507",
        "bg-secondary": "#0B0B10",
        "bg-card": "#111116",
        "bg-elevated": "#171720",
        "text-primary": "#FFFFFF",
        "text-secondary": "#A1A1AA",
        "electric-blue": "#4169FF",
        "vibrant-violet": "#9747FF",
        border: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "accent-gradient": "linear-gradient(135deg, #4169FF 0%, #9747FF 100%)",
        "accent-gradient-hover": "linear-gradient(135deg, #537aff 0%, #a85eff 100%)",
        "card-gradient": "linear-gradient(180deg, rgba(23, 23, 32, 0.6) 0%, rgba(17, 17, 22, 0.8) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 8s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { opacity: "0.4", transform: "scale(0.95)" },
          "100%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

