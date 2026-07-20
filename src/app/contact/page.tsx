import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Hueness. Bangalore & Nashik based design studio.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="px-6 xl:px-10 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#fa9173] mb-6">Get In Touch</p>
          <h1
            className="font-black uppercase text-[#2d2e38] tracking-tight leading-[0.88] mb-8"
            style={{ fontSize: "clamp(52px,7vw,110px)", fontFamily: "var(--font-display),'Barlow Condensed',Arial,sans-serif" }}
          >
            Got an idea? Let&apos;s cultivate it together.
          </h1>
          <p className="text-[rgba(45,46,56,0.55)] text-lg leading-relaxed mb-12" style={{ fontFamily: "var(--font-serif),'IBM Plex Serif',Georgia,serif", fontStyle: "italic" }}>
            Whether you need a brand identity, a digital product, or a full go-to-market strategy — we&apos;re a message away.
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[rgba(45,46,56,0.4)] mb-1">Email</p>
              <a href="mailto:hello@hueness.com" className="text-[#2d2e38] font-medium hover:text-[#fa9173] transition-colors">
                hello@hueness.com
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[rgba(45,46,56,0.4)] mb-1">Phone</p>
              <a href="tel:+919322135422" className="text-[#2d2e38] font-medium hover:text-[#fa9173] transition-colors block">
                +91 93221 35422
              </a>
              <a href="tel:+919764822444" className="text-[#2d2e38] font-medium hover:text-[#fa9173] transition-colors block mt-1">
                +91 97648 22444
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[rgba(45,46,56,0.4)] mb-1">Studios</p>
              <p className="text-[#2d2e38] font-medium">Bangalore, Karnataka</p>
              <p className="text-[#2d2e38] font-medium mt-1">Nashik, Maharashtra</p>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="bg-[#fffef9] p-8 md:p-12" style={{ border: "1px solid rgba(45,46,56,0.1)" }}>
          <h2
            className="text-2xl font-bold text-[#2d2e38] mb-8"
            style={{ fontFamily: "var(--font-serif),'IBM Plex Serif',Georgia,serif" }}
          >
            Start a conversation
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-[rgba(45,46,56,0.45)] block mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 text-[#2d2e38] placeholder-[rgba(45,46,56,0.3)] focus:outline-none transition-colors text-sm bg-transparent"
                  style={{ border: "1px solid rgba(45,46,56,0.15)", borderRadius: "4px" }}
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-[rgba(45,46,56,0.45)] block mb-2">Company</label>
                <input
                  type="text"
                  placeholder="Acme Inc."
                  className="w-full px-4 py-3 text-[#2d2e38] placeholder-[rgba(45,46,56,0.3)] focus:outline-none transition-colors text-sm bg-transparent"
                  style={{ border: "1px solid rgba(45,46,56,0.15)", borderRadius: "4px" }}
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-[rgba(45,46,56,0.45)] block mb-2">Email</label>
              <input
                type="email"
                placeholder="jane@company.com"
                className="w-full px-4 py-3 text-[#2d2e38] placeholder-[rgba(45,46,56,0.3)] focus:outline-none transition-colors text-sm bg-transparent"
                style={{ border: "1px solid rgba(45,46,56,0.15)", borderRadius: "4px" }}
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-[rgba(45,46,56,0.45)] block mb-2">What can we help with?</label>
              <div className="flex flex-wrap gap-2">
                {["Design", "Tech", "Marketing", "Products", "Other"].map((v) => (
                  <button
                    key={v}
                    type="button"
                    className="text-sm px-4 py-2 text-[rgba(45,46,56,0.55)] hover:border-[#fa9173] hover:text-[#fa9173] transition-colors"
                    style={{ border: "1px solid rgba(45,46,56,0.2)", borderRadius: "50px" }}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-[rgba(45,46,56,0.45)] block mb-2">Tell us about your project</label>
              <textarea
                rows={4}
                placeholder="Describe your project, goals, and timeline..."
                className="w-full px-4 py-3 text-[#2d2e38] placeholder-[rgba(45,46,56,0.3)] focus:outline-none transition-colors text-sm resize-none bg-transparent"
                style={{ border: "1px solid rgba(45,46,56,0.15)", borderRadius: "4px" }}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#fa9173] text-[#fffef9] font-semibold py-4 hover:opacity-90 transition-opacity"
              style={{ borderRadius: "50px" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
