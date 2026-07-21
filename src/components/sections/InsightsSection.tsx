import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const posts = [
  {
    title: "Why Good Design is the Best Business Strategy",
    source: "Hueness Blog",
    date: "Jun 2025",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    href: "/blog",
  },
  {
    title: "AI in UX: Friend, Not Replacement",
    source: "Hueness Blog",
    date: "May 2025",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    href: "/blog",
  },
  {
    title: "What Makes a Brand Identity Truly Global?",
    source: "Hueness Blog",
    date: "Apr 2025",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
    href: "/blog",
  },
];

export default function InsightsSection() {
  return (
    <section className="px-8 md:px-14 xl:px-20 py-20 md:py-28">

      {/* Header row */}
      <RevealOnScroll>
        <div className="flex items-center justify-between mb-10">
          <h2
            className="font-black uppercase text-[#2d2e38] tracking-wider text-sm"
            style={{ letterSpacing: "0.12em" }}
          >
            Featured Insights
          </h2>
          <Link
            href="/blog"
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2d2e38] px-5 py-2.5 hover:bg-[rgba(45,46,56,0.08)] transition-colors"
            style={{ borderRadius: "50px", border: "1px solid rgba(45,46,56,0.18)" }}
          >
            See All Insights
          </Link>
        </div>
      </RevealOnScroll>

      {/* 3-column card grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {posts.map((post, i) => (
          <RevealOnScroll key={post.title} delay={i * 80}>
            <Link href={post.href} className="group block">
              {/* Image */}
              <div className="relative overflow-hidden mb-5" style={{ aspectRatio: "3/2" }}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Title */}
              <p
                className="text-[#2d2e38] text-xl leading-snug mb-4 group-hover:text-[#fa9173] transition-colors duration-300"
                style={{ fontFamily: "var(--font-serif), 'IBM Plex Serif', Georgia, serif", fontWeight: 500 }}
              >
                {post.title}
              </p>
              {/* Meta */}
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2d2e38]">{post.source}</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[rgba(45,46,56,0.4)]">{post.date}</span>
              </div>
            </Link>
          </RevealOnScroll>
        ))}
      </div>

    </section>
  );
}
