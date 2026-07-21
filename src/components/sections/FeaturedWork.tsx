"use client";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "W / 01",
    title: "Rishaba Industries",
    type: "Brand Identity",
    year: "2024",
    image: "/projects/rishaba.png",
    bg: "#f0ddc7",
  },
  {
    num: "W / 02",
    title: "Kinderlogica",
    type: "Brand Identity",
    year: "2024",
    image: "/projects/kinderlogica.png",
    bg: "#9ee2d2",
  },
  {
    num: "W / 03",
    title: "Mustang",
    type: "Brand Identity",
    year: "2023",
    image: "/projects/mustang.png",
    bg: "#ffefd6",
  },
  {
    num: "W / 04",
    title: "Megasoft",
    type: "Brand & Web",
    year: "2024",
    image: "/projects/megasoft.png",
    bg: "#f0ddc7",
  },
  {
    num: "W / 05",
    title: "Indu Memorial",
    type: "Brand Identity",
    year: "2023",
    image: "/projects/indu.png",
    bg: "#e4caca",
  },
  {
    num: "W / 06",
    title: "Sarang Archibuild",
    type: "Brand Identity",
    year: "2023",
    image: "/projects/sarang.png",
    bg: "#ffefd6",
  },
];

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

      {/* Horizontal scroll track */}
      <div
        className="flex overflow-x-auto gap-1 pb-0"
        style={{ scrollSnapType: "x mandatory", msOverflowStyle: "none", scrollbarWidth: "none" }}
      >
        {projects.map((p) => (
          <Link
            key={p.title}
            href="/work"
            className="group relative shrink-0 overflow-hidden"
            style={{
              width: "clamp(280px, 33vw, 520px)",
              aspectRatio: "3/4",
              background: p.bg,
              scrollSnapAlign: "start",
            }}
          >
            {/* Image */}
            <Image
              src={p.image}
              alt={p.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="33vw"
            />

            {/* Overlay on hover */}
            <div
              className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }}
            >
              <span className="text-[rgba(255,255,255,0.6)] text-[10px] font-bold uppercase tracking-[0.2em] mb-1">{p.num}</span>
              <p className="text-white font-bold leading-tight" style={{ fontSize: "clamp(20px, 2vw, 28px)", fontFamily: "var(--font-geist-sans), 'Geist', system-ui, sans-serif" }}>
                {p.title}
              </p>
              <span className="text-[rgba(255,255,255,0.55)] text-xs uppercase tracking-[0.15em] mt-1">{p.type}</span>
            </div>
          </Link>
        ))}

        {/* CTA card */}
        <Link
          href="/work"
          className="group relative shrink-0 overflow-hidden flex items-center justify-center"
          style={{
            width: "clamp(200px, 22vw, 340px)",
            aspectRatio: "3/4",
            background: "#f5f0e8",
            scrollSnapAlign: "start",
          }}
        >
          <div className="text-center px-8">
            <p className="text-[rgba(45,46,56,0.35)] text-xs uppercase tracking-[0.2em] mb-4">See all projects</p>
            <p
              className="font-black text-[#2d2e38] group-hover:text-[#fa9173] transition-colors leading-none"
              style={{ fontSize: "clamp(48px, 6vw, 88px)", fontFamily: "var(--font-geist-sans), 'Geist', system-ui, sans-serif" }}
            >
              50+
            </p>
            <p className="text-[#fa9173] text-2xl mt-2">→</p>
          </div>
        </Link>
      </div>

    </section>
  );
}
