"use client";

import Image from "next/image";

const logos = [
  { name: "Adobe",    src: "/clients/adobe.svg",    w: 133, h: 48 },
  { name: "Stripe",   src: "/clients/stripe.svg",   w: 80,  h: 48 },
  { name: "Alphanso", src: "/clients/alphanso.svg", w: 220, h: 63 },
  { name: "JustDo",   src: "/clients/justdo.svg",   w: 216, h: 52 },
  { name: "Hiration", src: "/clients/hiration.svg", w: 174, h: 35 },
];

export default function ClientStrip() {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-12 overflow-hidden">
      <div className="relative flex">
        <div className="animate-marquee flex items-center gap-20 shrink-0">
          {doubled.map((logo, i) => (
            <div key={i} className="shrink-0 opacity-30 hover:opacity-60 transition-opacity duration-300 grayscale">
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.w}
                height={logo.h}
                style={{ height: 32, width: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
