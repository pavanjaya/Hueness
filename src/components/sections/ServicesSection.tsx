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
      <div
        className="grid"
        style={{ gridTemplateColumns: "1fr 1fr", minHeight: "80vh" }}
      >
        {/* Left — label + statement text */}
        <div
          className="hidden md:flex flex-col justify-between px-8 md:px-14 xl:px-20 py-20 md:py-28"
        >
          <p
            style={{
              color: "rgba(45,46,56,0.35)",
              fontSize: "13px",
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 500,
              lineHeight: 1.6,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Our<br />Capabilities
          </p>

          <p
            style={{
              fontSize: "clamp(32px, 3.8vw, 62px)",
              fontFamily: "var(--font-geist-sans), 'Geist', system-ui, sans-serif",
              fontWeight: 300,
              color: "#2d2e38",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            We build better businesses by creating joyful digital ideas, products and experiences.
          </p>
        </div>

        {/* Right — accordion */}
        <div
          className="px-8 md:px-14 xl:px-20 py-20 md:py-28"
          style={{ borderTop: "1px solid rgba(45,46,56,0.08)" }}
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
