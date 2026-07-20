import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Design",
  description: "Brand identity, UX/UI, packaging, CGI & animation. Humanising technology down to every last detail.",
};

const services = [
  {
    number: "01",
    title: "Brand Identity & Strategy",
    philosophy: "A brand isn't a logo. It's a belief system made visible.",
    description: "We shape your vision, give it a distinct voice in tangible brand attributes, and announce it to the world. From the very first strategy session to the final brand rollout — every decision is intentional.",
    deliverables: ["Brand Strategy & Positioning", "Naming & Narrative Development", "Logo & Visual Identity", "Brand Guidelines", "Brand Experience Design", "Illustration & Art Direction", "Digital & Print Implementation"],
    caseStudy: { label: "Rishaba Industries", desc: "Elevating India's Smart Essentials Brand", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
  },
  {
    number: "02",
    title: "UX / UI Design",
    philosophy: "Technology should feel human — down to every last detail.",
    description: "We work with your teams to identify unique UX needs and deliver tailored solutions by humanising technology. We don't just design screens — we design decisions, flows, and feelings.",
    deliverables: ["User Research & Personas", "Information Architecture", "Wireframing & Prototyping", "Visual & Interaction Design", "Motion Design", "Usability Testing & UX Audit", "Design Systems"],
    caseStudy: { label: "CodeFobe", desc: "Gamified Learning for Next-Gen Coders", image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80" },
  },
  {
    number: "03",
    title: "Packaging Design",
    philosophy: "The shelf is your first salesperson. Make it count.",
    description: "Packaging is where brand strategy meets consumer psychology. We craft packaging experiences that tell brand stories, connect with consumers, and stand out — whether on a physical shelf or a digital storefront.",
    deliverables: ["Structural & Dieline Design", "Surface Graphics & Typography", "Material & Finish Guidance", "Retail & E-commerce Adaptation", "Print Production Support", "Unboxing Experience Design"],
    caseStudy: { label: "Kirchenwrapp", desc: "Rethinking Kitchenaid for Urban Homes", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" },
  },
  {
    number: "04",
    title: "CGI & Animation Design",
    philosophy: "Stories that move — literally.",
    description: "We craft engaging narratives that entertain, educate, and inspire — bringing characters, products, and brands to life with world-class animation and visual effects.",
    deliverables: ["2D & 3D CGI", "Character Animation", "Motion Design & Brand Films", "VFX & Compositing", "Product Visualisation", "Storyboarding & Direction", "Corporate Films"],
    caseStudy: { label: "Groomré", desc: "AI-Powered Facial Hair Styler", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80" },
  },
];

export default function DesignPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="px-6 xl:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#fa9173] mb-6">Design</p>
            <h1
              className="font-black uppercase text-[#2d2e38] tracking-tight leading-[0.88]"
              style={{ fontSize: "clamp(52px,7vw,108px)", fontFamily: "var(--font-display),'Barlow Condensed',Arial,sans-serif" }}
            >
              Design that moves people and drives business.
            </h1>
          </div>
          <div>
            <p className="text-[rgba(45,46,56,0.55)] text-lg leading-relaxed" style={{ fontFamily: "var(--font-serif),'IBM Plex Serif',Georgia,serif", fontStyle: "italic" }}>
              We believe design forms the basis of human intelligence. At Hueness, intuition and instinct are at the core of every brand, product, or service experience — we call it the Hue Spot.
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="px-6 xl:px-10">
        {services.map((s, i) => (
          <div
            key={s.number}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 md:py-24 ${i !== services.length - 1 ? "border-b" : ""}`}
            style={i !== services.length - 1 ? { borderColor: "rgba(45,46,56,0.08)" } : {}}
          >
            <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
              <div className="flex items-start gap-4 mb-6">
                <span className="text-xs font-bold text-[rgba(45,46,56,0.35)] uppercase tracking-widest mt-1">{s.number}</span>
                <h2
                  className="font-black uppercase text-[#2d2e38] tracking-tight"
                  style={{ fontSize: "clamp(28px,3vw,44px)", fontFamily: "var(--font-display),'Barlow Condensed',Arial,sans-serif" }}
                >
                  {s.title}
                </h2>
              </div>
              <p className="text-[#2d2e38] font-medium text-base mb-4" style={{ fontFamily: "var(--font-serif),'IBM Plex Serif',Georgia,serif", fontStyle: "italic" }}>
                &ldquo;{s.philosophy}&rdquo;
              </p>
              <p className="text-[rgba(45,46,56,0.55)] leading-relaxed mb-8" style={{ fontFamily: "var(--font-serif),'IBM Plex Serif',Georgia,serif" }}>{s.description}</p>
              <ul className="space-y-2 mb-10">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-sm text-[#2d2e38]">
                    <span className="w-1 h-1 rounded-full bg-[#fa9173] shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
              <Link href="/work" className="group block relative overflow-hidden">
                <div className="relative h-72 md:h-96 w-full overflow-hidden">
                  <Image src={s.caseStudy.image} alt={s.caseStudy.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#2d2e38]/30 group-hover:bg-[#2d2e38]/15 transition-colors" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="backdrop-blur-md p-4 flex items-end justify-between" style={{ background: "rgba(255,254,249,0.1)", border: "1px solid rgba(255,254,249,0.2)" }}>
                    <div>
                      <p className="text-white/70 text-xs mb-1">Case Study</p>
                      <p className="text-white font-bold text-lg leading-snug">{s.caseStudy.label}</p>
                      <p className="text-white/70 text-sm">{s.caseStudy.desc}</p>
                    </div>
                    <ArrowUpRight size={20} className="text-white/50 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <CTA />
    </div>
  );
}
