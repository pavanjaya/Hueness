import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Marketing",
  description: "Brand positioning, content strategy, digital campaigns, and go-to-market execution.",
};

const services = [
  {
    number: "01",
    title: "Brand Strategy & Positioning",
    philosophy: "Clarity is the most underrated competitive advantage.",
    description: "Before any campaign runs, any logo is drawn, or any content is written — your brand needs a clear point of view. We define where you stand, who you're talking to, and why they should care.",
    deliverables: ["Competitive Landscape Analysis", "Brand Positioning Framework", "Audience Segmentation", "Brand Voice & Tone Guide", "Messaging Architecture", "Value Proposition Design"],
    caseStudy: { label: "GM Design", desc: "Crafting the Brand for Grand Master of Interiors", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
  },
  {
    number: "02",
    title: "Content Strategy",
    philosophy: "Content without strategy is just noise.",
    description: "We build content ecosystems that attract, engage, and convert — across every channel and format. From thought leadership to social-first content, we make sure your brand always has something valuable to say.",
    deliverables: ["Content Audit & Gap Analysis", "Editorial Calendar Planning", "SEO & Keyword Strategy", "Thought Leadership Programs", "Social Media Content Strategy", "Blog, Video & Podcast Direction"],
    caseStudy: { label: "LaunchX Labs", desc: "Social-Powered Review Platform Content", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" },
  },
  {
    number: "03",
    title: "Digital Marketing",
    philosophy: "Data tells you what happened. Strategy tells you what to do next.",
    description: "Campaigns that reach the right audience at the right time — data-driven and creatively led. We manage performance marketing, social campaigns, and email — always with clear metrics and clear outcomes.",
    deliverables: ["Performance & Paid Campaigns", "Social Media Management", "Email Marketing & Automation", "Analytics & Reporting", "Conversion Rate Optimisation", "Growth Experiments & A/B Testing"],
    caseStudy: { label: "Mustang", desc: "Digital Refresh for Leading Sock Brand", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" },
  },
  {
    number: "04",
    title: "Go-to-Market Execution",
    philosophy: "A great product with a bad launch is a missed opportunity.",
    description: "From strategy to execution — we plan and run product and brand launches that make an impact. Whether you're entering a new market or refreshing an existing one, we make sure the world notices.",
    deliverables: ["Launch Strategy & Roadmap", "PR & Communications", "Campaign Creative Direction", "Channel Strategy & Planning", "Influencer & Partnership Outreach", "Post-launch Optimisation"],
    caseStudy: { label: "Kinderlogica", desc: "Brand Design for Curiosity-Led Preschool", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80" },
  },
];

export default function MarketingPage() {
  return (
    <div className="pt-20">
      <div className="px-6 xl:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#fa9173] mb-6">Marketing</p>
            <h1
              className="font-black uppercase text-[#2d2e38] tracking-tight leading-[0.88]"
              style={{ fontSize: "clamp(52px,7vw,108px)", fontFamily: "var(--font-display),'Barlow Condensed',Arial,sans-serif" }}
            >
              Marketing that positions, connects, and converts.
            </h1>
          </div>
          <div>
            <p className="text-[rgba(45,46,56,0.55)] text-lg leading-relaxed" style={{ fontFamily: "var(--font-serif),'IBM Plex Serif',Georgia,serif", fontStyle: "italic" }}>
              We craft brand strategies and execute marketing campaigns that build lasting connections — bridging the gap between bold ideas and real business growth.
            </p>
          </div>
        </div>
      </div>

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
