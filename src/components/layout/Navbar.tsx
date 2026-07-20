"use client";

import { useState, useEffect, useRef } from "react";
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
  { label: "Products", href: "/products" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/studio-page" },
  { label: "Insights", href: "/blog" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || servicesOpen
          ? "backdrop-blur-sm"
          : "bg-transparent"
      }`}
      style={scrolled || servicesOpen ? { background: "rgba(244,241,235,0.94)" } : {}}
    >
      <nav className="px-6 xl:px-10 flex items-center h-16 md:h-20">

        {/* Logo — left */}
        <Link href="/" className="flex items-center shrink-0">
          <Image src="/hueness-logo.svg" alt="Hueness" width={120} height={25} priority />
        </Link>

        {/* Desktop nav — centered */}
        <ul className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {/* Services mega-menu */}
          <li ref={servicesRef} className="relative">
            <button
              onMouseEnter={() => setServicesOpen(true)}
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`nav-link flex items-center gap-1 text-[20px] font-medium text-[#0c0c0c] ${
                isServicesActive || servicesOpen ? "active" : ""
              }`}
            >
              Services
            </button>

            {servicesOpen && (
              <div
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[860px] border border-[rgba(12,12,12,0.1)] rounded-sm p-8 grid grid-cols-4 gap-8"
              style={{ background: "#ece9e2" }}
              >
                {Object.entries(services).map(([vertical, data]) => (
                  <div key={vertical}>
                    <Link href={data.href} className="block text-xs font-bold uppercase tracking-widest text-[#0c0c0c] mb-4">
                      {vertical}
                    </Link>
                    <ul className="space-y-2.5">
                      {data.items.map((item) => (
                        <li key={`${vertical}-${item.label}`}>
                          <Link href={item.href} className="text-sm text-[rgba(12,12,12,0.45)] hover:text-[#0c0c0c] transition-colors leading-snug block">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="col-span-4 pt-6 mt-2 flex items-center justify-between" style={{ borderTop: "1px solid rgba(12,12,12,0.1)" }}>
                  <p className="text-xs text-[rgba(12,12,12,0.35)]">Not sure where to start?</p>
                  <Link href="/contact" className="text-xs font-semibold text-[#0c0c0c]">Talk to us →</Link>
                </div>
              </div>
            )}
          </li>

          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link text-[20px] font-medium text-[#0c0c0c] ${pathname === link.href ? "active" : ""}`}
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
            className="text-[20px] font-medium text-[#0c0c0c] hover:opacity-60 transition-opacity"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-[#0c0c0c]"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-4" style={{ background: "#ece9e2", borderTop: "1px solid rgba(12,12,12,0.1)" }}>
          <ul className="flex flex-col gap-1">
            <li>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-base font-medium py-2 text-[#0c0c0c]"
              >
                Services
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 mb-2 space-y-4">
                  {Object.entries(services).map(([vertical, data]) => (
                    <div key={vertical}>
                      <Link href={data.href} className="block text-xs font-bold uppercase tracking-widest text-[#0c0c0c] mb-2">
                        {vertical}
                      </Link>
                      <ul className="space-y-1.5">
                        {data.items.map((item) => (
                          <li key={`mob-${vertical}-${item.label}`}>
                            <Link href={item.href} className="text-sm text-[rgba(12,12,12,0.45)] hover:text-[#0c0c0c] transition-colors block py-0.5">
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
                <Link href={link.href} className="block text-base font-medium py-2 text-[#0c0c0c] hover:text-[rgba(12,12,12,0.6)] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/contact" className="inline-block bg-[#0c0c0c] text-[#0c0c0c] text-sm font-semibold px-5 py-2.5 rounded-full">
                Let&apos;s Talk
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
