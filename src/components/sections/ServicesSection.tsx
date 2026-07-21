import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const services = [
  {
    num: "01",
    title: "Strategy",
    href: "/design",
    description:
      "Before execution comes clarity. We help businesses define the right direction — through brand strategy, product discovery, market research, and innovation consulting.",
    tags: ["Business Strategy", "Brand Strategy", "Product Strategy", "Research & Discovery", "Innovation Consulting"],
    images: ["/projects/rishaba.png", "/projects/kinderlogica.png"],
  },
  {
    num: "02",
    title: "Design",
    href: "/design",
    description:
      "We create brands, products and experiences that people love — from brand identity and UX/UI to packaging, web design and scalable design systems.",
    tags: ["Brand Identity", "UX/UI Design", "Web Design", "Packaging", "Design Systems"],
    images: ["/projects/mustang.png", "/projects/indu.png"],
  },
  {
    num: "03",
    title: "Technology",
    href: "/tech",
    description:
      "We build scalable digital products and intelligent solutions — product engineering, SaaS, web & mobile development, AI integrations and cloud infrastructure.",
    tags: ["Product Engineering", "SaaS Development", "Web & Mobile", "AI Solutions", "API & Integrations"],
    images: ["/projects/megasoft.png", "/projects/sarang.png"],
  },
  {
    num: "04",
    title: "Marketing",
    href: "/marketing",
    description:
      "We accelerate growth through modern marketing — brand marketing, performance campaigns, content strategy, SEO and full-funnel analytics.",
    tags: ["Brand Marketing", "Growth Marketing", "Performance", "Content Strategy", "SEO & Analytics"],
    images: ["/projects/kinderlogica.png", "/projects/rishaba.png"],
  },
];

export default function ServicesSection() {
  return (
    <section className="border-t border-[#e5e3de]">
      {services.map((s, i) => (
        <RevealOnScroll key={s.num}>
          <div className="border-b border-[#e5e3de] px-8 md:px-14 xl:px-20 py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-10 md:gap-16">

              {/* Left — number + CTA */}
              <div className="flex md:flex-col items-start justify-between md:justify-start gap-4">
                <span className="text-xs font-bold text-[#000000] border border-[#e5e3de] rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                  {s.num}
                </span>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#000000] border border-[#000000] rounded-full px-4 py-2 hover:bg-[#000000] hover:text-white transition-all duration-300 shrink-0"
                >
                  Learn More
                </Link>
              </div>

              {/* Right — content */}
              <div>
                <h3
                  className="font-bold text-[#000000] tracking-tight leading-[0.95] mb-6"
                  style={{ fontSize: "clamp(40px, 5vw, 76px)" }}
                >
                  {s.title}
                </h3>
                <p className="text-[#6b6b6b] text-base leading-relaxed max-w-xl mb-8 font-light">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {s.tags.map((t) => (
                    <span key={t} className="text-xs font-medium text-[#6b6b6b] border border-[#e5e3de] rounded-full px-3 py-1.5">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Project images */}
                <div className="grid grid-cols-2 gap-3">
                  {s.images.map((img, j) => (
                    <div key={j} className="relative overflow-hidden rounded-sm aspect-[4/3] bg-[#f0ede8]">
                      <Image
                        src={img}
                        alt={`${s.title} project ${j + 1}`}
                        fill
                        className="object-cover hover:scale-[1.04] transition-transform duration-700"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </RevealOnScroll>
      ))}
    </section>
  );
}
