"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const services = {
  Strategy: {
    href: "/design",
    items: [
      { label: "Business Strategy", href: "/design" },
      { label: "Brand Strategy", href: "/design" },
      { label: "Product Strategy", href: "/design" },
      { label: "Research & Discovery", href: "/design" },
      { label: "Innovation Consulting", href: "/design" },
    ],
  },
  Design: {
    href: "/design",
    items: [
      { label: "Brand Identity", href: "/design" },
      { label: "UX / UI Design", href: "/design" },
      { label: "Web Design", href: "/design" },
      { label: "Packaging Design", href: "/design" },
      { label: "Design Systems", href: "/design" },
    ],
  },
  Technology: {
    href: "/tech",
    items: [
      { label: "Product Engineering", href: "/tech" },
      { label: "SaaS Development", href: "/tech" },
      { label: "Web & Mobile Development", href: "/tech" },
      { label: "AI Solutions", href: "/tech" },
      { label: "API & Integrations", href: "/tech" },
    ],
  },
  Marketing: {
    href: "/marketing",
    items: [
      { label: "Brand Marketing", href: "/marketing" },
      { label: "Growth Marketing", href: "/marketing" },
      { label: "Performance Marketing", href: "/marketing" },
      { label: "Content Marketing", href: "/marketing" },
      { label: "SEO & Analytics", href: "/marketing" },
    ],
  },
};

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
                className="fixed left-0 right-0 px-8 md:px-14 xl:px-20 py-10 z-50"
                style={{
                  top: scrolled ? "68px" : "88px",
                  background: "#fffef9",
                  borderBottom: "1px solid rgba(45,46,56,0.08)",
                  animation: "dropdown-in 0.35s cubic-bezier(0.22,1,0.36,1) both",
                }}
              >
                <div className="grid grid-cols-4 gap-12">
                  {Object.entries(services).map(([vertical, data]) => (
                    <div key={vertical}>
                      <Link
                        href={data.href}
                        className="block font-semibold text-[#2d2e38] hover:text-[#fa9173] transition-colors mb-5"
                        style={{ fontSize: "clamp(18px, 1.6vw, 24px)", fontFamily: "var(--font-geist-sans)" }}
                      >
                        {vertical}
                      </Link>
                      <ul className="space-y-3">
                        {data.items.map((item) => (
                          <li key={`${vertical}-${item.label}`}>
                            <Link
                              href={item.href}
                              className="text-[rgba(45,46,56,0.45)] hover:text-[#2d2e38] transition-colors block leading-snug"
                              style={{ fontSize: "clamp(13px, 1vw, 15px)", fontFamily: "var(--font-geist-sans)" }}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-8 pt-6" style={{ borderTop: "1px solid rgba(45,46,56,0.08)" }}>
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
                      <Link href={data.href} className="block text-xs font-bold uppercase tracking-widest text-[#2d2e38] mb-2">
                        {vertical}
                      </Link>
                      <ul className="space-y-1.5">
                        {data.items.map((item) => (
                          <li key={`mob-${vertical}-${item.label}`}>
                            <Link href={item.href} className="text-sm text-[rgba(45,46,56,0.45)] hover:text-[#2d2e38] transition-colors block py-0.5">
                              {item.label}
                            </Link>
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
