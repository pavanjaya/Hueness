import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const stats = [
  { value: "8+", label: "Years of\nexperience" },
  { value: "50+", label: "Brands\nbuilt" },
  { value: "4", label: "Service\nverticals" },
];

export default function StudioStatement() {
  return (
    <section
      className="px-6 xl:px-10 py-28 md:py-40"
      style={{ borderTop: "1px solid rgba(12,12,12,0.1)" }}
    >
      {/* Statement */}
      <RevealOnScroll>
        <p
          className="font-medium text-[#0c0c0c] leading-[1.15] tracking-tight mb-24 md:mb-32 max-w-5xl"
          style={{ fontSize: "clamp(28px,3.5vw,56px)" }}
        >
          We are a strategic partner to our clients — helping businesses ideate, design, build and scale exceptional brands, products and growth systems from strategy through execution.
        </p>
      </RevealOnScroll>

      {/* Stats */}
      <RevealOnScroll delay={100}>
        <div className="flex flex-col md:flex-row items-start gap-16 md:gap-32 mb-20">
          {stats.map((s, i) => (
            <div key={i}>
              <p
                className="font-bold text-[#0c0c0c] leading-none tracking-tight mb-3"
                style={{ fontSize: "clamp(64px,9vw,128px)" }}
              >
                {s.value}
              </p>
              <p className="text-xs font-medium text-[rgba(12,12,12,0.4)] uppercase tracking-widest whitespace-pre-line leading-relaxed">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={160}>
        <Link
          href="/studio-page"
          className="inline-flex items-center gap-3 text-sm font-medium text-[#0c0c0c] border border-[rgba(12,12,12,0.2)] px-7 py-3.5 rounded-full hover:border-[rgba(12,12,12,0.6)] transition-colors"
        >
          More about us →
        </Link>
      </RevealOnScroll>
    </section>
  );
}
