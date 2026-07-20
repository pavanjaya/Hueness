import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SprintNow — Product Acceleration",
  description: "See your product working before you build it. From UX audit to a fully coded prototype in 8–12 weeks.",
};

const sprints = [
  { num: "01", name: "Audit Sprint", desc: "Deep evaluation of your existing UX, flows, and architecture. We identify friction points and opportunities before writing a single line of new code." },
  { num: "02", name: "Strategy Sprint", desc: "Rethink information architecture, user flows, and product positioning. Align stakeholders on a clear product direction." },
  { num: "03", name: "Design Sprint", desc: "Full UI design and a complete design system — built for handoff, not just presentation." },
  { num: "04", name: "Prototype Sprint", desc: "A real, coded, functional prototype your engineers can build directly on top of. Not static mockups." },
  { num: "05", name: "Implementation Sprint", desc: "Engineering support, QA partnership, and handoff documentation. We stay until it ships." },
];

const outcomes = [
  { value: "8–12 wks", label: "Audit to working prototype" },
  { value: "40–70%", label: "Reduction in engineering rework" },
  { value: "3×", label: "Faster product decision-making" },
  { value: "30–35%", label: "Reduction in support tickets post-launch" },
];

export default function SprintNowPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[70vh] flex flex-col justify-end pb-20 pt-40 px-6 xl:px-10 border-b border-[#e5e3de]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#000000] mb-6 flex items-center gap-3">
          <span className="w-5 h-px bg-[#000000]" />
          Signature Offering by Hueness
        </p>
        <h1 className="text-[clamp(52px,8vw,112px)] font-bold leading-[0.92] tracking-tight text-[#000000] max-w-4xl mb-8">
          Sprint<span className="text-[#000000]">Now.</span>
        </h1>
        <p className="text-xl text-[#6b6b6b] max-w-2xl leading-relaxed font-light mb-12">
          See your product working before you build it. From UX audit to a fully functional, coded prototype — delivered in 8 to 12 weeks. No static mockups. No guesswork.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="group inline-flex items-center gap-2 bg-[#000000] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#000000] transition-colors text-sm">
            Book a discovery call
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/work" className="inline-flex items-center gap-2 text-[#000000] font-medium px-8 py-4 rounded-full border border-[#d0d0d0] hover:border-[#000000] transition-colors text-sm">
            See case studies
          </Link>
        </div>
      </section>

      {/* Outcomes */}
      <section className="grid grid-cols-2 md:grid-cols-4 border-b border-[#e5e3de]">
        {outcomes.map((o) => (
          <div key={o.label} className="px-8 py-12 border-r border-[#e5e3de] last:border-r-0">
            <p className="text-4xl md:text-5xl font-bold text-[#000000] tracking-tight mb-2">{o.value}</p>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6b6b6b]">{o.label}</p>
          </div>
        ))}
      </section>

      {/* Sprint phases */}
      <section className="py-24 md:py-32 px-6 xl:px-10 border-b border-[#e5e3de]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b6b6b] mb-5 flex items-center gap-3">
          <span className="w-5 h-px bg-[#6b6b6b]" />
          The Process
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#000000] tracking-tight mb-16">Five sprints.<br />One working product.</h2>
        <div className="divide-y divide-[#e5e3de]">
          {sprints.map((s) => (
            <div key={s.num} className="py-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-16">
              <span className="text-xs font-semibold text-[#6b6b6b] md:w-12 shrink-0">{s.num}</span>
              <h3 className="text-xl font-bold text-[#000000] md:w-52 shrink-0">{s.name}</h3>
              <p className="text-sm text-[#6b6b6b] leading-relaxed max-w-xl">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 xl:px-10 bg-[#000000] text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a9a9a] mb-6">Ready to sprint?</p>
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
          Let&apos;s build something<br />real, fast.
        </h2>
        <Link href="/contact" className="group inline-flex items-center gap-2 bg-[#000000] text-white font-semibold px-10 py-5 rounded-full hover:bg-white hover:text-[#000000] transition-colors text-sm">
          Start a SprintNow engagement
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </>
  );
}
