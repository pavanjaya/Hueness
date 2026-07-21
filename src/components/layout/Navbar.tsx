"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const services = {
  Branding: {
    href: "/design",
    items: ["Brand Identity", "Visual Systems", "Packaging Design", "Brand Guidelines", "Art Direction"],
  },
  "Digital Experience": {
    href: "/design",
    items: ["UX / UI Design", "Web Design", "Product Design", "Design Systems", "Motion Design"],
  },
  Technology: {
    href: "/tech",
    items: ["Web & Mobile Development", "SaaS Development", "AI Solutions", "Product Engineering", "API & Integrations"],
  },
  Products: {
    href: "/tech",
    items: ["MVP Development", "Product Strategy", "Zero to One Builds", "SaaS Products", "AI-Powered Apps"],
  },
  Marketing: {
    href: "/marketing",
    items: ["Brand Marketing", "Growth Marketing", "Performance Marketing", "Content Marketing", "SEO & Analytics"],
  },
};

function ServiceIcon({ name }: { name: string }) {
  const s = { width: 33, height: 33, viewBox: "0 0 24 24", fill: "none" as const, stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "Branding") return (
    <svg {...s}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
  );
  if (name === "Digital Experience") return (
    <svg {...s}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
  );
  if (name === "Technology") return (
    <svg {...s}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
  );
  if (name === "Products") return (
    <svg {...s}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
  );
  return (
    <svg {...s}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
  );
}

const navLinks: { label: string; href: string }[] = [
  { label: "Programs", href: "/sprint-now" },
  { label: "HueMade", href: "/products" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/studio-page" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isServicesActive = ["/design", "/tech", "/marketing"].includes(pathname);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled || servicesOpen ? "rgba(255,254,249,0.94)" : "transparent",
        backdropFilter: scrolled || servicesOpen ? "blur(12px)" : "none",
        boxShadow: "none",
        transition: "background 300ms ease, box-shadow 300ms ease, backdrop-filter 300ms ease",
        animation: "nav-slide-down 0.6s cubic-bezier(0.22,1,0.36,1) 0.15s both",
      }}
    >
      <nav
        className="px-8 md:px-14 xl:px-20 flex items-center"
        style={{
          height: scrolled ? "68px" : "88px",
          transition: "height 300ms ease",
        }}
      >

        {/* Logo — left */}
        <Link href="/" className="flex items-center shrink-0">
          <Image src="/hueness-logo.svg" alt="Hueness" width={138} height={29} priority />
        </Link>

        {/* Desktop nav — centered */}
        <ul className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {/* Services mega-menu */}
          <li ref={servicesRef} className="relative">
            <button
              onMouseEnter={() => setServicesOpen(true)}
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`nav-link flex items-center gap-1 text-[20px] font-medium text-[#2d2e38] ${
                isServicesActive || servicesOpen ? "active" : ""
              }`}
            >
              Services
            </button>

            {servicesOpen && (
              <>
                {/* Backdrop shim — portalled to body to escape header stacking context */}
                {typeof document !== "undefined" && createPortal(
                  <div
                    onClick={() => setServicesOpen(false)}
                    style={{
                      position: "fixed",
                      top: scrolled ? "68px" : "88px",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "rgba(0,0,0,0.5)",
                      zIndex: 45,
                    }}
                  />,
                  document.body
                )}
              <div
                onMouseLeave={() => setServicesOpen(false)}
                className="fixed left-0 right-0 px-8 md:px-14 xl:px-20 py-12 z-50"
                style={{
                  top: scrolled ? "68px" : "88px",
                  background: "#fffef9",
                  borderBottom: "1px solid rgba(45,46,56,0.08)",
                  animation: "dropdown-in 0.35s cubic-bezier(0.22,1,0.36,1) both",
                }}
              >
                <div className="grid grid-cols-5 gap-8">
                  {Object.entries(services).map(([vertical, data]) => (
                    <div key={vertical}>
                      {/* Icon */}
                      <div className="mb-3 text-[rgba(45,46,56,0.3)]"><ServiceIcon name={vertical} /></div>
                      <Link
                        href={data.href}
                        className="block font-semibold text-[#2d2e38] hover:text-[#fa9173] transition-colors mb-5"
                        style={{ fontSize: "clamp(16px, 1.4vw, 20px)", fontFamily: "var(--font-geist-sans)" }}
                      >
                        {vertical}
                      </Link>
                      <ul className="space-y-3">
                        {data.items.map((item) => (
                          <li key={`${vertical}-${item}`}>
                            <span
                              className="text-[rgba(45,46,56,0.4)] block leading-snug"
                              style={{ fontSize: "clamp(12px, 0.9vw, 14px)", fontFamily: "var(--font-geist-sans)" }}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-4 mt-10 pt-8" style={{ borderTop: "1px solid rgba(45,46,56,0.08)" }}>
                  <p className="text-xs text-[rgba(45,46,56,0.35)]">Not sure where to start?</p>
                  <Link href="/contact" className="text-xs font-semibold text-[#2d2e38] hover:text-[#fa9173] transition-colors">Talk to us →</Link>
                </div>
              </div>
              </>
            )}
          </li>

          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link text-[20px] font-medium text-[#2d2e38] ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right — Let's Talk as plain text link */}
        <div className="hidden md:flex items-center shrink-0">
          <Link
            href="/contact"
            className="btn text-sm font-semibold text-[#fffef9] bg-[#fa9173] px-6 py-2.5"
            style={{ borderRadius: "50px" }}
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-[#2d2e38]"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-4" style={{ background: "#323462", borderTop: "1px solid rgba(255,239,214,0.15)" }}>
          <ul className="flex flex-col gap-1">
            <li>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-base font-medium py-2 text-[#ffefd6]"
              >
                Services
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 mb-2 space-y-4">
                  {Object.entries(services).map(([vertical, data]) => (
                    <div key={vertical}>
                      <Link href={data.href} className="block text-xs font-bold uppercase tracking-widest text-[#ffefd6] mb-2">
                        {vertical}
                      </Link>
                      <ul className="space-y-1.5">
                        {data.items.map((item) => (
                          <li key={`mob-${vertical}-${item}`}>
                            <span className="text-sm text-[rgba(255,239,214,0.45)] block py-0.5">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block text-base font-medium py-2 text-[#ffefd6] hover:text-[rgba(255,239,214,0.6)] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/contact" className="inline-block bg-[#fa9173] text-[#fffef9] text-sm font-semibold px-5 py-2.5 rounded-full">
                Let&apos;s Talk
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
