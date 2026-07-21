import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    title: "Rishaba Industries",
    type: "Brand Identity",
    year: "2024",
    image: "/projects/rishaba.png",
    bg: "#f0ddc7",
  },
  {
    num: "02",
    title: "Kinderlogica",
    type: "Brand Identity",
    year: "2024",
    image: "/projects/kinderlogica.png",
    bg: "#9ee2d2",
  },
  {
    num: "03",
    title: "Mustang",
    type: "Brand Identity",
    year: "2023",
    image: "/projects/mustang.png",
    bg: "#ffefd6",
  },
  {
    num: "04",
    title: "Megasoft",
    type: "Brand & Web",
    year: "2024",
    image: "/projects/megasoft.png",
    bg: "#f0ddc7",
  },
  {
    num: "05",
    title: "Indu Memorial",
    type: "Brand Identity",
    year: "2023",
    image: "/projects/indu.png",
    bg: "#e4caca",
  },
  {
    num: "06",
    title: "Sarang Archibuild",
    type: "Brand Identity",
    year: "2023",
    image: "/projects/sarang.png",
    bg: "#ffefd6",
  },
];

export default function FeaturedWork() {
  return (
    <section className="px-8 md:px-14 xl:px-20 pt-24 pb-32" style={{ borderTop: "1px solid rgba(45,46,56,0.1)" }}>

      {/* Header */}
      <div className="flex items-center justify-between mb-16">
        <h2
          className="font-black uppercase tracking-wide text-[#2d2e38]"
          style={{ fontSize: "clamp(13px, 1.2vw, 15.6px)", letterSpacing: "0.2em", fontFamily: "var(--font-geist-sans), 'Geist', system-ui, sans-serif" }}
        >
          Selected Work
        </h2>
        <Link
          href="/work"
          className="text-xs font-medium uppercase tracking-[0.2em] text-[rgba(45,46,56,0.4)] hover:text-[#2d2e38] transition-colors"
        >
          All projects →
        </Link>
      </div>

      {/* Row 1: two projects side by side, 60/40 split */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-3">
        <Link href="/work" className="group md:col-span-3 block">
          <div className="relative aspect-[4/3] overflow-hidden" style={{ background: projects[0].bg }}>
            <Image
              src={projects[0].image}
              alt={projects[0].title}
              fill
              className="object-cover img-scale"
              sizes="(max-width:768px) 100vw, 60vw"
            />
          </div>
          <div className="flex items-start justify-between pt-4">
            <div>
              <p className="text-[rgba(45,46,56,0.3)] text-xs mb-1">{projects[0].num}</p>
              <p className="text-[#2d2e38] text-lg font-semibold" style={{ fontFamily: "var(--font-serif), 'IBM Plex Serif', Georgia, serif" }}>{projects[0].title}</p>
            </div>
            <span className="text-[rgba(45,46,56,0.4)] text-xs mt-1">{projects[0].type}</span>
          </div>
        </Link>

        <Link href="/work" className="group md:col-span-2 block">
          <div className="relative aspect-[4/3] overflow-hidden" style={{ background: projects[1].bg }}>
            <Image
              src={projects[1].image}
              alt={projects[1].title}
              fill
              className="object-cover img-scale"
              sizes="(max-width:768px) 100vw, 40vw"
            />
          </div>
          <div className="flex items-start justify-between pt-4">
            <div>
              <p className="text-[rgba(45,46,56,0.3)] text-xs mb-1">{projects[1].num}</p>
              <p className="text-[#2d2e38] text-lg font-semibold" style={{ fontFamily: "var(--font-serif), 'IBM Plex Serif', Georgia, serif" }}>{projects[1].title}</p>
            </div>
            <span className="text-[rgba(45,46,56,0.4)] text-xs mt-1">{projects[1].type}</span>
          </div>
        </Link>
      </div>

      {/* Row 2: three equal cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
        {projects.slice(2, 5).map((p) => (
          <Link key={p.title} href="/work" className="group block">
            <div className="relative aspect-[4/3] overflow-hidden" style={{ background: p.bg }}>
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover img-scale"
                sizes="(max-width:768px) 100vw, 33vw"
              />
            </div>
            <div className="flex items-start justify-between pt-4">
              <div>
                <p className="text-[rgba(45,46,56,0.3)] text-xs mb-1">{p.num}</p>
                <p className="text-[#2d2e38] text-lg font-semibold" style={{ fontFamily: "var(--font-serif), 'IBM Plex Serif', Georgia, serif" }}>{p.title}</p>
              </div>
              <span className="text-[rgba(45,46,56,0.4)] text-xs mt-1">{p.type}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Row 3: one wide + CTA card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Link href="/work" className="group block">
          <div className="relative aspect-[16/9] overflow-hidden" style={{ background: projects[5].bg }}>
            <Image
              src={projects[5].image}
              alt={projects[5].title}
              fill
              className="object-cover img-scale"
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>
          <div className="flex items-start justify-between pt-4">
            <div>
              <p className="text-[rgba(45,46,56,0.3)] text-xs mb-1">{projects[5].num}</p>
              <p className="text-[#2d2e38] text-lg font-semibold" style={{ fontFamily: "var(--font-serif), 'IBM Plex Serif', Georgia, serif" }}>{projects[5].title}</p>
            </div>
            <span className="text-[rgba(45,46,56,0.4)] text-xs mt-1">{projects[5].type}</span>
          </div>
        </Link>
        {/* CTA card */}
        <Link
          href="/work"
          className="group flex items-center justify-center border border-[rgba(45,46,56,0.1)] hover:border-[rgba(45,46,56,0.3)] transition-colors aspect-[16/9]"
        >
          <div className="text-center">
            <p className="text-[rgba(45,46,56,0.35)] text-sm mb-3 group-hover:text-[rgba(45,46,56,0.6)] transition-colors">See all projects</p>
            <p
              className="font-display font-black uppercase text-[#2d2e38] group-hover:text-[#fa9173] transition-colors"
              style={{ fontSize: "clamp(40px, 5vw, 72px)", fontFamily: "var(--font-display), 'Barlow Condensed', Arial, sans-serif" }}
            >
              50+ →
            </p>
          </div>
        </Link>
      </div>

    </section>
  );
}
