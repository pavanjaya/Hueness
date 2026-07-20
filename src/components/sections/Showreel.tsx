"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function Showreel() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="px-6 xl:px-10 pb-6">
        <div
          className="relative w-full overflow-hidden cursor-pointer group"
          style={{ aspectRatio: "16/7" }}
          onClick={() => setModalOpen(true)}
        >
          {/* Background — replace with actual showreel thumbnail */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02]"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=85')",
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[16px] border-l-white ml-1" />
              </div>
              <span className="text-white/80 text-xs font-semibold uppercase tracking-widest">Watch Showreel</span>
            </div>
          </div>

          {/* Bottom label */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <p className="text-white/60 text-xs font-medium uppercase tracking-widest">Hueness Showreel 1.0</p>
            <p className="text-white/60 text-xs">2025</p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-[500] flex items-center justify-center p-6"
          onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}
        >
          <div className="w-full max-w-4xl relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-12 right-0 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white"
            >
              <X size={16} />
            </button>
            <div className="aspect-video bg-[#111] overflow-hidden flex flex-col items-center justify-center gap-4 text-white/40">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[22px] border-l-white/30" />
              <p className="text-sm">Showreel coming soon</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
