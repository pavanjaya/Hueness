import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-between px-6 xl:px-10 pt-32 pb-10"
      style={{ background: "#fffef9" }}
    >
      {/* Headline */}
      <div className="flex-1 flex flex-col justify-center py-12">
        <h1
          className="font-display font-black uppercase leading-[0.88] tracking-tight text-[#2d2e38] max-w-[95vw]"
          style={{ fontSize: "clamp(64px, 9.5vw, 148px)", fontFamily: "var(--font-display), 'Barlow Condensed', Arial, sans-serif" }}
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

      {/* Bottom strip */}
      <div
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-8 opacity-0"
        style={{
          borderTop: "1px solid rgba(45,46,56,0.12)",
          animation: "page-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.6s both",
        }}
      >
        <p className="text-sm text-[rgba(45,46,56,0.5)] max-w-xs leading-relaxed" style={{ fontFamily: "var(--font-serif), 'IBM Plex Serif', Georgia, serif", fontStyle: "italic" }}>
          An integrated design & technology studio — brand, engineering, and marketing in one place.
        </p>

        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/work"
            className="text-sm font-medium text-[rgba(45,46,56,0.55)] hover:text-[#2d2e38] transition-colors"
          >
            View work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#fa9173] text-[#fffef9] text-sm font-semibold px-7 py-3.5 hover:opacity-90 transition-opacity"
            style={{ borderRadius: "50px" }}
          >
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
}
