"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge: string;
  title: string;
  description: string;
  badgeColor?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
  badgeColor = "#4169FF",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-14"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111116] border border-white/[0.08] text-xs font-mono mb-3" style={{ color: badgeColor }}>
        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: badgeColor }} />
        {badge}
      </div>
      <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
        {title}
      </h2>
      <p className="text-[#A1A1AA] text-sm sm:text-base mt-2 max-w-2xl font-normal">
        {description}
      </p>
    </motion.div>
  );
}
