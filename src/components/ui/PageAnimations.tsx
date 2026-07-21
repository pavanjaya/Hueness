"use client";

import { useEffect } from "react";

export default function PageAnimations() {
  useEffect(() => {
    let gsap: typeof import("gsap")["gsap"];
    let ScrollTrigger: typeof import("gsap/ScrollTrigger")["ScrollTrigger"];

    async function init() {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      gsap = gsapMod.gsap;
      ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const ease = "cubic-bezier(0.22,1,0.36,1)";

      // ── Section reveals (opacity 0→1, Y 60→0) ────────────────────
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 60 },
          {
            opacity: 1, y: 0,
            duration: 0.9,
            ease,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "top 40%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // ── Staggered grid children (80ms between each) ───────────────
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((container) => {
        const children = container.querySelectorAll("[data-stagger-item]");
        gsap.fromTo(children,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0,
            duration: 0.7,
            ease,
            stagger: 0.08,
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // ── Text reveal: heading → subtitle → body → button (120ms) ──
      gsap.utils.toArray<HTMLElement>("[data-text-sequence]").forEach((container) => {
        const items = container.querySelectorAll("[data-text-item]");
        gsap.fromTo(items,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0,
            duration: 0.7,
            ease,
            stagger: 0.12,
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // ── Diagonal / horizontal reveal for images ───────────────────
      gsap.utils.toArray<HTMLElement>("[data-diagonal]").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, x: -40, y: 20 },
          {
            opacity: 1, x: 0, y: 0,
            duration: 0.9,
            ease,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // ── Icon entrance: rotate -8° → 0° ───────────────────────────
      gsap.utils.toArray<HTMLElement>("[data-icon-reveal]").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, rotate: -8, y: 20 },
          {
            opacity: 1, rotate: 0, y: 0,
            duration: 0.6,
            ease,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // ── Number counters ───────────────────────────────────────────
      gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
        const target = parseFloat(el.getAttribute("data-counter") || "0");
        const suffix = el.getAttribute("data-counter-suffix") || "";
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.5,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + suffix;
          },
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── Scroll parallax (background slower than foreground) ───────
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-parallax") || "0.5");
        gsap.to(el, {
          yPercent: -15 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // ── Floating hero video ───────────────────────────────────────
      const floatEl = document.querySelector("[data-float]");
      if (floatEl) {
        gsap.to(floatEl, {
          y: -10,
          duration: 3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }

      // ── Footer fade up ────────────────────────────────────────────
      const footer = document.querySelector("footer");
      if (footer) {
        gsap.fromTo(footer,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0,
            duration: 0.9,
            ease,
            scrollTrigger: {
              trigger: footer,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }

    init();

    return () => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => ScrollTrigger.killAll());
    };
  }, []);

  return null;
}
