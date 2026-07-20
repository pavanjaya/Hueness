import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Studio",
  description: "A purpose-led troupe of strategists, designers & engineers backed by 30+ years of creative leadership.",
};

const team = [
  { name: "Piyush JP", role: "Chief Creative Officer", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Jaya Sharma", role: "Chief of Staff & Legal Counsel", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "Karan V", role: "Manager — UX Design", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { name: "Hemant Pawar", role: "Manager — Strategy", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Vipul Sharma", role: "Technical Lead", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
  { name: "Abhishek Jangid", role: "Full-Stack Developer", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" },
  { name: "Kajal Kansara", role: "Visual Designer", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
  { name: "Amisha Ganore", role: "Visual / UI Designer", photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80" },
  { name: "Amey Vaghodkar", role: "Sr. Industrial Designer", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { name: "Ayush Ghumare", role: "Animation Designer", photo: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=400&q=80" },
  { name: "Shruti Metkar", role: "Animation & Motion Designer", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
  { name: "Mihir Patel", role: "Content & Marketing Associate", photo: "https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?w=400&q=80" },
  { name: "Gauri Jadhav", role: "UX Designer", photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" },
  { name: "Ankit Jangid", role: "Business & Sales Executive", photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80" },
];

const approach = [
  { step: "DiveIn", label: "Exploring Possibilities", items: ["Client Consultation & Discovery", "Market & Trend Analysis", "CFT Brainstorming & Goal Setting"] },
  { step: "Define", label: "Strategizing for Success", items: ["Project Scope & Requirements", "User & Stakeholder Profiles", "Problem Definition & Concept Validation"] },
  { step: "Design", label: "Bringing Ideas to Life", items: ["Concept Development & Prototyping", "User Testing & Feedback Loop", "Final Delivery & Implementation"] },
];

export default function StudioPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="px-6 xl:px-10 py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#fa9173] mb-6">About Hueness</p>
        <h1
          className="font-black uppercase text-[#2d2e38] tracking-tight leading-[0.88] max-w-4xl mb-8"
          style={{ fontSize: "clamp(56px,8vw,120px)", fontFamily: "var(--font-display),'Barlow Condensed',Arial,sans-serif" }}
        >
          Transforming bold ideas into global market-ready brands.
        </h1>
        <p className="text-[rgba(45,46,56,0.55)] text-lg max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-serif),'IBM Plex Serif',Georgia,serif", fontStyle: "italic" }}>
          A purpose-led troupe of strategists, designers & engineers backed by 30+ years of creative leadership experience in top Fortune 500 companies — at the intersection of design intuition, strategic insight & emerging AI tech integration.
        </p>
      </div>

      {/* Philosophy — purple section */}
      <div className="py-24" style={{ background: "#323462" }}>
        <div className="px-6 xl:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#fa9173] mb-4">Hue Spot</p>
              <h2
                className="font-black uppercase text-[#ffefd6] tracking-tight leading-[0.88] mb-6"
                style={{ fontSize: "clamp(40px,5vw,72px)", fontFamily: "var(--font-display),'Barlow Condensed',Arial,sans-serif" }}
              >
                Good Design is Good Business. Period.
              </h2>
              <p className="leading-relaxed" style={{ color: "rgba(255,239,214,0.6)", fontFamily: "var(--font-serif),'IBM Plex Serif',Georgia,serif" }}>
                Design forms the basis of human intelligence. Though widely neglected, we believe that intuition and instinct are at the core of every great brand, product, or service experience. We call it the Hue Spot — that sweet intersection of strategy, creativity, and technology.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Agile", "Responsible", "Adaptive", "Purpose-Led"].map((v) => (
                <div key={v} className="p-6 text-center" style={{ background: "rgba(255,239,214,0.08)", border: "1px solid rgba(255,239,214,0.12)" }}>
                  <p
                    className="font-black uppercase text-[#ffefd6] text-xl"
                    style={{ fontFamily: "var(--font-display),'Barlow Condensed',Arial,sans-serif" }}
                  >
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Approach */}
      <div className="px-6 xl:px-10 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#fa9173] mb-4">Our Approach</p>
        <h2
          className="font-black uppercase text-[#2d2e38] tracking-tight mb-12"
          style={{ fontSize: "clamp(40px,5vw,72px)", fontFamily: "var(--font-display),'Barlow Condensed',Arial,sans-serif" }}
        >
          Agile, Responsible & Adaptive.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(45,46,56,0.08)" }}>
          {approach.map((a, i) => (
            <div key={a.step} className="p-10" style={{ background: "#fffef9" }}>
              <span className="text-xs font-semibold text-[rgba(45,46,56,0.35)] uppercase tracking-widest">Step 0{i + 1}</span>
              <h3
                className="font-black uppercase text-[#2d2e38] mt-2 mb-1"
                style={{ fontSize: "clamp(28px,3vw,40px)", fontFamily: "var(--font-display),'Barlow Condensed',Arial,sans-serif" }}
              >
                {a.step}
              </h3>
              <p className="text-[#2d2e38] text-sm font-medium mb-6">{a.label}</p>
              <ul className="space-y-2">
                {a.items.map((item) => (
                  <li key={item} className="text-sm text-[rgba(45,46,56,0.5)] flex items-start gap-2" style={{ fontFamily: "var(--font-serif),'IBM Plex Serif',Georgia,serif" }}>
                    <span className="w-1 h-1 rounded-full bg-[#fa9173] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="py-24" style={{ background: "#ffefd6" }}>
        <div className="px-6 xl:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#fa9173] mb-4">Hue Team</p>
          <h2
            className="font-black uppercase text-[#2d2e38] tracking-tight mb-12"
            style={{ fontSize: "clamp(40px,5vw,72px)", fontFamily: "var(--font-display),'Barlow Condensed',Arial,sans-serif" }}
          >
            The passionate brave souls behind our projects.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-square mb-4 overflow-hidden relative">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-semibold text-[#2d2e38] text-sm">{member.name}</h3>
                <p className="text-[rgba(45,46,56,0.5)] text-xs mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Locations */}
      <div className="px-6 xl:px-10 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#fa9173] mb-4">Find Us</p>
        <h2
          className="font-black uppercase text-[#2d2e38] tracking-tight mb-12"
          style={{ fontSize: "clamp(40px,5vw,72px)", fontFamily: "var(--font-display),'Barlow Condensed',Arial,sans-serif" }}
        >
          Two studios, one vision.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { city: "Bangalore", state: "Karnataka", tagline: "Design & Tech Hub" },
            { city: "Nashik", state: "Maharashtra", tagline: "Creative & Strategy Studio" },
          ].map((l) => (
            <div key={l.city} className="p-10" style={{ background: "#f0ddc7" }}>
              <p className="text-xs font-semibold uppercase tracking-widest text-[rgba(45,46,56,0.45)] mb-2">{l.tagline}</p>
              <h3
                className="font-black uppercase text-[#2d2e38]"
                style={{ fontSize: "clamp(36px,4vw,56px)", fontFamily: "var(--font-display),'Barlow Condensed',Arial,sans-serif" }}
              >
                {l.city}
              </h3>
              <p className="text-[rgba(45,46,56,0.5)] mt-1">{l.state}, India</p>
            </div>
          ))}
        </div>
      </div>

      <CTA />
    </div>
  );
}
