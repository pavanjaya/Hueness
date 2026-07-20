import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    label: "Strategy",
    href: "/design",
    desc: "Business strategy, brand strategy, product strategy, research & discovery, innovation consulting.",
  },
  {
    label: "Design",
    href: "/design",
    desc: "Brand identity, UX/UI design, web design, product design, packaging, design systems.",
  },
  {
    label: "Technology",
    href: "/tech",
    desc: "Product engineering, SaaS, web & mobile development, AI solutions, cloud & integrations.",
  },
  {
    label: "Marketing",
    href: "/marketing",
    desc: "Brand marketing, growth marketing, performance marketing, content, SEO & analytics.",
  },
];

export default function StudioAbout() {
  return (
    <section className="border-t border-[#e5e3de] py-24 md:py-36 px-6 xl:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">

        {/* Left */}
        <div>
          <p className="text-[clamp(22px,2.8vw,38px)] font-medium text-[#000000] leading-[1.3] tracking-tight mb-10">
            A purpose-led troupe of strategists, designers & engineers — backed by 30+ years of Fortune 500 leadership experience, building from India for the world.
          </p>
          <Link
            href="/studio-page"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#000000] underline underline-offset-4 decoration-[#d0d0d0] hover:decoration-[#000000] transition-all"
          >
            About the studio
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Right — services */}
        <div className="divide-y divide-[#e5e3de]">
          {services.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              className="group flex items-start justify-between gap-6 py-7 hover:opacity-60 transition-opacity"
            >
              <div>
                <p className="text-base font-bold text-[#000000] mb-1">{s.label}</p>
                <p className="text-sm text-[#6b6b6b]">{s.desc}</p>
              </div>
              <ArrowRight size={16} className="text-[#c0c0c0] group-hover:text-[#000000] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
