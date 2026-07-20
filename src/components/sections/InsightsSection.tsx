import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const posts = [
  {
    title: "Why Good Design is the Best Business Strategy",
    tag: "Design",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    href: "/blog",
  },
  {
    title: "AI in UX: Friend, Not Replacement",
    tag: "Tech",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    href: "/blog",
  },
  {
    title: "What Makes a Brand Identity Truly Global?",
    tag: "Branding",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
    href: "/blog",
  },
];

export default function InsightsSection() {
  return (
    <section
      className="px-6 xl:px-10 py-24 md:py-32"
      style={{ borderTop: "1px solid rgba(12,12,12,0.1)" }}
    >
      {/* Header */}
      <RevealOnScroll>
        <div className="flex items-end justify-between mb-14">
          <h2
            className="font-bold text-[#0c0c0c] tracking-tight leading-[0.93]"
            style={{ fontSize: "clamp(48px,6.5vw,100px)" }}
          >
            Insights
          </h2>
          <Link
            href="/blog"
            className="hidden md:inline-flex text-sm font-medium text-[rgba(12,12,12,0.4)] hover:text-[#0c0c0c] transition-colors mb-2"
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
              <div className="relative overflow-hidden aspect-[4/3] bg-[#e8e5df] mb-5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover img-scale opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="flex items-center gap-3 text-[rgba(12,12,12,0.3)] text-xs mb-3">
                <span>{post.readTime}</span>
                <span>·</span>
                <span>{post.tag}</span>
              </div>
              <p className="text-[#0c0c0c] text-xl font-semibold leading-snug tracking-tight group-hover:text-[rgba(12,12,12,0.6)] transition-colors duration-300">
                {post.title}
              </p>
            </Link>
          </RevealOnScroll>
        ))}
      </div>

      <div className="mt-10 md:hidden">
        <Link href="/blog" className="text-sm font-medium text-[rgba(12,12,12,0.4)] hover:text-[#0c0c0c] transition-colors">
          Read all →
        </Link>
      </div>
    </section>
  );
}
