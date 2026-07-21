"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "Their UX expertise turned a complex platform into a user-friendly experience. The insights and timely execution were just what we needed.",
    author: "Anuraag Dubey",
    role: "COO",
    company: "LaunchXLabs, Bangalore",
  },
  {
    quote: "From strategy to execution, Hueness delivered a brand identity that feels both timeless and impactful, carrying forward our legacy.",
    author: "Siva Shanmugam",
    role: "Partner",
    company: "Rishaba Industries, Chennai",
  },
  {
    quote: "GM's new brand refresh truly reflects our vision. The collaborative approach, attention to detail & Hueness' project ownership made all the difference.",
    author: "Gaurav Mozar",
    role: "Founder",
    company: "GM Design, Mumbai",
  },
  {
    quote: "Hueness helped us reimagine our digital experience with a seamless, intuitive design interface that users loved — our conversions have just skyrocketed.",
    author: "Sahil Sharma",
    role: "CEO",
    company: "Codefobe, Noida",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((i) => (i + 1) % testimonials.length);
  const t = testimonials[active];

  return (
    <section className="bg-[#F6E6F1] py-24 md:py-36 px-8 md:px-14 xl:px-20">
      <div className="max-w-5xl">
        <div className="text-[120px] leading-none font-bold text-[#e8c8e0] select-none mb-4">&ldquo;</div>

        <p key={active} className="text-[clamp(22px,3.2vw,44px)] font-medium text-[#000000] leading-[1.2] tracking-tight mb-12">
          {t.quote}
        </p>

        <div className="flex items-end justify-between gap-8">
          <div>
            <div className="w-8 h-px bg-[#b08aa8] mb-4" />
            <p className="text-base font-bold text-[#000000]">{t.author}</p>
            <p className="text-sm text-[#b08aa8] mt-1">{t.role}, {t.company}</p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs text-[#b08aa8] tabular-nums">
              {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-[#e8c8e0] flex items-center justify-center hover:border-[#000000] hover:bg-[#000000] hover:text-white transition-all text-[#000000]"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-[#e8c8e0] flex items-center justify-center hover:border-[#000000] hover:bg-[#000000] hover:text-white transition-all text-[#000000]"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-px transition-all duration-300 ${i === active ? "w-10 bg-[#000000]" : "w-4 bg-[#d4b0cc]"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
