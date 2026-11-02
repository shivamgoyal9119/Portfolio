"use client";

import React, { useState } from "react";
import { Folder, HardDrive, ShieldCheck, UploadCloud, FileCode2, Server, CheckCircle2 } from "lucide-react";

export default function AirXDriveVisual() {
  const [activeFile, setActiveFile] = useState<string>("system-design.pdf");

  return (
    <div className="w-full rounded-2xl bg-[#09090E] border border-white/[0.08] p-5 font-mono text-xs shadow-2xl relative overflow-hidden group">
      {/* Subtle top gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4169FF] via-[#9747FF] to-[#4169FF]" />

      {/* Cloud Drive Title & Cluster Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.07] mb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#4169FF]/10 text-[#4169FF]">
            <HardDrive className="w-4 h-4" />
          </div>
          <div>
            <div className="text-white font-semibold text-xs tracking-tight">AirX Cloud Storage Cluster</div>
            <div className="text-[10px] text-[#A1A1AA]">Eureka Node ID: storage-node-01</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-sans font-medium">
            <CheckCircle2 className="w-3 h-3" />
            Eureka Synced
          </span>
        </div>
      </div>

      {/* Storage Capacity Bar */}
      <div className="p-3 rounded-xl bg-[#111116] border border-white/[0.06] mb-4">
        <div className="flex justify-between items-center text-[10px] text-[#A1A1AA] mb-2 font-sans">
          <span>Cloud Storage Quota (H2 + Object Chunk Store)</span>
          <span className="text-white font-mono font-medium">42.8 GB / 100 GB</span>
        </div>
        <div className="w-full h-2 bg-[#171720] rounded-full overflow-hidden flex">
          <div className="h-full bg-[#4169FF]" style={{ width: "28%" }} />
          <div className="h-full bg-[#9747FF]" style={{ width: "14%" }} />
          <div className="h-full bg-cyan-400" style={{ width: "8%" }} />
        </div>
      </div>

      {/* File System Preview Table */}
      <div className="space-y-1.5 mb-4">
        <div className="text-[10px] text-[#A1A1AA]/60 uppercase tracking-wider px-2 py-1 font-sans">
          Distributed File Objects
        </div>

        {[
          { name: "system-design-v2.pdf", size: "4.8 MB", date: "Just now", type: "pdf", status: "Replicated" },
          { name: "spring-cloud-eureka.yaml", size: "12 KB", date: "2 hrs ago", type: "code", status: "Active" },
          { name: "database-schema-dump.sql", size: "18.2 MB", date: "Yesterday", type: "db", status: "Replicated" },
        ].map((file) => (
          <div
            key={file.name}
            onClick={() => setActiveFile(file.name)}
            className={`flex items-center justify-between p-2.5 rounded-lg border transition-all cursor-pointer ${
              activeFile === file.name
                ? "bg-[#171720] border-[#4169FF]/50 text-white"
                : "bg-black/30 border-white/[0.04] text-[#A1A1AA] hover:bg-[#111116] hover:text-white"
            }`}
          >
            <div className="flex items-center gap-2.5 truncate">
              <Folder className="w-3.5 h-3.5 text-[#4169FF] shrink-0" />
              <span className="truncate text-[11px]">{file.name}</span>
            </div>
            <div className="flex items-center gap-3 shrink-0 text-[10px] font-sans">
              <span className="text-[#A1A1AA]/70">{file.size}</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px]">
                {file.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Architectural Resilience Pill */}
      <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#4169FF]/10 to-[#9747FF]/10 border border-[#4169FF]/20 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-2 text-white/90">
          <ShieldCheck className="w-3.5 h-3.5 text-[#4169FF]" />
          <span>Resilience4j Circuit Breaker &amp; Gateway Filter</span>
        </div>
        <span className="text-emerald-400 font-semibold text-[10px]">100% UP</span>
      </div>
    </div>
  );
}

