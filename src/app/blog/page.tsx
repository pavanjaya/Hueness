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
      <div className="px-6 xl:px-10 py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#000000] mb-6">Hue Stream</p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#000000] tracking-tight leading-tight max-w-3xl mb-8">
          Ideas, insights & stories.
        </h1>
        <p className="text-[#6b6b6b] text-lg max-w-xl leading-relaxed">
          Thoughts on design, technology, branding, and building products that matter — straight from our studio.
        </p>
      </div>

      <div className="px-6 xl:px-10 pb-24">
        <div className="divide-y divide-[#e5e3de]">
          {posts.map((post, i) => (
            <article key={i} className="group py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-white -mx-4 px-4 rounded-sm transition-colors">
              <div className="flex items-start gap-6">
                <span className="text-xs font-semibold text-[#6b6b6b] uppercase tracking-widest pt-1 w-8 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#f0ede8] text-[#6b6b6b] mb-3 inline-block">
                    {post.tag}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-[#000000] group-hover:text-[#000000] transition-colors">
                    {post.title}
                  </h2>
                </div>
              </div>
              <div className="flex items-center gap-4 md:gap-8 text-sm text-[#6b6b6b] pl-14 md:pl-0 shrink-0">
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
