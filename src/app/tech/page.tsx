import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Tech",
  description: "Websites, apps, full-stack development, and AI-powered digital products.",
};

const services = [
  {
    number: "01",
    title: "Website Design & Development",
    philosophy: "Your website is your hardest working employee. Treat it like one.",
    description: "We design and build websites that don't just look good — they perform. From marketing sites to complex web platforms, every pixel is intentional and every line of code is purposeful.",
    deliverables: ["Website Strategy & Architecture", "UI/UX Design", "Frontend Development", "CMS Integration (Sanity, Contentful)", "SEO & Performance Optimisation", "Maintenance & Support"],
    caseStudy: { label: "Megasoft", desc: "Website Revamp for Global FinTech", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80" },
  },
  {
    number: "02",
    title: "Full-Stack Development",
    philosophy: "Code is craft. We build things that scale, fast.",
    description: "From database architecture to pixel-perfect frontends — we build full-stack digital products end to end. Our engineering is robust, clean, and built for the long run.",
    deliverables: ["Frontend Development (React, Next.js)", "Backend & API Development", "Database Design & Architecture", "Cloud Infrastructure & DevOps", "Performance & Security", "Third-party API Integrations"],
    caseStudy: { label: "Konnectoid", desc: "Professional Network Platform", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" },
  },
  {
    number: "03",
    title: "App Development",
    philosophy: "Mobile-first isn't a trend. It's where your users live.",
    description: "We build mobile apps that users actually love — intuitive, fast, and designed for the real world. From concept to App Store, we handle the full journey.",
    deliverables: ["iOS & Android Development", "React Native / Cross-platform", "App UX & Interaction Design", "Push Notifications & Analytics", "App Store Optimisation", "Post-launch Support & Updates"],
    caseStudy: { label: "Groomré", desc: "AI-Powered Facial Hair Styler App", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" },
  },
  {
    number: "04",
    title: "AI + Tech Solutions",
    philosophy: "AI isn't replacing creativity. It's amplifying it.",
    description: "We integrate AI where it genuinely adds value — conversational interfaces, predictive UX, automation, and intelligent product features — always designed with the user front and centre.",
    deliverables: ["Conversational AI & Chatbots", "AI Feature Integration", "Predictive UX Systems", "Automation Workflows", "Voice Interfaces", "MVP & Rapid Prototyping"],
    caseStudy: { label: "CodeFobe", desc: "Gamified AI Learning Platform", image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80" },
  },
];

export default function TechPage() {
  return (
    <div style={{ paddingTop: "88px" }}>
      <div className="px-8 md:px-14 xl:px-20 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#fa9173] mb-6">Tech</p>
            <h1
              className="font-black uppercase text-[#2d2e38] tracking-tight leading-[0.88]"
              style={{ fontSize: "clamp(52px,7vw,108px)", fontFamily: "var(--font-display),'Barlow Condensed',Arial,sans-serif" }}
            >
              Technology built with design at its core.
            </h1>
          </div>
          <div>
            <p className="text-[rgba(45,46,56,0.55)] text-lg leading-relaxed" style={{ fontFamily: "var(--font-serif),'IBM Plex Serif',Georgia,serif", fontStyle: "italic" }}>
              We build AI-powered products, digital platforms, and scalable infrastructure — always with the user experience front and centre. Engineering that looks good and works even better.
            </p>
          </div>
        </div>
      </div>

      <div className="px-8 md:px-14 xl:px-20">
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
