"use client";

import React, { useState } from "react";
import { Film } from "lucide-react";

export default function MyCineVerseVisual() {
  const [selectedSeat, setSelectedSeat] = useState<number | null>(14);

  // 4 rows x 6 columns seat matrix
  const seats = [
    { id: 1, status: "booked" }, { id: 2, status: "booked" }, { id: 3, status: "available" }, { id: 4, status: "available" }, { id: 5, status: "available" }, { id: 6, status: "available" },
    { id: 7, status: "available" }, { id: 8, status: "available" }, { id: 9, status: "booked" }, { id: 10, status: "booked" }, { id: 11, status: "available" }, { id: 12, status: "available" },
    { id: 13, status: "available" }, { id: 14, status: "selected" }, { id: 15, status: "available" }, { id: 16, status: "available" }, { id: 17, status: "booked" }, { id: 18, status: "booked" },
    { id: 19, status: "available" }, { id: 20, status: "available" }, { id: 21, status: "available" }, { id: 22, status: "available" }, { id: 23, status: "available" }, { id: 24, status: "available" },
  ];

  return (
    <div className="w-full rounded-2xl bg-[#070D1B] border border-white/[0.09] p-5 font-mono text-xs shadow-2xl relative overflow-hidden group">
      {/* Top accent line (NO PURPLE) */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D8F6] via-[#0284C7] to-[#2563EB]" />

      {/* Movie & Theater Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.07] mb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-[#00D8F6]/15 text-[#00D8F6] border border-[#00D8F6]/30">
            <Film className="w-4 h-4" />
          </div>
          <div>
            <div className="text-white font-semibold text-xs tracking-tight">CineVerse Booking Engine</div>
            <div className="text-[10px] text-[#94A3B8]">
              <span>IMAX 3D • Screen 2</span>
            </div>
          </div>
        </div>
        <span className="px-2.5 py-0.5 rounded text-[10px] bg-[#0284C7]/15 text-[#38BDF8] border border-[#0284C7]/30 font-sans font-semibold">
          MySQL JPA Schema
        </span>
      </div>

      {/* Screen Curved Line (High-Tech Cyan Glow) */}
      <div className="relative my-3 text-center">
        <div className="w-3/4 mx-auto h-1.5 rounded-full bg-gradient-to-r from-transparent via-[#00D8F6] to-transparent shadow-[0_0_15px_rgba(0,216,246,0.7)]" />
        <span className="text-[9px] uppercase tracking-widest text-[#94A3B8]/60 block mt-1.5 font-medium">
          CURVED AUDITORIUM SCREEN
        </span>
      </div>

      {/* Seat Selection Matrix */}
      <div className="grid grid-cols-6 gap-2 my-4 max-w-[280px] mx-auto">
        {seats.map((seat) => {
          const isSelected = selectedSeat === seat.id;
          let seatStyle = "bg-[#15223C] border-white/[0.09] text-[#94A3B8] hover:border-[#00D8F6]";

          if (seat.status === "booked") {
            seatStyle = "bg-white/[0.03] border-transparent text-[#94A3B8]/25 cursor-not-allowed";
          } else if (isSelected) {
            seatStyle = "bg-gradient-to-br from-[#00D8F6] to-[#0284C7] border-[#00D8F6] text-white shadow-md shadow-[#00D8F6]/40 font-bold";
          }

          return (
            <button
              key={seat.id}
              disabled={seat.status === "booked"}
              onClick={() => setSelectedSeat(seat.id)}
              className={`h-7 rounded-md border flex items-center justify-center text-[10px] transition-all ${seatStyle}`}
              title={`Seat #${seat.id} (${seat.status})`}
            >
              {seat.id}
            </button>
          );
        })}
      </div>

      {/* Legend & Summary */}
      <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-sans text-[#94A3B8]">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-sm bg-[#15223C] border border-white/[0.2]" /> Available
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-sm bg-[#00D8F6]" /> Selected
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-sm bg-white/[0.05]" /> Booked
          </span>
        </div>
        <div className="font-mono text-white font-semibold">
          Seat C{selectedSeat || 14} • ₹280
        </div>
      </div>
    </div>
  );
}
