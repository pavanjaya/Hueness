"use client";

import React, { useEffect, useRef } from "react";

const lines = [
  "From strategy",
  "to scale, we help",
  "businesses build",
  "exceptional",
  "brands & products.",
];

export default function Hero() {
  const videoRef = useRef<HTMLDivElement>(null);

  // Mouse parallax on video
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) * 0.03;
      const y = (e.clientY - window.innerHeight / 2) * 0.03;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      className="flex flex-col px-8 md:px-14 xl:px-20 pb-10"
      style={{ background: "#fffef9", paddingTop: "calc(88px + 5rem)" }}
    >
      {/* Headline */}
      <div className="mb-12">
        <h1
          className="font-black uppercase leading-[0.88] tracking-tight text-[#2d2e38]"
          style={{
            fontSize: "clamp(40px, 5.5vw, 88px)",
            fontFamily: "var(--font-geist-sans), 'Geist', system-ui, sans-serif",
          }}
        >
          {lines.map((line, i) => (
            <span key={i} className="reveal-line-outer">
              <span
                className="hero-line"
                style={{ "--delay": `${0.45 + i * 0.1}s` } as React.CSSProperties}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>
      </div>

      {/* Showreel video — floats + parallax */}
      <div
        ref={videoRef}
        data-float
        className="w-full relative overflow-hidden"
        style={{
          aspectRatio: "16/9",
          borderRadius: 0,
          opacity: 0,
          animation: "page-in 0.9s cubic-bezier(0.16,1,0.3,1) 0.9s both",
          willChange: "transform",
          transition: "transform 0.15s ease-out",
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
        <div className="absolute bottom-5 left-6">
          <span className="text-[rgba(255,254,249,0.35)] text-xs font-semibold uppercase tracking-[0.2em]">
            Showreel 2024
          </span>
        </div>
      </div>
    </section>
  );
}
