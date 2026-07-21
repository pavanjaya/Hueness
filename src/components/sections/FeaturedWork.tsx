import Link from "next/link";
import Image from "next/image";

const GAP = 16;

const row1 = [
  { title: "Rishaba Industries", desc: "Brand identity for an industrial manufacturing leader", image: "/projects/rishaba.png", bg: "#f0ddc7", size: "large" },
  { title: "The Bake Studio",    desc: "Brand identity & packaging for a premium bakery brand", image: "/projects/bakestudio.png", bg: "#1a1a1a", size: "large" },
  { title: "Mustang",            desc: "Brand identity for a premium lifestyle brand", image: "/projects/mustang.png", bg: "#ffefd6", size: "small" },
  { title: "Megasoft",           desc: "Brand & web for a cutting-edge technology company", image: "/projects/megasoft.png", bg: "#f0ddc7", size: "small" },
];

const row2 = [
  { title: "Indu Memorial",     desc: "Brand identity for a trusted healthcare institution", image: "/projects/indu.png", bg: "#e4caca", size: "large" },
  { title: "Sarang Archibuild", desc: "Brand identity for a premium architecture firm", image: "/projects/sarang.png", bg: "#ffefd6", size: "small" },
  { title: "See all projects →", desc: "50+ brands built across design, tech and marketing", image: "", bg: "#2d2e38", size: "wide", cta: true },
];

type Project = { title: string; desc: string; image: string; bg: string; size: string; cta?: boolean };

function Card({ p, imgHeight }: { p: Project; imgHeight: number }) {
  const radius = 0;
  const inner = (
    <>
      {/* Image box */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: imgHeight, borderRadius: radius, background: p.bg, flexShrink: 0 }}
      >
        {p.image ? (
          <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="40vw" />
        ) : (
          /* CTA card inner */
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
            <p className="text-[rgba(255,254,249,0.4)] text-xs uppercase tracking-[0.2em] mb-4" style={{ fontFamily: "var(--font-geist-sans)" }}>See all projects</p>
            <p className="font-black text-[#fffef9] leading-none group-hover:text-[#fa9173] transition-colors" style={{ fontSize: "clamp(48px, 6vw, 88px)", fontFamily: "var(--font-geist-sans)" }}>50+</p>
            <p className="text-[#fa9173] text-xl mt-3">→</p>
          </div>
        )}
      </div>
      {/* Text below */}
      <div className="pt-4">
        <p className="font-normal text-[#2d2e38] leading-snug" style={{ fontSize: p.size === "large" ? "clamp(20px, 1.8vw, 26px)" : "clamp(16px, 1.4vw, 20px)", fontFamily: "var(--font-geist-sans)" }}>
          {p.title}
        </p>
        <p className="text-[rgba(45,46,56,0.5)] mt-1" style={{ fontSize: "clamp(11px, 0.9vw, 13px)", fontFamily: "var(--font-geist-sans)" }}>
          {p.desc}
        </p>
      </div>
    </>
  );

  return (
    <Link href="/work" className="group flex flex-col" style={{ flex: p.size === "large" ? "320" : p.size === "wide" ? "546" : "207" }}>
      {inner}
    </Link>
  );
}

export default function FeaturedWork() {
  return (
    <section style={{ borderTop: "1px solid rgba(45,46,56,0.1)" }}>

      {/* Header */}
      <div className="flex items-center justify-between px-8 md:px-14 xl:px-20 pt-16 pb-10">
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

      <div className="px-8 md:px-14 xl:px-20 pb-24" style={{ display: "flex", flexDirection: "column", gap: GAP * 3 }}>

        {/* Row 1: 2 tall + 2 small */}
        <div style={{ display: "flex", gap: GAP, alignItems: "flex-start" }}>
          {row1.map((p) => (
            <Card key={p.title} p={p} imgHeight={p.size === "large" ? 520 : 280} />
          ))}
        </div>

        {/* Row 2: 1 tall + 1 small + 1 wide */}
        <div style={{ display: "flex", gap: GAP, alignItems: "flex-start" }}>
          {row2.filter(p => !p.cta).map((p) => (
            <Card key={p.title} p={p} imgHeight={p.size === "large" ? 520 : p.size === "wide" ? 520 : 280} />
          ))}
        </div>

        {/* CTA pill */}
        <div className="flex justify-center pt-4">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2d2e38] px-8 py-4 hover:bg-[rgba(45,46,56,0.06)] transition-colors"
            style={{ borderRadius: "50px", border: "1px solid rgba(45,46,56,0.18)" }}
          >
            See All Projects
          </Link>
        </div>

      </div>
    </section>
  );
}
