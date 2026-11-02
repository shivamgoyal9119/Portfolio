"use client";

import React, { useState } from "react";
import { Terminal, Trophy, UserCheck, Shield, CheckCircle2, Play } from "lucide-react";

export default function CodeNestVisual() {
  const [panelView, setPanelView] = useState<"admin" | "contestant">("admin");

  return (
    <div className="w-full rounded-2xl bg-[#09090E] border border-white/[0.08] p-5 font-mono text-xs shadow-2xl relative overflow-hidden group">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-[#4169FF]" />

      {/* Header with Role Toggle */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.07] mb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-400">
            <Trophy className="w-4 h-4" />
          </div>
          <div>
            <div className="text-white font-semibold text-xs tracking-tight">CodeNest Contest Hub</div>
            <div className="text-[10px] text-[#A1A1AA]">Java Servlets + JDBC + MySQL</div>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex bg-[#111116] p-0.5 rounded-lg border border-white/[0.06] text-[10px]">
          <button
            onClick={() => setPanelView("admin")}
            className={`px-2 py-0.5 rounded transition-all ${
              panelView === "admin"
                ? "bg-white/[0.1] text-white font-medium"
                : "text-[#A1A1AA] hover:text-white"
            }`}
          >
            Admin Panel
          </button>
          <button
            onClick={() => setPanelView("contestant")}
            className={`px-2 py-0.5 rounded transition-all ${
              panelView === "contestant"
                ? "bg-white/[0.1] text-white font-medium"
                : "text-[#A1A1AA] hover:text-white"
            }`}
          >
            Leaderboard
          </button>
        </div>
      </div>

      {panelView === "admin" ? (
        <div className="space-y-2.5">
          <div className="p-2.5 rounded-xl bg-[#111116] border border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-[#4169FF]" />
              <span className="text-white text-[11px] font-sans font-medium">Sprint Round #12 (Active)</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] font-mono">
              LIVE • 248 Contestants
            </span>
          </div>

          {/* Testcase Runner Simulation */}
          <div className="p-3 rounded-xl bg-black/40 border border-white/[0.05] space-y-1.5 text-[10px]">
            <div className="flex justify-between text-[#A1A1AA]">
              <span>Problem A: Graph Bipartition</span>
              <span className="text-emerald-400 font-semibold">100/100 PTS</span>
            </div>
            <div className="flex items-center gap-2 text-[#A1A1AA]/80">
              <span className="text-[#4169FF]">Submission #9842:</span>
              <span>Java 17 Solution</span>
              <span>•</span>
              <span className="text-emerald-400">PASSED (45ms)</span>
            </div>
            <div className="w-full bg-[#171720] h-1.5 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-full" />
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-1.5">
          {[
            { rank: 1, handle: "codeninja_01", score: "400", time: "01:14:22" },
            { rank: 2, handle: "shivam_g", score: "400", time: "01:18:05" },
            { rank: 3, handle: "algo_master", score: "300", time: "00:54:19" },
          ].map((item) => (
            <div
              key={item.handle}
              className={`flex items-center justify-between p-2 rounded-lg border text-[10px] ${
                item.handle === "shivam_g"
                  ? "bg-[#4169FF]/10 border-[#4169FF]/40 text-white"
                  : "bg-[#111116] border-white/[0.04] text-[#A1A1AA]"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="font-bold text-white w-4">#{item.rank}</span>
                <span className="font-sans font-medium">{item.handle}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-bold">{item.score} pts</span>
                <span className="text-[#A1A1AA]/60">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SQL & JDBC Footer */}
      <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-[#A1A1AA]">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          <span>PreparedStatements • Role RBAC Filter</span>
        </div>
        <span className="font-mono text-[#A1A1AA]/60">JDBC Pool: 10 Conn</span>
      </div>
    </div>
  );
}

