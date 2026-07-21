"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  {
    title: "Strategy",
    href: "/design",
    desc: "Brand positioning, naming, narrative and the strategic foundation that makes your business distinct and ready to compete.",
  },
  {
    title: "Design",
    href: "/design",
    desc: "Brand identity, UX/UI, packaging and design systems — every detail crafted to move people and drive business.",
  },
  {
    title: "Technology",
    href: "/tech",
    desc: "Scalable web and mobile products, SaaS platforms and AI-powered solutions built for performance and growth.",
  },
  {
    title: "Marketing",
    href: "/marketing",
    desc: "Data-led campaigns, performance marketing, content strategy and SEO that attract, engage and convert.",
  },
  {
    title: "In House Product",
    href: "/products",
    desc: "We build and launch our own digital products at the intersection of design intuition and emerging technology.",
  },
];

export default function ServicesSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background: "#111110" }}>
      <div
        className="grid"
        style={{
          gridTemplateColumns: "1fr 1fr",
          minHeight: "80vh",
        }}
      >
        {/* Left — label + illustration */}
        <div
          className="relative hidden md:flex flex-col justify-between px-8 md:px-14 xl:px-20 py-20 md:py-28"
          style={{ borderRight: "1px solid rgba(255,254,249,0.08)" }}
        >
          <p
            style={{
              color: "rgba(255,254,249,0.3)",
              fontSize: "13px",
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 500,
              lineHeight: 1.6,
            }}
          >
            Our<br />Capabilities
          </p>

          {/* Concentric circles illustration */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ padding: "80px" }}>
            <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: "420px", opacity: 0.25 }}>
              <circle cx="240" cy="240" r="230" stroke="white" strokeWidth="0.75"/>
              <circle cx="240" cy="240" r="185" stroke="white" strokeWidth="0.75"/>
              <circle cx="240" cy="240" r="140" stroke="white" strokeWidth="0.75"/>
              <circle cx="240" cy="240" r="95"  stroke="white" strokeWidth="0.75"/>
              <circle cx="240" cy="240" r="50"  stroke="white" strokeWidth="0.75"/>
              {/* Offset circles */}
              <circle cx="310" cy="240" r="185" stroke="white" strokeWidth="0.5" opacity="0.5"/>
              <circle cx="310" cy="240" r="140" stroke="white" strokeWidth="0.5" opacity="0.5"/>
              <circle cx="310" cy="240" r="95"  stroke="white" strokeWidth="0.5" opacity="0.5"/>
              <circle cx="170" cy="240" r="185" stroke="white" strokeWidth="0.5" opacity="0.3"/>
              <circle cx="170" cy="240" r="140" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            </svg>
          </div>
        </div>

        {/* Right — accordion */}
        <div
          className="px-8 md:px-14 xl:px-20 py-20 md:py-28"
          style={{ borderTop: "1px solid rgba(255,254,249,0.08)" }}
        >
          {services.map((s, i) => (
            <div key={s.title} style={{ borderBottom: "1px solid rgba(255,254,249,0.08)" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between text-left group"
                style={{ padding: "28px 0" }}
              >
                <h3
                  style={{
                    fontSize: "clamp(19px, 2.4vw, 41px)",
                    fontFamily: "var(--font-geist-sans), 'Geist', system-ui, sans-serif",
                    fontWeight: 700,
                    color: open === i ? "#fffef9" : "rgba(255,254,249,0.85)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                    transition: "color 200ms ease",
                  }}
                  className="group-hover:text-[#fffef9]"
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
                    border: `1px solid ${open === i ? "rgba(255,254,249,0.5)" : "rgba(255,254,249,0.15)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: open === i ? "#fffef9" : "rgba(255,254,249,0.4)",
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
                      color: "rgba(255,254,249,0.5)",
                      fontSize: "clamp(14px, 1.1vw, 17px)",
                      fontFamily: "var(--font-geist-sans)",
                      lineHeight: 1.65,
                      maxWidth: "480px",
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
