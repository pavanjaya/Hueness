import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on design, tech, branding, and business from the Hueness studio.",
};

const posts = [
  { title: "Why Good Design is the Best Business Strategy", date: "March 2025", tag: "Design", readTime: "5 min" },
  { title: "The Hue Spot: Where Strategy Meets Creativity", date: "February 2025", tag: "Brand", readTime: "4 min" },
  { title: "AI in UX: Friend, Not Replacement", date: "January 2025", tag: "Tech", readTime: "6 min" },
  { title: "Building In-House Products as a Design Studio", date: "December 2024", tag: "Products", readTime: "7 min" },
  { title: "DiveIn, Define, Design: Our 3-Step Process", date: "November 2024", tag: "Process", readTime: "4 min" },
  { title: "What Makes a Brand Identity Truly Global?", date: "October 2024", tag: "Design", readTime: "5 min" },
];

export default function BlogPage() {
  return (
    <div className="pt-20">
      <div className="px-8 md:px-14 xl:px-20 py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#fa9173] mb-6">Hue Stream</p>
        <h1
          className="font-black uppercase text-[#2d2e38] tracking-tight leading-[0.88] max-w-3xl mb-8"
          style={{ fontSize: "clamp(56px,8vw,120px)", fontFamily: "var(--font-display),'Barlow Condensed',Arial,sans-serif" }}
        >
          Ideas, insights & stories.
        </h1>
        <p className="text-[rgba(45,46,56,0.55)] text-lg max-w-xl leading-relaxed" style={{ fontFamily: "var(--font-serif),'IBM Plex Serif',Georgia,serif", fontStyle: "italic" }}>
          Thoughts on design, technology, branding, and building products that matter — straight from our studio.
        </p>
      </div>

      <div className="px-8 md:px-14 xl:px-20 pb-24">
        <div style={{ borderTop: "1px solid rgba(45,46,56,0.1)" }}>
          {posts.map((post, i) => (
            <article key={i} className="group py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer -mx-4 px-4 hover:bg-[#f0ddc7] transition-colors" style={{ borderBottom: "1px solid rgba(45,46,56,0.08)" }}>
              <div className="flex items-start gap-6">
                <span className="text-xs font-semibold text-[rgba(45,46,56,0.3)] uppercase tracking-widest pt-1 w-8 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="text-xs font-semibold px-3 py-1 text-[#fa9173] mb-3 inline-block border border-[rgba(250,145,115,0.3)]" style={{ borderRadius: "50px" }}>
                    {post.tag}
                  </span>
                  <h2
                    className="text-xl md:text-2xl font-semibold text-[#2d2e38] group-hover:text-[#2d2e38] transition-colors"
                    style={{ fontFamily: "var(--font-serif),'IBM Plex Serif',Georgia,serif" }}
                  >
                    {post.title}
                  </h2>
                </div>
              </div>
              <div className="flex items-center gap-4 md:gap-8 text-sm text-[rgba(45,46,56,0.4)] pl-14 md:pl-0 shrink-0">
                <span>{post.readTime} read</span>
                <span>{post.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
