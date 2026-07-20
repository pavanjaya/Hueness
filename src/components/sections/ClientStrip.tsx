"use client";

const logos = [
  { name: "Rishaba", style: "font-bold tracking-tight text-xl" },
  { name: "GM Design", style: "font-black tracking-widest text-xs uppercase" },
  { name: "Kinderlogica", style: "font-semibold tracking-tight text-lg italic" },
  { name: "Megasoft", style: "font-bold tracking-[-0.05em] text-xl" },
  { name: "Mustang", style: "font-black tracking-[0.12em] text-xs uppercase" },
  { name: "Techeco", style: "font-bold tracking-[0.06em] text-xs uppercase" },
  { name: "Visco", style: "font-black tracking-[-0.04em] text-xl" },
  { name: "Sarang", style: "font-semibold tracking-tight text-lg" },
  { name: "Indu", style: "font-semibold tracking-widest text-xs uppercase" },
  { name: "Codefobe", style: "font-bold tracking-tight text-base" },
  { name: "LaunchXLabs", style: "font-black tracking-tight text-base" },
];

export default function ClientStrip() {
  const doubled = [...logos, ...logos];

  return (
    <section
      className="py-12 overflow-hidden"
      style={{ borderTop: "1px solid rgba(45,46,56,0.1)" }}
    >
      <div className="relative flex">
        <div className="animate-marquee flex items-center gap-12">
          {doubled.map((logo, i) => (
            <span key={i} className="contents">
              <span className={`shrink-0 text-[rgba(45,46,56,0.22)] hover:text-[rgba(45,46,56,0.65)] transition-colors duration-300 ${logo.style}`}>
                {logo.name}
              </span>
              <span className="shrink-0 text-[rgba(45,46,56,0.12)] text-xs">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
