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
      <section className="min-h-[70vh] flex flex-col justify-end pb-20 pt-40 px-8 md:px-14 xl:px-20" style={{ borderBottom: "1px solid rgba(45,46,56,0.1)" }}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fa9173] mb-6 flex items-center gap-3">
          <span className="w-5 h-px bg-[#fa9173]" />
          Signature Offering by Hueness
        </p>
        <h1
          className="font-black uppercase text-[#2d2e38] tracking-tight leading-[0.88] max-w-4xl mb-8"
          style={{ fontSize: "clamp(64px,10vw,148px)", fontFamily: "var(--font-display),'Barlow Condensed',Arial,sans-serif" }}
        >
          Sprint<span className="text-[#fa9173]">Now.</span>
        </h1>
        <p className="text-xl text-[rgba(45,46,56,0.55)] max-w-2xl leading-relaxed mb-12" style={{ fontFamily: "var(--font-serif),'IBM Plex Serif',Georgia,serif", fontStyle: "italic" }}>
          See your product working before you build it. From UX audit to a fully functional, coded prototype — delivered in 8 to 12 weeks. No static mockups. No guesswork.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-[#fa9173] text-[#fffef9] font-semibold px-8 py-4 text-sm hover:opacity-90 transition-opacity"
            style={{ borderRadius: "50px" }}
          >
            Book a discovery call
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[#2d2e38] font-medium px-8 py-4 text-sm hover:border-[#2d2e38] transition-colors"
            style={{ borderRadius: "50px", border: "1px solid rgba(45,46,56,0.2)" }}
          >
            See case studies
          </Link>
        </div>
      </section>

      {/* Outcomes */}
      <section className="grid grid-cols-2 md:grid-cols-4" style={{ borderBottom: "1px solid rgba(45,46,56,0.1)" }}>
        {outcomes.map((o) => (
          <div key={o.label} className="px-8 py-12" style={{ borderRight: "1px solid rgba(45,46,56,0.1)" }}>
            <p
              className="font-black uppercase text-[#2d2e38] tracking-tight mb-2"
              style={{ fontSize: "clamp(36px,4vw,56px)", fontFamily: "var(--font-display),'Barlow Condensed',Arial,sans-serif" }}
            >
              {o.value}
            </p>
            <p className="text-xs font-semibold uppercase tracking-widest text-[rgba(45,46,56,0.4)]">{o.label}</p>
          </div>
        ))}
      </section>

      {/* Sprint phases */}
      <section className="py-24 md:py-32 px-8 md:px-14 xl:px-20" style={{ borderBottom: "1px solid rgba(45,46,56,0.1)" }}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(45,46,56,0.4)] mb-5 flex items-center gap-3">
          <span className="w-5 h-px bg-[rgba(45,46,56,0.3)]" />
          The Process
        </p>
        <h2
          className="font-black uppercase text-[#2d2e38] tracking-tight mb-16"
          style={{ fontSize: "clamp(40px,5.5vw,80px)", fontFamily: "var(--font-display),'Barlow Condensed',Arial,sans-serif" }}
        >
          Five sprints.<br />One working product.
        </h2>
        <div style={{ borderTop: "1px solid rgba(45,46,56,0.1)" }}>
          {sprints.map((s) => (
            <div key={s.num} className="py-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-16" style={{ borderBottom: "1px solid rgba(45,46,56,0.1)" }}>
              <span className="text-xs font-semibold text-[rgba(45,46,56,0.35)] md:w-12 shrink-0">{s.num}</span>
              <h3
                className="font-bold text-[#2d2e38] md:w-52 shrink-0"
                style={{ fontFamily: "var(--font-serif),'IBM Plex Serif',Georgia,serif" }}
              >
                {s.name}
              </h3>
              <p className="text-sm text-[rgba(45,46,56,0.55)] leading-relaxed max-w-xl" style={{ fontFamily: "var(--font-serif),'IBM Plex Serif',Georgia,serif" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-8 md:px-14 xl:px-20 text-center" style={{ background: "#323462" }}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-6" style={{ color: "rgba(255,239,214,0.45)" }}>Ready to sprint?</p>
        <h2
          className="font-black uppercase text-[#ffefd6] tracking-tight mb-8"
          style={{ fontSize: "clamp(48px,7vw,100px)", fontFamily: "var(--font-display),'Barlow Condensed',Arial,sans-serif" }}
        >
          Let&apos;s build something<br />real, fast.
        </h2>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 bg-[#fa9173] text-[#fffef9] font-semibold px-10 py-5 text-sm hover:opacity-90 transition-opacity"
          style={{ borderRadius: "50px" }}
        >
          Start a SprintNow engagement
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </>
  );
}
