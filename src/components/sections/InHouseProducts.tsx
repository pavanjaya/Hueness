import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "JustLog",
    tagline: "Simple, powerful logging for developers",
    status: "Live",
    href: "/products/justlog",
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  },
  {
    name: "Paintora",
    tagline: "AI-powered creative canvas for everyone",
    status: "Beta",
    href: "/products/paintora",
    accent: "#7c3aed",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
  },
  {
    name: "Howztrip",
    tagline: "Smart travel planning, beautifully designed",
    status: "Coming Soon",
    href: "/products/howztrip",
    accent: "#16a34a",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80",
  },
  {
    name: "Groomré",
    tagline: "AI facial hair recommendations for modern men",
    status: "Live",
    href: "/products/groomre",
    accent: "#c2410c",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
  },
];

export default function InHouseProducts() {
  return (
    <section className="py-24 md:py-32">
      <div className="px-8 md:px-14 xl:px-20">
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6b6b6b] mb-4">Hueness Labs</p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#000000] tracking-tight leading-[0.95] max-w-3xl">
            Products built from our own design & engineering depth.
          </h2>
          <p className="text-[#6b6b6b] mt-4 max-w-lg leading-relaxed">
            From developer tools to AI-powered experiences — Hueness Labs is where our best thinking ships as real products, used by real people.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className="group relative rounded-sm overflow-hidden min-h-[320px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200"
            >
              {/* Background image */}
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors" />

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                <div className="flex items-start justify-between">
                  <span
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: `${p.accent}30`, color: p.accent, border: `1px solid ${p.accent}50` }}
                  >
                    {p.status}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-white/30 group-hover:text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
                  <p className="text-sm text-white/60 leading-snug">{p.tagline}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-[#000000] font-medium hover:text-[#000000] transition-colors"
          >
            Explore all products <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
