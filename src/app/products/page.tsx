import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Products",
  description: "In-house digital products built at the intersection of design intuition and emerging technology.",
};

const products = [
  {
    name: "JustLog",
    tagline: "Simple, powerful logging for developers",
    description: "A clean, no-frills logging tool built for developers who value clarity. JustLog captures what matters and surfaces it fast.",
    status: "Live",
    slug: "justlog",
    bg: "#323462",
    tags: ["Developer Tool", "Productivity"],
  },
  {
    name: "Paintora",
    tagline: "AI-powered creative canvas for everyone",
    description: "A creative canvas where AI meets artistic expression. Paintora lets anyone create stunning visuals with the power of generative AI.",
    status: "Beta",
    slug: "paintora",
    bg: "#2d2e38",
    tags: ["AI", "Creative", "Design Tool"],
  },
  {
    name: "Howztrip",
    tagline: "Smart travel planning, beautifully designed",
    description: "Travel planning reimagined — AI-powered itineraries, curated recommendations, and a beautiful interface that makes planning as fun as the trip.",
    status: "Coming Soon",
    slug: "howztrip",
    bg: "#9ee2d2",
    dark: false,
    tags: ["Travel", "AI", "Lifestyle"],
  },
  {
    name: "Groomré",
    tagline: "AI facial hair recommendations for modern men",
    description: "An AI-powered platform offering personalized facial hair style recommendations. Built using design thinking and computer vision to empower modern grooming.",
    status: "Live",
    slug: "groomre",
    bg: "#fa9173",
    dark: false,
    tags: ["AI", "Lifestyle", "Grooming"],
  },
];

export default function ProductsPage() {
  return (
    <div style={{ paddingTop: "88px" }}>
      <div className="px-8 md:px-14 xl:px-20 py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#fa9173] mb-6">In The Lab</p>
        <h1
          className="font-black uppercase text-[#2d2e38] tracking-tight leading-[0.88] max-w-4xl mb-8"
          style={{ fontSize: "clamp(56px,8vw,120px)", fontFamily: "var(--font-display),'Barlow Condensed',Arial,sans-serif" }}
        >
          Products we&apos;re building for the world.
        </h1>
        <p className="text-[rgba(45,46,56,0.55)] text-lg max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-serif),'IBM Plex Serif',Georgia,serif", fontStyle: "italic" }}>
          At Hueness, we don&apos;t just build for clients — we build for ourselves. Our in-house products are born from the same design intuition and engineering rigour we bring to every engagement.
        </p>
      </div>

      <div className="px-8 md:px-14 xl:px-20 pb-24 grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((p) => (
          <Link
            key={p.slug}
            href={`/products/${p.slug}`}
            className="group p-10 md:p-14 flex flex-col justify-between min-h-[380px] hover:scale-[1.01] transition-transform duration-200"
            style={{ backgroundColor: p.bg }}
          >
            <div className="flex items-start justify-between">
              <span
                className="text-xs font-semibold px-3 py-1.5"
                style={{
                  borderRadius: "50px",
                  background: "rgba(255,255,255,0.15)",
                  color: p.dark === false ? "#2d2e38" : "#ffefd6",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                {p.status}
              </span>
              <ArrowUpRight
                size={20}
                className="text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </div>
            <div>
              <h2
                className="font-black uppercase mb-3 tracking-tight"
                style={{
                  fontSize: "clamp(40px,5vw,72px)",
                  fontFamily: "var(--font-display),'Barlow Condensed',Arial,sans-serif",
                  color: p.dark === false ? "#2d2e38" : "#ffefd6",
                }}
              >
                {p.name}
              </h2>
              <p
                className="text-base mb-4 leading-relaxed"
                style={{
                  color: p.dark === false ? "rgba(45,46,56,0.65)" : "rgba(255,239,214,0.6)",
                  fontFamily: "var(--font-serif),'IBM Plex Serif',Georgia,serif",
                }}
              >
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1"
                    style={{
                      borderRadius: "50px",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: p.dark === false ? "rgba(45,46,56,0.5)" : "rgba(255,239,214,0.4)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <CTA />
    </div>
  );
}
