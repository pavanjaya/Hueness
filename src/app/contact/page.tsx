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
          <p className="text-xs font-semibold uppercase tracking-widest text-[#000000] mb-6">Get In Touch</p>
          <h1 className="text-5xl md:text-6xl font-bold text-[#000000] tracking-tight leading-tight mb-8">
            Got an idea? Let&apos;s cultivate it together.
          </h1>
          <p className="text-[#6b6b6b] text-lg leading-relaxed mb-12">
            Whether you need a brand identity, a digital product, or a full go-to-market strategy — we&apos;re a message away.
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6b6b6b] mb-1">Email</p>
              <a href="mailto:hello@hueness.com" className="text-[#000000] font-medium hover:text-[#000000] transition-colors">
                hello@hueness.com
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6b6b6b] mb-1">Phone</p>
              <a href="tel:+919322135422" className="text-[#000000] font-medium hover:text-[#000000] transition-colors block">
                +91 93221 35422
              </a>
              <a href="tel:+919764822444" className="text-[#000000] font-medium hover:text-[#000000] transition-colors block mt-1">
                +91 97648 22444
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6b6b6b] mb-1">Studios</p>
              <p className="text-[#000000] font-medium">Bangalore, Karnataka</p>
              <p className="text-[#000000] font-medium mt-1">Nashik, Maharashtra</p>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="bg-white rounded-sm p-8 md:p-12 border ">
          <h2 className="text-2xl font-bold text-[#000000] mb-8">Start a conversation</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-[#6b6b6b] block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full border  rounded-sm px-4 py-3 text-[#000000] placeholder-[#9a9a9a] focus:outline-none focus:border-[#000000] transition-colors text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-[#6b6b6b] block mb-2">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Acme Inc."
                  className="w-full border  rounded-sm px-4 py-3 text-[#000000] placeholder-[#9a9a9a] focus:outline-none focus:border-[#000000] transition-colors text-sm"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-[#6b6b6b] block mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="jane@company.com"
                className="w-full border  rounded-sm px-4 py-3 text-[#000000] placeholder-[#9a9a9a] focus:outline-none focus:border-[#000000] transition-colors text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-[#6b6b6b] block mb-2">
                What can we help with?
              </label>
              <div className="flex flex-wrap gap-2">
                {["Design", "Tech", "Marketing", "Products", "Other"].map((v) => (
                  <button
                    key={v}
                    type="button"
                    className="text-sm px-4 py-2 rounded-full border  text-[#6b6b6b] hover:border-[#000000] hover:text-[#000000] transition-colors"
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-[#6b6b6b] block mb-2">
                Tell us about your project
              </label>
              <textarea
                rows={4}
                placeholder="Describe your project, goals, and timeline..."
                className="w-full border  rounded-sm px-4 py-3 text-[#000000] placeholder-[#9a9a9a] focus:outline-none focus:border-[#000000] transition-colors text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#000000] text-white font-semibold py-4 rounded-full hover:bg-[#000000] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
