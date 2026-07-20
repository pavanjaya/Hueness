import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function CTA() {
  return (
    <section
      className="px-6 xl:px-10 py-28 md:py-48"
      style={{ borderTop: "1px solid rgba(12,12,12,0.1)" }}
    >
      <RevealOnScroll>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(12,12,12,0.35)] mb-8">
          Let&apos;s create something
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={80}>
        <h2
          className="font-bold text-[#0c0c0c] tracking-tight leading-[0.92] mb-14 max-w-4xl"
          style={{ fontSize: "clamp(52px,8vw,120px)" }}
        >
          Got an idea,<br />why wait?
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={140}>
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-24">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0c0c0c] text-[#f4f1eb] font-semibold px-8 py-4 rounded-full hover:opacity-85 transition-opacity text-sm"
          >
            Start a project →
          </Link>
          <a
            href="tel:+919322135422"
            className="inline-flex items-center gap-2 text-[rgba(12,12,12,0.55)] font-medium px-8 py-4 rounded-full border border-[rgba(12,12,12,0.15)] hover:border-[rgba(12,12,12,0.4)] hover:text-[#0c0c0c] transition-all text-sm"
          >
            +91 932 2135 422
          </a>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={180}>
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-10"
          style={{ borderTop: "1px solid rgba(12,12,12,0.1)" }}
        >
          <p className="text-sm text-[rgba(12,12,12,0.3)]">No commitment. Just a conversation.</p>
          <a
            href="mailto:hello@hueness.com"
            className="text-sm text-[rgba(12,12,12,0.4)] hover:text-[#0c0c0c] transition-colors"
          >
            hello@hueness.com
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
}
