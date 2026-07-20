import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const posts = [
  {
    title: "Why Good Design is the Best Business Strategy",
    tag: "Design",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    href: "/blog",
    bg: "#f0ddc7",
  },
  {
    title: "AI in UX: Friend, Not Replacement",
    tag: "Tech",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    href: "/blog",
    bg: "#9ee2d2",
  },
  {
    title: "What Makes a Brand Identity Truly Global?",
    tag: "Branding",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
    href: "/blog",
    bg: "#ffefd6",
  },
];

export default function InsightsSection() {
  return (
    <section
      className="px-6 xl:px-10 py-24 md:py-32"
      style={{ borderTop: "1px solid rgba(45,46,56,0.1)" }}
    >
      {/* Header */}
      <RevealOnScroll>
        <div className="flex items-end justify-between mb-14">
          <h2
            className="font-display font-black uppercase text-[#2d2e38] tracking-tight leading-[0.9]"
            style={{
              fontSize: "clamp(56px,7.5vw,112px)",
              fontFamily: "var(--font-display), 'Barlow Condensed', Arial, sans-serif",
            }}
          >
            Insights
          </h2>
          <Link
            href="/blog"
            className="hidden md:inline-flex text-sm font-medium text-[rgba(45,46,56,0.4)] hover:text-[#2d2e38] transition-colors mb-2"
          >
            Read all →
          </Link>
        </div>
      </RevealOnScroll>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <RevealOnScroll key={post.title} delay={i * 80}>
            <Link href={post.href} className="group block">
              <div className="relative overflow-hidden aspect-[4/3] mb-5" style={{ background: post.bg }}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover img-scale opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="flex items-center gap-3 text-[rgba(45,46,56,0.35)] text-xs mb-3">
                <span>{post.readTime}</span>
                <span>·</span>
                <span>{post.tag}</span>
              </div>
              <p
                className="text-[#2d2e38] text-xl leading-snug group-hover:text-[#fa9173] transition-colors duration-300"
                style={{ fontFamily: "var(--font-serif), 'IBM Plex Serif', Georgia, serif", fontWeight: 500 }}
              >
                {post.title}
              </p>
            </Link>
          </RevealOnScroll>
        ))}
      </div>

      <div className="mt-10 md:hidden">
        <Link href="/blog" className="text-sm font-medium text-[rgba(45,46,56,0.4)] hover:text-[#2d2e38] transition-colors">
          Read all →
        </Link>
      </div>
    </section>
  );
}
