"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  {
    title: "Branding",
    href: "/design",
    desc: "Brand identity, visual systems, packaging and guidelines — everything that makes your brand recognisable, consistent and memorable.",
  },
  {
    title: "Digital Experience",
    href: "/design",
    desc: "UX/UI design, web design and digital product design — crafting experiences that feel intuitive and look exceptional.",
  },
  {
    title: "Technology",
    href: "/tech",
    desc: "Scalable web and mobile products, SaaS platforms and AI-powered solutions built for performance and growth.",
  },
  {
    title: "Products",
    href: "/tech",
    desc: "We partner with founders and businesses to design, engineer and launch digital products from zero to one.",
  },
  {
    title: "Marketing",
    href: "/marketing",
    desc: "Data-led campaigns, performance marketing, content strategy and SEO that attract, engage and convert.",
  },
];

export default function ServicesSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background: "#fffef9" }}>
      {/* Section header — aligned with other sections */}
      <div className="flex items-center justify-between px-8 md:px-14 xl:px-20 pt-28 pb-10">
        <h2
          className="font-black uppercase text-[#2d2e38]"
          style={{ fontSize: "clamp(13px, 1.2vw, 15.6px)", letterSpacing: "0.2em", fontFamily: "var(--font-geist-sans)" }}
        >
          Our Capabilities
        </h2>
      </div>

      <div
        className="grid"
        style={{ gridTemplateColumns: "1fr 1fr", minHeight: "70vh" }}
      >
        {/* Left — statement text + animated elements */}
        <div
          className="hidden md:flex flex-col justify-center px-8 md:px-14 xl:px-20 pb-28 relative overflow-hidden"
        >
          <p
            style={{
              fontSize: "clamp(32px, 3.8vw, 62px)",
              fontFamily: "var(--font-geist-sans), 'Geist', system-ui, sans-serif",
              fontWeight: 300,
              color: "#2d2e38",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              position: "relative",
              zIndex: 1,
            }}
          >
            We build better businesses by creating joyful digital ideas, products and experiences.
          </p>

          {/* Animated geometric shapes */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>

            {/* Circle outline — large */}
            <svg style={{ position: "absolute", top: "8%", left: "58%", animation: "geo-float 7s ease-in-out 0s infinite" }} width="72" height="72" viewBox="0 0 72 72" fill="none">
              <circle cx="36" cy="36" r="34" stroke="rgba(45,46,56,0.12)" strokeWidth="1.5"/>
            </svg>

            {/* Circle filled — small coral */}
            <svg style={{ position: "absolute", top: "22%", left: "80%", animation: "geo-float 5.5s ease-in-out 1s infinite" }} width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="7" fill="#fa9173" opacity="0.5"/>
            </svg>

            {/* Square outline — rotated */}
            <svg style={{ position: "absolute", top: "40%", left: "65%", animation: "geo-spin 12s linear 0s infinite" }} width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect x="2" y="2" width="36" height="36" stroke="rgba(45,46,56,0.1)" strokeWidth="1.5"/>
            </svg>

            {/* Plus / cross */}
            <svg style={{ position: "absolute", top: "58%", left: "78%", animation: "geo-float 8s ease-in-out 0.5s infinite" }} width="24" height="24" viewBox="0 0 24 24" fill="none">
              <line x1="12" y1="0" x2="12" y2="24" stroke="rgba(45,46,56,0.18)" strokeWidth="1.5"/>
              <line x1="0" y1="12" x2="24" y2="12" stroke="rgba(45,46,56,0.18)" strokeWidth="1.5"/>
            </svg>

            {/* Triangle outline */}
            <svg style={{ position: "absolute", top: "72%", left: "60%", animation: "geo-float 6.5s ease-in-out 1.8s infinite" }} width="48" height="42" viewBox="0 0 48 42" fill="none">
              <path d="M24 2L46 40H2L24 2Z" stroke="rgba(45,46,56,0.1)" strokeWidth="1.5"/>
            </svg>

            {/* Dot grid — 3×3 */}
            <svg style={{ position: "absolute", top: "30%", left: "85%", animation: "geo-float 9s ease-in-out 2s infinite" }} width="40" height="40" viewBox="0 0 40 40" fill="none">
              {[0,1,2].map(row => [0,1,2].map(col => (
                <circle key={`${row}-${col}`} cx={6 + col * 14} cy={6 + row * 14} r="2" fill="rgba(45,46,56,0.15)"/>
              )))}
            </svg>

            {/* Arc / half-circle */}
            <svg style={{ position: "absolute", top: "85%", left: "72%", animation: "geo-float 7.5s ease-in-out 0.8s infinite" }} width="52" height="28" viewBox="0 0 52 28" fill="none">
              <path d="M2 26 A24 24 0 0 1 50 26" stroke="#fa9173" strokeWidth="1.5" opacity="0.35"/>
            </svg>

          </div>

          <style>{`
            @keyframes geo-float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-12px) rotate(3deg); }
            }
            @keyframes geo-spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>

        {/* Right — accordion */}
        <div
          className="px-8 md:px-14 xl:px-20 pb-28"
          style={{ paddingTop: "0" }}
        >
          {services.map((s, i) => (
            <div key={s.title} style={{ borderBottom: "1px solid rgba(45,46,56,0.08)" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between text-left group"
                style={{ padding: "28px 0" }}
              >
                <h3
                  style={{
                    fontSize: "clamp(22px, 2.4vw, 41px)",
                    fontFamily: "var(--font-geist-sans), 'Geist', system-ui, sans-serif",
                    fontWeight: 700,
                    color: open === i ? "#2d2e38" : "rgba(45,46,56,0.85)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                    transition: "color 200ms ease",
                  }}
                  className="group-hover:text-[#2d2e38]"
                >
                  {s.title}
                </h3>
                <span
                  style={{
                    flexShrink: 0,
                    marginLeft: "20px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: `1px solid ${open === i ? "rgba(45,46,56,0.4)" : "rgba(45,46,56,0.15)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: open === i ? "#2d2e38" : "rgba(45,46,56,0.35)",
                    fontSize: "16px",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 350ms cubic-bezier(0.22,1,0.36,1), border-color 200ms, color 200ms",
                  }}
                >
                  ↓
                </span>
              </button>

              {open === i && (
                <div style={{ paddingBottom: "28px" }}>
                  <p
                    style={{
                      color: "rgba(45,46,56,0.5)",
                      fontSize: "clamp(14px, 1.1vw, 16px)",
                      fontFamily: "var(--font-geist-sans)",
                      lineHeight: 1.7,
                      maxWidth: "440px",
                      marginBottom: "20px",
                    }}
                  >
                    {s.desc}
                  </p>
                  <Link
                    href={s.href}
                    style={{
                      fontSize: "12px",
                      fontFamily: "var(--font-geist-sans)",
                      fontWeight: 600,
                      color: "#fa9173",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Learn more →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
