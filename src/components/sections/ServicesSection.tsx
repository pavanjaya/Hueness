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
    <section style={{ background: "#2d2e38" }}>
      <div className="px-8 md:px-14 xl:px-20 py-24 md:py-32">
        <div className="flex gap-16 md:gap-24">

          {/* Left label */}
          <div className="hidden md:block shrink-0 w-40 pt-2">
            <p
              className="text-[rgba(255,254,249,0.35)] text-xs font-semibold uppercase tracking-[0.2em] leading-relaxed"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              Our<br />Capabilities
            </p>
          </div>

          {/* Right list */}
          <div className="flex-1" style={{ borderTop: "1px solid rgba(255,254,249,0.1)" }}>
            {services.map((s, i) => (
              <div key={s.title} style={{ borderBottom: "1px solid rgba(255,254,249,0.1)" }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-8 md:py-10 group text-left"
                >
                  <h3
                    className="text-[#fffef9] tracking-tight leading-none transition-colors group-hover:text-[#fa9173]"
                    style={{
                      fontSize: "clamp(36px, 5vw, 80px)",
                      fontFamily: "var(--font-display), 'Barlow Condensed', Arial, sans-serif",
                      fontWeight: 900,
                    }}
                  >
                    {s.title}
                  </h3>
                  <span
                    className="shrink-0 ml-6 w-10 h-10 rounded-full border border-[rgba(255,254,249,0.2)] flex items-center justify-center text-[rgba(255,254,249,0.5)] group-hover:border-[#fa9173] group-hover:text-[#fa9173] transition-all"
                    style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 300ms ease, color 200ms, border-color 200ms" }}
                  >
                    ↓
                  </span>
                </button>

                {/* Expanded items */}
                {open === i && (
                  <div className="pb-8 flex flex-wrap gap-3">
                    {s.items.map((item) => (
                      <Link
                        key={item}
                        href={s.href}
                        className="text-sm text-[rgba(255,254,249,0.5)] hover:text-[#fffef9] transition-colors px-4 py-2"
                        style={{ border: "1px solid rgba(255,254,249,0.12)", borderRadius: "50px" }}
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
      </div>
    </section>
  );
}
