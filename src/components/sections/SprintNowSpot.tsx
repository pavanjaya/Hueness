import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const outcomes = [
  { value: "8–12", unit: "weeks", label: "From audit to working prototype" },
  { value: "40–70%", unit: "", label: "Reduction in engineering rework" },
  { value: "3×", unit: "", label: "Faster product decision-making" },
];

const sprints = ["Audit Sprint", "Strategy Sprint", "Design Sprint", "Prototype Sprint", "Implementation Sprint"];

export default function SprintNowSpot() {
  return (
    <section className="py-24 md:py-32 border-t border-[#e5e3de] bg-[#000000] overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{ backgroundImage: "radial-gradient(ellipse at 80% 50%, #000000 0%, transparent 55%)" }}
      />

      <div className="px-6 xl:px-10 relative z-10">
        <RevealOnScroll>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#000000] mb-5 flex items-center gap-3">
            
            Signature Offering
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <RevealOnScroll delay={60}>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[0.96] mb-6">
                Sprint<span className="text-[#000000]">Now.</span>
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-10 font-light max-w-md">
                See your product working before you build it. From UX audit to a fully coded, functional prototype — in 8 to 12 weeks.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={120}>
              <div className="flex flex-wrap gap-2 mb-12">
                {sprints.map((s) => (
                  <span key={s} className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/50">
                    {s}
                  </span>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={160}>
              <Link
                href="/sprint-now"
                className="group inline-flex items-center gap-2 bg-[#000000] text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-[#000000] transition-colors text-sm"
              >
                Learn about SprintNow
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </RevealOnScroll>
          </div>

          {/* Right — outcome stats */}
          <div className="divide-y divide-white/10">
            {outcomes.map((o, i) => (
              <RevealOnScroll key={o.label} delay={i * 80}>
                <div className="py-8 flex items-center gap-8">
                  <p className="text-4xl md:text-5xl font-bold text-white leading-none w-32 shrink-0">
                    {o.value}
                    {o.unit && <span className="text-[#000000]"> {o.unit}</span>}
                  </p>
                  <p className="text-sm text-white/50 leading-relaxed">{o.label}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
