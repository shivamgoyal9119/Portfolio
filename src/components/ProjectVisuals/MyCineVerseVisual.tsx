"use client";

import React, { useState } from "react";
import { Film, Ticket, Clock, Check, Calendar, Star } from "lucide-react";

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
    <div className="w-full rounded-2xl bg-[#09090E] border border-white/[0.08] p-5 font-mono text-xs shadow-2xl relative overflow-hidden group">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9747FF] to-[#4169FF]" />

      {/* Movie & Theater Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.07] mb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-[#9747FF]/15 text-[#9747FF]">
            <Film className="w-4 h-4" />
          </div>
          <div>
            <div className="text-white font-semibold text-xs tracking-tight">CineVerse Booking Engine</div>
            <div className="text-[10px] text-[#A1A1AA] flex items-center gap-1">
              <span>IMAX 3D • Screen 2</span>
            </div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] bg-[#9747FF]/10 text-[#9747FF] border border-[#9747FF]/20 font-sans font-medium">
          MySQL JPA Schema
        </span>
      </div>

      {/* Screen Curved Line */}
      <div className="relative my-3 text-center">
        <div className="w-3/4 mx-auto h-1.5 rounded-full bg-gradient-to-r from-transparent via-[#9747FF]/60 to-transparent shadow-[0_0_12px_rgba(151,71,255,0.6)]" />
        <span className="text-[9px] uppercase tracking-widest text-[#A1A1AA]/50 block mt-1">
          CURVED AUDITORIUM SCREEN
        </span>
      </div>

      {/* Seat Selection Matrix */}
      <div className="grid grid-cols-6 gap-2 my-4 max-w-[280px] mx-auto">
        {seats.map((seat) => {
          const isSelected = selectedSeat === seat.id;
          let seatStyle = "bg-[#171720] border-white/[0.08] text-[#A1A1AA] hover:border-[#9747FF]";

          if (seat.status === "booked") {
            seatStyle = "bg-white/[0.04] border-transparent text-[#A1A1AA]/30 cursor-not-allowed";
          } else if (isSelected) {
            seatStyle = "bg-[#9747FF] border-[#9747FF] text-white shadow-md shadow-[#9747FF]/30 font-bold";
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
      <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-sans text-[#A1A1AA]">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-sm bg-[#171720] border border-white/[0.2]" /> Available
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-sm bg-[#9747FF]" /> Selected
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

