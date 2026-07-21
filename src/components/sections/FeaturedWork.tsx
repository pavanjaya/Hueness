import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Rishaba Industries",
    type: "Brand Identity",
    year: "2024",
    image: "/projects/rishaba.png",
    bg: "#f0ddc7",
  },
  {
    title: "Kinderlogica",
    type: "Brand Identity",
    year: "2024",
    image: "/projects/kinderlogica.png",
    bg: "#9ee2d2",
  },
  {
    title: "Mustang",
    type: "Brand Identity",
    year: "2023",
    image: "/projects/mustang.png",
    bg: "#ffefd6",
  },
  {
    title: "Megasoft",
    type: "Brand & Web",
    year: "2024",
    image: "/projects/megasoft.png",
    bg: "#f0ddc7",
  },
  {
    title: "Indu Memorial",
    type: "Brand Identity",
    year: "2023",
    image: "/projects/indu.png",
    bg: "#e4caca",
  },
  {
    title: "Sarang Archibuild",
    type: "Brand Identity",
    year: "2023",
    image: "/projects/sarang.png",
    bg: "#ffefd6",
  },
];

function Card({ p, className = "" }: { p: typeof projects[0]; className?: string }) {
  return (
    <Link href="/work" className={`group relative overflow-hidden block ${className}`} style={{ background: p.bg }}>
      <Image
        src={p.image}
        alt={p.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="50vw"
      />
      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-[#2d2e38] font-bold text-base leading-tight" style={{ fontFamily: "var(--font-geist-sans), 'Geist', system-ui, sans-serif" }}>
          {p.title}
        </p>
        <p className="text-[rgba(45,46,56,0.5)] text-xs mt-0.5">{p.type}</p>
      </div>
    </Link>
  );
}

export default function FeaturedWork() {
  return (
    <section style={{ borderTop: "1px solid rgba(45,46,56,0.1)" }}>

      {/* Header */}
      <div className="flex items-center justify-between px-8 md:px-14 xl:px-20 pt-16 pb-8">
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

      {/* Grid */}
      <div className="px-8 md:px-14 xl:px-20 pb-20">

        {/* Row 1: 2 big + 2 small */}
        <div className="grid grid-cols-6 gap-3 mb-3">
          {/* Big card 1 */}
          <div className="col-span-2 relative" style={{ aspectRatio: "4/3" }}>
            <Card p={projects[0]} className="absolute inset-0" />
          </div>
          {/* Big card 2 */}
          <div className="col-span-2 relative" style={{ aspectRatio: "4/3" }}>
            <Card p={projects[1]} className="absolute inset-0" />
          </div>
          {/* 2 small cards stacked */}
          <div className="col-span-2 grid grid-rows-2 gap-3">
            <div className="relative" style={{ aspectRatio: "auto" }}>
              <Card p={projects[2]} className="h-full min-h-[140px]" />
            </div>
            <div className="relative">
              <Card p={projects[3]} className="h-full min-h-[140px]" />
            </div>
          </div>
        </div>

        {/* Row 2: 1 large + 1 small + 1 wide large */}
        <div className="grid grid-cols-6 gap-3">
          {/* Large tall */}
          <div className="col-span-2 relative" style={{ aspectRatio: "3/4" }}>
            <Card p={projects[4]} className="absolute inset-0" />
          </div>
          {/* Small */}
          <div className="relative" style={{ aspectRatio: "auto" }}>
            <Card p={projects[5]} className="h-full" />
          </div>
          {/* Wide large CTA */}
          <Link
            href="/work"
            className="col-span-3 group flex items-center justify-center relative overflow-hidden"
            style={{ background: "#f5f0e8", minHeight: "200px" }}
          >
            <div className="text-center">
              <p className="text-[rgba(45,46,56,0.35)] text-xs uppercase tracking-[0.2em] mb-3">See all projects</p>
              <p
                className="font-black text-[#2d2e38] group-hover:text-[#fa9173] transition-colors leading-none"
                style={{ fontSize: "clamp(56px, 7vw, 100px)", fontFamily: "var(--font-geist-sans), 'Geist', system-ui, sans-serif" }}
              >
                50+
              </p>
              <p className="text-[#fa9173] text-2xl mt-2">→</p>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
