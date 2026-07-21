"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  {
    title: "Strategy",
    href: "/design",
    items: ["Business Strategy", "Brand Strategy", "Product Strategy", "Research & Discovery", "Innovation Consulting"],
  },
  {
    title: "Design",
    href: "/design",
    items: ["Brand Identity", "UX / UI Design", "Web Design", "Packaging Design", "Design Systems"],
  },
  {
    title: "Technology",
    href: "/tech",
    items: ["Product Engineering", "SaaS Development", "Web & Mobile Development", "AI Solutions", "API & Integrations"],
  },
  {
    title: "Marketing",
    href: "/marketing",
    items: ["Brand Marketing", "Growth Marketing", "Performance Marketing", "Content Marketing", "SEO & Analytics"],
  },
];

export default function ServicesSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background: "#111110" }}>
      <div
        className="px-8 md:px-14 xl:px-20 py-20 md:py-28"
        style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "0 80px" }}
      >
        {/* Left label */}
        <div className="hidden md:block pt-1">
          <p
            style={{
              color: "rgba(255,254,249,0.3)",
              fontSize: "13px",
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 500,
              lineHeight: 1.5,
              letterSpacing: "0.01em",
            }}
          >
            Our<br />Capabilities
          </p>
        </div>

        {/* Right accordion list */}
        <div style={{ borderTop: "1px solid rgba(255,254,249,0.08)" }}>
          {services.map((s, i) => (
            <div key={s.title} style={{ borderBottom: "1px solid rgba(255,254,249,0.08)" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between text-left group"
                style={{ padding: "36px 0" }}
              >
                <h3
                  style={{
                    fontSize: "clamp(40px, 5.5vw, 88px)",
                    fontFamily: "var(--font-geist-sans), 'Geist', system-ui, sans-serif",
                    fontWeight: 700,
                    color: "#fffef9",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    transition: "color 200ms ease",
                  }}
                  className="group-hover:text-[rgba(255,254,249,0.6)]"
                >
                  {s.title}
                </h3>
                <span
                  style={{
                    flexShrink: 0,
                    marginLeft: "24px",
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    border: "1px solid rgba(255,254,249,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,254,249,0.5)",
                    fontSize: "18px",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 350ms cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  ↓
                </span>
              </button>

              {/* Expanded sub-items */}
              {open === i && (
                <div style={{ paddingBottom: "32px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {s.items.map((item) => (
                    <Link
                      key={item}
                      href={s.href}
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,254,249,0.45)",
                        border: "1px solid rgba(255,254,249,0.12)",
                        borderRadius: "50px",
                        padding: "8px 16px",
                        fontFamily: "var(--font-geist-sans)",
                        transition: "color 200ms, border-color 200ms",
                      }}
                      className="hover:text-[#fffef9] hover:border-[rgba(255,254,249,0.35)]"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
