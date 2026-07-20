import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    title: "Rishaba Industries",
    type: "Brand Identity",
    year: "2024",
    image: "/projects/rishaba.png",
    wide: true,
  },
  {
    num: "02",
    title: "Kinderlogica",
    type: "Brand Identity",
    year: "2024",
    image: "/projects/kinderlogica.png",
    wide: false,
  },
  {
    num: "03",
    title: "Mustang",
    type: "Brand Identity",
    year: "2023",
    image: "/projects/mustang.png",
    wide: false,
  },
  {
    num: "04",
    title: "Megasoft",
    type: "Brand & Web",
    year: "2024",
    image: "/projects/megasoft.png",
    wide: true,
  },
  {
    num: "05",
    title: "Indu Memorial",
    type: "Brand Identity",
    year: "2023",
    image: "/projects/indu.png",
    wide: false,
  },
  {
    num: "06",
    title: "Sarang Archibuild",
    type: "Brand Identity",
    year: "2023",
    image: "/projects/sarang.png",
    wide: false,
  },
];

export default function FeaturedWork() {
  return (
    <section className="px-6 xl:px-10 pt-24 pb-32" style={{ borderTop: "1px solid rgba(12,12,12,0.1)" }}>

      {/* Header */}
      <div className="flex items-center justify-between mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(12,12,12,0.4)]">
          Selected Work
        </h2>
        <Link
          href="/work"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(12,12,12,0.4)] hover:text-[#0c0c0c] transition-colors"
        >
          All projects →
        </Link>
      </div>

      {/* Row 1: two projects side by side, 60/40 split */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-3">
        <Link href="/work" className="group md:col-span-3 block">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e5df]">
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
              <p className="text-[rgba(12,12,12,0.35)] text-xs mb-1">{projects[0].num}</p>
              <p className="text-[#0c0c0c] text-lg font-semibold">{projects[0].title}</p>
            </div>
            <span className="text-[rgba(12,12,12,0.4)] text-xs mt-1">{projects[0].type}</span>
          </div>
        </Link>

        <Link href="/work" className="group md:col-span-2 block">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e5df]">
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
              <p className="text-[rgba(12,12,12,0.35)] text-xs mb-1">{projects[1].num}</p>
              <p className="text-[#0c0c0c] text-lg font-semibold">{projects[1].title}</p>
            </div>
            <span className="text-[rgba(12,12,12,0.4)] text-xs mt-1">{projects[1].type}</span>
          </div>
        </Link>
      </div>

      {/* Row 2: three equal cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
        {projects.slice(2, 5).map((p) => (
          <Link key={p.title} href="/work" className="group block">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e5df]">
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
                <p className="text-[rgba(12,12,12,0.35)] text-xs mb-1">{p.num}</p>
                <p className="text-[#0c0c0c] text-lg font-semibold">{p.title}</p>
              </div>
              <span className="text-[rgba(12,12,12,0.4)] text-xs mt-1">{p.type}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Row 3: one wide */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Link href="/work" className="group block">
          <div className="relative aspect-[16/9] overflow-hidden bg-[#e8e5df]">
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
              <p className="text-[rgba(12,12,12,0.35)] text-xs mb-1">{projects[5].num}</p>
              <p className="text-[#0c0c0c] text-lg font-semibold">{projects[5].title}</p>
            </div>
            <span className="text-[rgba(12,12,12,0.4)] text-xs mt-1">{projects[5].type}</span>
          </div>
        </Link>
        {/* CTA card */}
        <Link
          href="/work"
          className="group flex items-center justify-center border border-[rgba(12,12,12,0.08)] hover:border-[rgba(12,12,12,0.25)] transition-colors aspect-[16/9]"
        >
          <div className="text-center">
            <p className="text-[rgba(12,12,12,0.35)] text-sm mb-3 group-hover:text-[rgba(12,12,12,0.6)] transition-colors">See all projects</p>
            <p className="text-[#0c0c0c] text-3xl font-bold group-hover:opacity-70 transition-opacity">50+ →</p>
          </div>
        </Link>
      </div>

    </section>
  );
}
