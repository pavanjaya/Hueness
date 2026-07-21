import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function CTA() {
  return (
    <section
      className="px-8 md:px-14 xl:px-20 py-28 md:py-48"
      style={{ background: "#323462" }}
    >
      <RevealOnScroll>
        <p
          className="text-xs font-semibold uppercase tracking-[0.2em] mb-8"
          style={{ color: "rgba(255,239,214,0.5)" }}
        >
          Let&apos;s create something
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={80}>
        <h2
          className="font-display font-black uppercase text-[#ffefd6] tracking-tight leading-[0.88] mb-14 max-w-4xl"
          style={{
            fontSize: "clamp(64px,10vw,148px)",
            fontFamily: "var(--font-display), 'Barlow Condensed', Arial, sans-serif",
          }}
        >
          Got an idea,<br />why wait?
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={140}>
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-24">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#fa9173] text-[#fffef9] font-semibold px-8 py-4 hover:opacity-90 transition-opacity text-sm"
            style={{ borderRadius: "50px" }}
          >
            Start a project →
          </Link>
          <a
            href="tel:+919322135422"
            className="inline-flex items-center gap-2 font-medium px-8 py-4 border text-sm hover:bg-[rgba(255,239,214,0.1)] transition-colors"
            style={{ borderRadius: "50px", color: "rgba(255,239,214,0.6)", borderColor: "rgba(255,239,214,0.2)" }}
          >
            +91 932 2135 422
          </a>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={180}>
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-10"
          style={{ borderTop: "1px solid rgba(255,239,214,0.15)" }}
        >
          <p className="text-sm" style={{ color: "rgba(255,239,214,0.35)" }}>No commitment. Just a conversation.</p>
          <a
            href="mailto:business@hueness.com"
            className="text-sm hover:text-[#ffefd6] transition-colors"
            style={{ color: "rgba(255,239,214,0.45)" }}
          >
            business@hueness.com
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
}
