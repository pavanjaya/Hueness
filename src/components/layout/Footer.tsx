import Link from "next/link";

const dim = "rgba(45,46,56,0.25)";
const muted = "rgba(45,46,56,0.45)";

const verticals = [
  { label: "Branding", href: "/design" },
  { label: "Digital Experience", href: "/design" },
  { label: "Technology", href: "/tech" },
  { label: "Products", href: "/tech" },
  { label: "Marketing", href: "/marketing" },
];

const company = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/studio-page" },
  { label: "HueMade", href: "/products" },
  { label: "HueStream", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#fffef9", borderTop: "1px solid rgba(45,46,56,0.08)" }}>
      <div className="px-8 md:px-14 xl:px-20 py-20 md:py-28">

        {/* Outer: left col (logo + illustration) | right col (nav + contact) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">

          {/* Left — logo + illustration, spans full height */}
          <div className="md:col-span-1 flex flex-col justify-between pr-12 pb-16 md:pb-0">
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/hueness-logo.svg" alt="Hueness" width={120} height={25} />
            </Link>
            <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-12 w-28 opacity-70">
              <rect x="20" y="20" width="80" height="60" rx="4" stroke="#2d2e38" strokeWidth="2"/>
              <rect x="30" y="30" width="60" height="40" rx="2" fill="rgba(45,46,56,0.06)" stroke="#2d2e38" strokeWidth="1.5"/>
              <line x1="60" y1="80" x2="60" y2="100" stroke="#2d2e38" strokeWidth="2"/>
              <line x1="40" y1="100" x2="80" y2="100" stroke="#2d2e38" strokeWidth="2"/>
              <circle cx="60" cy="118" r="8" stroke="#2d2e38" strokeWidth="1.5"/>
              <path d="M52 128 Q60 140 68 128" stroke="#2d2e38" strokeWidth="1.5" fill="none"/>
              <path d="M52 132 L38 145" stroke="#2d2e38" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M68 132 L82 145" stroke="#2d2e38" strokeWidth="1.5" strokeLinecap="round"/>
              <rect x="32" y="144" width="56" height="10" rx="2" stroke="#2d2e38" strokeWidth="1.5"/>
              <circle cx="95" cy="28" r="2" fill="#fa9173"/>
              <circle cx="18" cy="55" r="1.5" fill="#fa9173"/>
            </svg>
          </div>

          {/* Right — nav links + contact grid stacked */}
          <div className="md:col-span-3">

            {/* Nav links */}
            <div className="grid grid-cols-2 gap-0 pb-14">
              <div className="pr-10">
                <p className="text-xs mb-8" style={{ color: muted, letterSpacing: "0.05em" }}>Services</p>
                <ul className="space-y-4">
                  {verticals.map((v) => (
                    <li key={v.label}>
                      <Link href={v.href}
                        className="font-semibold text-[#2d2e38] hover:text-[#fa9173] transition-colors"
                        style={{ fontSize: "clamp(15px, 1.3vw, 19px)", fontFamily: "var(--font-geist-sans)" }}
                      >{v.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pl-10">
                <p className="text-xs mb-8" style={{ color: muted, letterSpacing: "0.05em" }}>Company</p>
                <ul className="space-y-4">
                  {company.map((v) => (
                    <li key={v.label}>
                      <Link href={v.href}
                        className="font-semibold text-[#2d2e38] hover:text-[#fa9173] transition-colors"
                        style={{ fontSize: "clamp(15px, 1.3vw, 19px)", fontFamily: "var(--font-geist-sans)" }}
                      >{v.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact grid */}
            <div className="grid grid-cols-2 gap-0" style={{ borderTop: "1px solid rgba(45,46,56,0.1)" }}>
              <div className="py-10 pr-10" style={{ borderTop: "none" }}>
                <p className="text-xs mb-6" style={{ color: muted }}>Want to work together?</p>
                <p className="text-xs mb-1" style={{ color: dim }}>New business</p>
                <a href="mailto:business@hueness.com"
                  className="text-lg font-medium text-[#2d2e38] hover:text-[#fa9173] transition-colors"
                  style={{ fontFamily: "var(--font-geist-sans)" }}>
                  business@hueness.com
                </a>
              </div>
              <div className="py-10 pl-10">
                <p className="text-xs mb-6" style={{ color: muted }}>Want to say hi?</p>
                <p className="text-xs mb-1" style={{ color: dim }}>General inquiries</p>
                <a href="mailto:hello@hueness.com"
                  className="text-lg font-medium text-[#2d2e38] hover:text-[#fa9173] transition-colors"
                  style={{ fontFamily: "var(--font-geist-sans)" }}>
                  hello@hueness.com
                </a>
              </div>
              <div className="py-10 pr-10" style={{ borderTop: "1px solid rgba(45,46,56,0.1)" }}>
                <p className="text-xs mb-6" style={{ color: muted }}>Want to join us?</p>
                <p className="text-xs mb-1" style={{ color: dim }}>Careers</p>
                <Link href="/careers"
                  className="text-lg font-medium text-[#2d2e38] hover:text-[#fa9173] transition-colors"
                  style={{ fontFamily: "var(--font-geist-sans)" }}>
                  Apply here
                </Link>
              </div>
              <div className="py-10 pl-10" style={{ borderTop: "1px solid rgba(45,46,56,0.1)" }}>
                <p className="text-xs mb-6" style={{ color: muted }}>Where to find us</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-[#2d2e38]" style={{ fontFamily: "var(--font-geist-sans)" }}>Bengaluru</p>
                    <p className="text-xs mt-0.5 leading-relaxed" style={{ color: muted }}>
                      Awfis, Vajram Esteva, Devarabisanahalli<br />Bellandur — 560103, Karnataka
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#2d2e38]" style={{ fontFamily: "var(--font-geist-sans)" }}>Nashik</p>
                    <p className="text-xs mt-0.5 leading-relaxed" style={{ color: muted }}>
                      1, Janaki, Architect Colony<br />Gangapur Road — 422013, Maharashtra
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(45,46,56,0.08)" }}>
          <p className="text-xs" style={{ color: dim }}>
            © {new Date().getFullYear()} Hueness Design Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs hover:text-[#2d2e38] transition-colors" style={{ color: dim }}>Privacy Policy</Link>
            <Link href="/terms" className="text-xs hover:text-[#2d2e38] transition-colors" style={{ color: dim }}>Terms & Conditions</Link>
            <div className="flex items-center gap-4 ml-2">
              <a href="https://www.linkedin.com/company/hueness/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-[#2d2e38]" style={{ color: dim }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://www.facebook.com/hueness" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors hover:text-[#2d2e38]" style={{ color: dim }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/huenessdesign/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:text-[#2d2e38]" style={{ color: dim }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
