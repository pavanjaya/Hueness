import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="flex flex-col px-8 md:px-14 xl:px-20 pt-48 pb-10"
      style={{ background: "#fffef9" }}
    >
      {/* Headline — smaller, tight above the video */}
      <div className="mb-5">
        <h1
          className="font-black uppercase leading-[0.88] tracking-tight text-[#2d2e38]"
          style={{ fontSize: "clamp(40px, 5.5vw, 88px)", fontFamily: "var(--font-geist-sans), 'Geist', system-ui, sans-serif" }}
        >
          {["From strategy", "to scale, we help", "businesses build", "exceptional", "brands & products."].map((line, i) => (
            <span key={i} className="reveal-line-outer">
              <span className="hero-line" style={{ "--delay": `${0.04 + i * 0.1}s` } as React.CSSProperties}>
                {line}
              </span>
            </span>
          ))}
        </h1>
      </div>

      {/* Showreel video */}
      <div
        className="w-full relative overflow-hidden opacity-0"
        style={{
          aspectRatio: "16/9",
          borderRadius: "0px",
          animation: "page-in 0.9s cubic-bezier(0.16,1,0.3,1) 0.55s both",
        }}
      >
        <video
          className="w-full h-full object-cover"
          src="/showreel.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Label */}
        <div className="absolute bottom-5 left-6 flex items-center gap-3">
          <span className="text-[rgba(255,254,249,0.35)] text-xs font-semibold uppercase tracking-[0.2em]">Showreel 2024</span>
        </div>
      </div>

    </section>
  );
}
