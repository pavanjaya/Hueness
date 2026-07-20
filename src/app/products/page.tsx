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
    bg: "#000000",
    accent: "#000000",
    tags: ["Developer Tool", "Productivity"],
  },
  {
    name: "Paintora",
    tagline: "AI-powered creative canvas for everyone",
    description: "A creative canvas where AI meets artistic expression. Paintora lets anyone create stunning visuals with the power of generative AI.",
    status: "Beta",
    slug: "paintora",
    bg: "#1a1a2e",
    accent: "#7c3aed",
    tags: ["AI", "Creative", "Design Tool"],
  },
  {
    name: "Howztrip",
    tagline: "Smart travel planning, beautifully designed",
    description: "Travel planning reimagined — AI-powered itineraries, curated recommendations, and a beautiful interface that makes planning as fun as the trip.",
    status: "Coming Soon",
    slug: "howztrip",
    bg: "#0f2a1a",
    accent: "#16a34a",
    tags: ["Travel", "AI", "Lifestyle"],
  },
  {
    name: "Groomré",
    tagline: "AI facial hair recommendations for modern men",
    description: "An AI-powered platform offering personalized facial hair style recommendations. Built using design thinking and computer vision to empower modern grooming.",
    status: "Live",
    slug: "groomre",
    bg: "#1a0f0a",
    accent: "#c2410c",
    tags: ["AI", "Lifestyle", "Grooming"],
  },
];

export default function ProductsPage() {
  return (
    <div className="pt-20">
      <div className="px-6 xl:px-10 py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#000000] mb-6">In The Lab</p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#000000] tracking-tight leading-tight max-w-4xl mb-8">
          Products we&apos;re building for the world.
        </h1>
        <p className="text-[#6b6b6b] text-lg max-w-2xl leading-relaxed">
          At Hueness, we don&apos;t just build for clients — we build for ourselves. Our in-house products are born from the same design intuition and engineering rigour we bring to every engagement.
        </p>
      </div>

      <div className="px-6 xl:px-10 pb-24 grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((p) => (
          <Link
            key={p.slug}
            href={`/products/${p.slug}`}
            className="group rounded-sm p-10 md:p-14 flex flex-col justify-between min-h-[380px] hover:scale-[1.01] transition-transform duration-200"
            style={{ backgroundColor: p.bg }}
          >
            <div className="flex items-start justify-between">
              <span
                className="text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{ backgroundColor: `${p.accent}25`, color: p.accent }}
              >
                {p.status}
              </span>
              <ArrowUpRight
                size={20}
                className="text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">{p.name}</h2>
              <p className="text-white/60 text-base mb-4 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/40">
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
