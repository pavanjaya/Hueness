import Link from "next/link";
import Image from "next/image";

const verticals = [
  { label: "Design", href: "/design" },
  { label: "Tech", href: "/tech" },
  { label: "Marketing", href: "/marketing" },
  { label: "Products", href: "/products" },
];

const company = [
  { label: "Work", href: "/work" },
  { label: "Studio", href: "/studio-page" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const products = [
  { label: "JustLog", href: "/products/justlog" },
  { label: "Paintora", href: "/products/paintora" },
  { label: "Howztrip", href: "/products/howztrip" },
  { label: "Groomré", href: "/products/groomre" },
];

const muted = "rgba(12,12,12,0.35)";
const dim = "rgba(12,12,12,0.18)";

export default function Footer() {
  return (
    <footer style={{ background: "#f4f1eb", borderTop: "1px solid rgba(12,12,12,0.1)" }}>
      <div className="px-6 xl:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex">
              <Image src="/hueness-logo.svg" alt="Hueness" width={130} height={27} className="" />
            </Link>
            <p className="mt-4 max-w-xs leading-relaxed text-sm" style={{ color: muted }}>
              An integrated studio combining design excellence, engineering depth, and marketing intelligence — for brands that want to think bigger.
            </p>
            <div className="mt-8 space-y-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#0c0c0c] mb-1">Bengaluru</p>
                <p className="text-xs leading-relaxed" style={{ color: muted }}>Awfis, Vajram Esteva, Devarabisanahalli,<br />Bellandur — 560103, Karnataka</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#0c0c0c] mb-1">Nashik</p>
                <p className="text-xs leading-relaxed" style={{ color: muted }}>1, Janaki, Architect Colony,<br />Gangapur Road — 422013, Maharashtra</p>
              </div>
            </div>
            <div className="mt-6 space-y-1">
              <a href="mailto:hello@hueness.com" className="footer-link text-sm block">hello@hueness.com</a>
              <a href="tel:+919322135422" className="footer-link text-sm block">+91 932 2135 422</a>
            </div>
          </div>

          {[{ title: "Verticals", items: verticals }, { title: "Company", items: company }, { title: "Products", items: products }].map(({ title, items }) => (
            <div key={title}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: dim }}>{title}</p>
              <ul className="space-y-3">
                {items.map((v) => (
                  <li key={v.href}>
                    <Link href={v.href} className="text-sm transition-colors" style={{ color: muted }}>
                      {v.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(12,12,12,0.1)" }}>
          <p className="text-sm" style={{ color: dim }}>
            © {new Date().getFullYear()} Hueness Design Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/company/hueness/" },
              { label: "Instagram", href: "https://www.instagram.com/huenessdesign/" },
              { label: "X / Twitter", href: "https://twitter.com/Huenessdesign" },
              { label: "YouTube", href: "https://www.youtube.com/channel/UCai-UqYs52uKZS0SuOEB9uQ" },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-xs transition-colors" style={{ color: dim }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
