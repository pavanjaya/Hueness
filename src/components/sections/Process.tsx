import RevealOnScroll from "@/components/ui/RevealOnScroll";

const steps = [
  {
    num: "01",
    title: "DiveIn",
    label: "Exploring Possibilities",
    body: "Client consultation & discovery, market & trend analysis, CFT brainstorming & goal setting. We ask the uncomfortable questions first.",
  },
  {
    num: "02",
    title: "Define",
    label: "Strategizing for Success",
    body: "Project scope & requirements, user & stakeholder profiling, problem definition & concept validation. We establish the unique territory your brand will own.",
  },
  {
    num: "03",
    title: "Design",
    label: "Bringing Ideas to Life",
    body: "Concept development & prototyping, user testing & feedback loops, final design refinement & implementation.",
  },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 border-t border-[#e5e3de]">
      <div className="px-6 xl:px-10">

        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#000000] leading-[0.95]">
              Agile, responsible<br />&amp; adaptive.
            </h2>
            <p className="text-[#6b6b6b] text-base leading-relaxed max-w-sm font-light">
              Our streamlined three-step process transforms ideas into thriving, market-ready businesses.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {steps.map((step, i) => (
            <RevealOnScroll key={step.title} delay={i * 80}>
              <div className="group pr-0 md:pr-16 mb-16 md:mb-0">
                <div className="flex items-start justify-between mb-12">
                  <span className="text-xs font-semibold text-[#c0c0c0] tracking-widest">{step.num}</span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#c0c0c0]">{step.label}</span>
                </div>
                <h3 className="text-5xl md:text-6xl font-bold text-[#000000] tracking-tight mb-6">{step.title}</h3>
                <p className="text-sm text-[#6b6b6b] leading-relaxed">{step.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
