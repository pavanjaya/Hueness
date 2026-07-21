import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const stats = [
  { value: 8,   suffix: "+", label: "Years of\nexperience" },
  { value: 50,  suffix: "+", label: "Brands\nbuilt" },
  { value: 4,   suffix: "",  label: "Service\nverticals" },
];

export default function StudioStatement() {
  return (
    <section
      className="px-8 md:px-14 xl:px-20 py-28 md:py-40"
      style={{ borderTop: "1px solid rgba(45,46,56,0.1)" }}
    >
      {/* Statement */}
      <RevealOnScroll>
        <p
          className="text-[#2d2e38] leading-[1.2] tracking-tight mb-24 md:mb-32 max-w-5xl"
          style={{
            fontSize: "clamp(28px,3.5vw,56px)",
            fontFamily: "var(--font-serif), 'IBM Plex Serif', Georgia, serif",
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          We are a strategic partner to our clients — helping businesses ideate, design, build and scale exceptional brands, products and growth systems from strategy through execution.
        </p>
      </RevealOnScroll>

      {/* Stats — animated counters */}
      <div className="flex flex-col md:flex-row items-start gap-16 md:gap-32 mb-20" data-stagger>
        {stats.map((s) => (
          <div key={s.label} data-stagger-item>
            <p
              className="font-black uppercase text-[#2d2e38] leading-none tracking-tight mb-3"
              style={{
                fontSize: "clamp(72px,10vw,140px)",
                fontFamily: "var(--font-display), 'Barlow Condensed', Arial, sans-serif",
              }}
              data-counter={s.value}
              data-counter-suffix={s.suffix}
            >
              {s.value}{s.suffix}
            </p>
            <p className="text-xs font-medium text-[rgba(45,46,56,0.4)] uppercase tracking-widest whitespace-pre-line leading-relaxed">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <RevealOnScroll delay={160}>
        <Link
          href="/studio-page"
          className="btn inline-flex items-center gap-3 text-sm font-medium text-[#2d2e38] border border-[rgba(45,46,56,0.25)] px-7 py-3.5 hover:bg-[#2d2e38] hover:text-[#fffef9] transition-colors"
          style={{ borderRadius: "50px" }}
        >
          More about us →
        </Link>
      </RevealOnScroll>
    </section>
  );
}
