import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Strategy",
    href: "/design",
    description: "We shape brand vision, define market positioning, and build the strategic foundation your business needs to compete and grow.",
    items: ["Business Strategy", "Brand Strategy", "Product Strategy", "Research & Discovery", "Innovation Consulting"],
  },
  {
    number: "02",
    title: "Design",
    href: "/design",
    description: "Design that moves people and drives business — from brand identity to digital products, every detail is intentional.",
    items: ["Brand Identity", "UX / UI Design", "Web Design", "Packaging Design", "Design Systems"],
  },
  {
    number: "03",
    title: "Technology",
    href: "/tech",
    description: "We engineer scalable digital products and AI-powered solutions that bring your boldest ideas to life.",
    items: ["Product Engineering", "SaaS Development", "Web & Mobile Development", "AI Solutions", "API & Integrations"],
  },
  {
    number: "04",
    title: "Marketing",
    href: "/marketing",
    description: "Campaigns and growth systems that attract, engage, and convert — built on data and led by creativity.",
    items: ["Brand Marketing", "Growth Marketing", "Performance Marketing", "Content Marketing", "SEO & Analytics"],
  },
];

export default function ServicesSection() {
  return (
    <section
      className="px-8 md:px-14 xl:px-20 py-24 md:py-32"
      style={{ borderTop: "1px solid rgba(45,46,56,0.1)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-16">
        <h2
          className="font-black uppercase text-[#2d2e38]"
          style={{ fontSize: "clamp(13px, 1.2vw, 15.6px)", letterSpacing: "0.2em", fontFamily: "var(--font-geist-sans)" }}
        >
          What We Do
        </h2>
        <Link
          href="/design"
          className="text-xs font-medium uppercase tracking-[0.2em] text-[rgba(45,46,56,0.4)] hover:text-[#2d2e38] transition-colors"
        >
          All services →
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0" style={{ borderTop: "1px solid rgba(45,46,56,0.1)", borderBottom: "1px solid rgba(45,46,56,0.1)" }}>
        {services.map((s, i) => (
          <Link
            key={s.number}
            href={s.href}
            className="group flex flex-col py-10 transition-colors hover:bg-[#fffef9]"
            style={{
              borderRight: i < 3 ? "1px solid rgba(45,46,56,0.1)" : undefined,
              padding: "40px 32px",
            }}
          >
            <span
              className="text-xs font-bold text-[rgba(45,46,56,0.25)] uppercase tracking-widest block mb-6"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              {s.number}
            </span>
            <h3
              className="font-black uppercase text-[#2d2e38] tracking-tight leading-none mb-5 group-hover:text-[#fa9173] transition-colors"
              style={{ fontSize: "clamp(32px, 3vw, 48px)", fontFamily: "var(--font-display), 'Barlow Condensed', Arial, sans-serif" }}
            >
              {s.title}
            </h3>
            <p
              className="text-[rgba(45,46,56,0.5)] leading-relaxed mb-8 text-sm"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              {s.description}
            </p>
            <ul className="space-y-2 mb-8">
              {s.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#2d2e38]">
                  <span className="w-1 h-1 rounded-full bg-[#fa9173] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-auto text-xs font-semibold uppercase tracking-[0.15em] text-[#fa9173]">
              Explore →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
