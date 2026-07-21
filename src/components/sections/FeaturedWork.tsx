import Link from "next/link";
import Image from "next/image";

const projects = [
  { title: "Rishaba Industries", type: "Brand Identity", image: "/projects/rishaba.png", bg: "#f0ddc7" },
  { title: "Kinderlogica",       type: "Brand Identity", image: "/projects/kinderlogica.png", bg: "#9ee2d2" },
  { title: "Mustang",            type: "Brand Identity", image: "/projects/mustang.png", bg: "#ffefd6" },
  { title: "Megasoft",           type: "Brand & Web",    image: "/projects/megasoft.png", bg: "#f0ddc7" },
  { title: "Indu Memorial",      type: "Brand Identity", image: "/projects/indu.png", bg: "#e4caca" },
  { title: "Sarang Archibuild",  type: "Brand Identity", image: "/projects/sarang.png", bg: "#ffefd6" },
];

function Card({ p, style = {} }: { p: typeof projects[0]; style?: React.CSSProperties }) {
  return (
    <Link
      href="/work"
      className="group relative overflow-hidden block flex-shrink-0"
      style={{ background: p.bg, ...style }}
    >
      <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="40vw" />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white font-bold text-sm leading-tight">{p.title}</p>
        <p className="text-white/60 text-xs mt-0.5">{p.type}</p>
      </div>
      {/* Always-visible label */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-[#2d2e38] font-semibold text-sm leading-tight">{p.title}</p>
        <p className="text-[rgba(45,46,56,0.5)] text-xs mt-0.5">{p.type}</p>
      </div>
    </Link>
  );
}

export default function FeaturedWork() {
  const ROW1 = 380;
  const ROW2 = 460;
  const GAP = 10;

  return (
    <section style={{ borderTop: "1px solid rgba(45,46,56,0.1)" }}>

      {/* Header */}
      <div className="flex items-center justify-between px-8 md:px-14 xl:px-20 pt-16 pb-8">
        <h2
          className="font-black uppercase text-[#2d2e38]"
          style={{ fontSize: "clamp(13px, 1.2vw, 15.6px)", letterSpacing: "0.2em", fontFamily: "var(--font-geist-sans), 'Geist', system-ui, sans-serif" }}
        >
          Selected Work
        </h2>
        <Link href="/work" className="text-xs font-medium uppercase tracking-[0.2em] text-[rgba(45,46,56,0.4)] hover:text-[#2d2e38] transition-colors">
          All projects →
        </Link>
      </div>

      <div className="px-8 md:px-14 xl:px-20 pb-20" style={{ display: "flex", flexDirection: "column", gap: GAP }}>

        {/* Row 1: 2 big + 2 small stacked */}
        <div style={{ display: "flex", gap: GAP, height: ROW1 }}>
          {/* Big card 1 */}
          <Card p={projects[0]} style={{ flex: 2 }} />
          {/* Big card 2 */}
          <Card p={projects[1]} style={{ flex: 2 }} />
          {/* 2 small stacked */}
          <div style={{ flex: 1.2, display: "flex", flexDirection: "column", gap: GAP }}>
            <Card p={projects[2]} style={{ flex: 1 }} />
            <Card p={projects[3]} style={{ flex: 1 }} />
          </div>
        </div>

        {/* Row 2: 1 tall + 1 small + 1 wide */}
        <div style={{ display: "flex", gap: GAP, height: ROW2 }}>
          {/* Tall large */}
          <Card p={projects[4]} style={{ flex: 1.5 }} />
          {/* Small */}
          <Card p={projects[5]} style={{ flex: 1 }} />
          {/* Wide CTA */}
          <Link
            href="/work"
            className="group relative overflow-hidden flex items-center justify-center"
            style={{ flex: 2, background: "#f5f0e8" }}
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
