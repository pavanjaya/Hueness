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
  const [hovered, setHovered] = useState<number | null>(null);

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

            {/* Coral dot — large */}
            <span style={{ position: "absolute", top: "12%", left: "62%", width: 22, height: 22, borderRadius: "50%", background: "#fa9173", opacity: 0.7, animation: "dot-float 5.5s ease-in-out 0s infinite" }}/>

            {/* Purple dot */}
            <span style={{ position: "absolute", top: "35%", left: "80%", width: 14, height: 14, borderRadius: "50%", background: "#7b6cf6", opacity: 0.6, animation: "dot-float 7s ease-in-out 0.8s infinite" }}/>

            {/* Yellow dot */}
            <span style={{ position: "absolute", top: "55%", left: "68%", width: 10, height: 10, borderRadius: "50%", background: "#f5c842", opacity: 0.7, animation: "dot-float 6s ease-in-out 1.4s infinite" }}/>

            {/* Coral dot — small */}
            <span style={{ position: "absolute", top: "70%", left: "85%", width: 18, height: 18, borderRadius: "50%", background: "#fa9173", opacity: 0.5, animation: "dot-float 8s ease-in-out 0.4s infinite" }}/>

            {/* Blue dot */}
            <span style={{ position: "absolute", top: "22%", left: "88%", width: 12, height: 12, borderRadius: "50%", background: "#4db8ff", opacity: 0.55, animation: "dot-float 6.5s ease-in-out 2s infinite" }}/>

            {/* Green dot */}
            <span style={{ position: "absolute", top: "82%", left: "72%", width: 8, height: 8, borderRadius: "50%", background: "#5ecb8d", opacity: 0.65, animation: "dot-float 9s ease-in-out 1s infinite" }}/>

          </div>

          <style>{`
            @keyframes dot-float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-14px); }
            }
          `}</style>
        </div>

        {/* Right — accordion */}
        <div
          className="px-8 md:px-14 xl:px-20 pb-28"
          style={{ paddingTop: "0" }}
        >
          {services.map((s, i) => (
            <div
              key={s.title}
              style={{
                borderBottom: "1px solid rgba(45,46,56,0.08)",
                background: hovered === i && open !== i ? "rgba(45,46,56,0.025)" : "transparent",
                transition: "background 200ms ease",
                marginLeft: "-20px",
                marginRight: "-20px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="w-full flex items-center justify-between text-left"
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
                    border: `1px solid ${open === i ? "rgba(45,46,56,0.4)" : hovered === i ? "#fa9173" : "rgba(45,46,56,0.15)"}`,
                    background: open === i ? "#2d2e38" : hovered === i ? "#fa9173" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: open === i || hovered === i ? "#fffef9" : "rgba(45,46,56,0.35)",
                    fontSize: "16px",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 350ms cubic-bezier(0.22,1,0.36,1), border-color 200ms, color 200ms, background 200ms",
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
