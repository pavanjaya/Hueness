import RevealOnScroll from "@/components/ui/RevealOnScroll";

const industries = [
  "Manufacturing & FMCG",
  "Healthcare & Wellness",
  "FinTech & BFSI",
  "Education & EdTech",
  "Waste Management & Sustainability",
  "Design + Build & Architecture",
  "Lifestyle & Fashion",
  "Technology & SaaS",
  "Social Impact",
];

export default function Industries() {
  return (
    <section className="py-24 md:py-32 border-t border-[#e5e3de]">
      <div className="px-8 md:px-14 xl:px-20">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b6b6b] mb-5 flex items-center gap-3">
                
                Industries
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#000000] tracking-tight leading-[0.95] max-w-xl">
                Deep domain knowledge<br />across sectors.
              </h2>
            </div>
            <p className="text-[#6b6b6b] text-base leading-relaxed max-w-sm font-light">
              We don&apos;t just understand design — we understand business. Every sector we work in, we study thoroughly before we create.
            </p>
          </div>
        </RevealOnScroll>

        <div className="divide-y divide-[#e5e3de]">
          {industries.map((name, i) => (
            <RevealOnScroll key={name} delay={i * 40}>
              <div className="group flex items-center justify-between py-5 hover:pl-3 transition-all duration-300">
                <span className="text-base md:text-lg font-medium text-[#000000] group-hover:text-[#000000] transition-colors">
                  {name}
                </span>
                <span className="text-[#d0d0d0] group-hover:text-[#000000] transition-colors text-sm">→</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
