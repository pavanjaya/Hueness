import RevealOnScroll from "@/components/ui/RevealOnScroll";

const stats = [
  { value: "8+", label: "Years of expertise" },
  { value: "120+", label: "Projects delivered" },
  { value: "30+", label: "Years of leadership experience" },
  { value: "5", label: "Core disciplines" },
];

export default function Stats() {
  return (
    <section className="py-24 md:py-32 border-t border-[#e5e3de]">
      <div className="px-8 md:px-14 xl:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-8">
          {stats.map((s, i) => (
            <RevealOnScroll key={s.label} delay={i * 80}>
              <div>
                <p className="text-[clamp(52px,7vw,96px)] font-bold tracking-tight text-[#000000] leading-none mb-3">
                  {s.value}
                </p>
                <p className="text-sm text-[#6b6b6b] leading-snug max-w-[140px]">{s.label}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
