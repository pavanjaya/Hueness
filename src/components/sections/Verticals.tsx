import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const capabilities = [
  {
    label: "Branding & UX Design",
    href: "/design",
    lead: "The foundation of every great business.",
    description: "We shape your vision, give it a distinct voice in tangible brand attributes & announce it to the world. From brand strategy and identity to UX research, design systems, and packaging.",
  },
  {
    label: "AI + Tech Solutions",
    href: "/tech",
    lead: "Engineering that brings design to life.",
    description: "We design and deliver tech-forward products — aligning business models with scalable, user-centred design and emerging AI technologies. Web, mobile, MVPs, and full-stack development.",
  },
  {
    label: "Marketing & Growth",
    href: "/marketing",
    lead: "Strategy that connects brands to markets.",
    description: "Brand positioning, go-to-market execution, content strategy, and performance marketing — the full growth stack for brands ready to scale.",
  },
];

export default function Verticals() {
  return (
    <section className="py-24 md:py-32 border-t border-[#e5e3de]">
      <div className="px-8 md:px-14 xl:px-20">

        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] tracking-tight leading-[1.02] max-w-xl">
              design+tech first,<br />
              brand innovation partner.
            </h2>
            <p className="text-[#6b6b6b] text-base leading-relaxed max-w-sm font-light">
              A purpose-led troupe of strategists, designers & engineers who excel in five core disciplines — backed by 30+ years of creative leadership in Fortune 500 companies.
            </p>
          </div>
        </RevealOnScroll>

        <div className="divide-y divide-[#e5e3de]">
          {capabilities.map((cap, i) => (
            <RevealOnScroll key={cap.href + i} delay={i * 60}>
              <Link
                href={cap.href}
                className="group flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-20 py-12 lg:py-16 hover:opacity-70 transition-opacity duration-300"
              >
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#000000] lg:w-64 shrink-0">
                  {cap.label}
                </h3>

                <div className="flex-1">
                  <p className="text-base font-semibold text-[#000000] mb-3">{cap.lead}</p>
                  <p className="text-sm text-[#6b6b6b] leading-relaxed max-w-lg">{cap.description}</p>
                </div>

                <div className="hidden lg:flex items-start pt-2">
                  <ArrowUpRight size={22} className="text-[#c0c0c0] group-hover:text-[#000000] transition-colors" />
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
