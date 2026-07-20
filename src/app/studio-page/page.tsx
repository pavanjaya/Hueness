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
        <p className="text-xs font-semibold uppercase tracking-widest text-[#000000] mb-6">About Hueness</p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#000000] tracking-tight leading-tight max-w-4xl mb-8">
          Transforming bold ideas into global market-ready brands.
        </h1>
        <p className="text-[#6b6b6b] text-lg max-w-2xl leading-relaxed">
          A purpose-led troupe of strategists, designers & engineers backed by 30+ years of creative leadership experience in top Fortune 500 companies — at the intersection of design intuition, strategic insight & emerging AI tech integration.
        </p>
      </div>

      {/* Philosophy */}
      <div className="bg-[#000000] py-24">
        <div className="px-6 xl:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#000000] mb-4">Hue Spot</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Good Design is Good Business. Period.
              </h2>
              <p className="text-[#9a9a9a] leading-relaxed">
                Design forms the basis of human intelligence. Though widely neglected, we believe that intuition and instinct are at the core of every great brand, product, or service experience. We call it the Hue Spot — that sweet intersection of strategy, creativity, and technology.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Agile", "Responsible", "Adaptive", "Purpose-Led"].map((v) => (
                <div key={v} className="bg-[#141414] rounded-sm p-6 text-center">
                  <p className="text-white font-bold text-xl">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Approach */}
      <div className="px-6 xl:px-10 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#000000] mb-4">Our Approach</p>
        <h2 className="text-4xl font-bold text-[#000000] tracking-tight mb-12">
          Agile, Responsible & Adaptive.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e5e3de]">
          {approach.map((a, i) => (
            <div key={a.step} className="bg-[#ffffff] p-10">
              <span className="text-xs font-semibold text-[#6b6b6b] uppercase tracking-widest">Step 0{i + 1}</span>
              <h3 className="text-2xl font-bold text-[#000000] mt-2 mb-1">{a.step}</h3>
              <p className="text-[#000000] text-sm font-medium mb-6">{a.label}</p>
              <ul className="space-y-2">
                {a.items.map((item) => (
                  <li key={item} className="text-sm text-[#6b6b6b] flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#6b6b6b] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="bg-white py-24">
        <div className="px-6 xl:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#000000] mb-4">Hue Team</p>
          <h2 className="text-4xl font-bold text-[#000000] tracking-tight mb-12">
            The passionate brave souls behind our projects.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-square rounded-sm mb-4 overflow-hidden relative">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-semibold text-[#000000] text-sm">{member.name}</h3>
                <p className="text-[#6b6b6b] text-xs mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Locations */}
      <div className="px-6 xl:px-10 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#000000] mb-4">Find Us</p>
        <h2 className="text-4xl font-bold text-[#000000] tracking-tight mb-12">Two studios, one vision.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { city: "Bangalore", state: "Karnataka", tagline: "Design & Tech Hub" },
            { city: "Nashik", state: "Maharashtra", tagline: "Creative & Strategy Studio" },
          ].map((l) => (
            <div key={l.city} className="bg-[#ffffff] border  rounded-sm p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6b6b6b] mb-2">{l.tagline}</p>
              <h3 className="text-3xl font-bold text-[#000000]">{l.city}</h3>
              <p className="text-[#6b6b6b] mt-1">{l.state}, India</p>
            </div>
          ))}
        </div>
      </div>

      <CTA />
    </div>
  );
}
