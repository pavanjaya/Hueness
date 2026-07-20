import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies across Design, Tech, Marketing, and In-House Products.",
};

const projects = [
  { title: "Elevating India's Smart Essentials Brand", client: "Rishaba Industries", vertical: "Design", industry: "Manufacturing", location: "Chennai", color: "#f0ede8" },
  { title: "Gamified Learning for Next-Gen Coders", client: "CodeFobe", vertical: "Tech", industry: "EdTech", location: "New Delhi", color: "#e8edf0" },
  { title: "Brand Upheaval for Global FinTech", client: "Megasoft", vertical: "Design", industry: "FinTech", location: "Pune", color: "#ede8f0" },
  { title: "Professional Network Redesign", client: "Konnectoid", vertical: "Tech", industry: "Real Estate Tech", location: "USA", color: "#e8f0ed" },
  { title: "Brand Design for Curiosity-Led Preschool", client: "Kinderlogica", vertical: "Design", industry: "Education", location: "Hyderabad", color: "#f0f0e8" },
  { title: "Crafting the Brand for Grand Master of Interiors", client: "GM Design", vertical: "Design", industry: "Design + Build", location: "Mumbai", color: "#e8e8f0" },
  { title: "Eco-Conscious Waste Management Brand", client: "Techeco", vertical: "Design", industry: "Waste Management", location: "Nashik", color: "#e8f0e8" },
  { title: "Healthcare Speciality Brand", client: "Jointcare / Visco Basic", vertical: "Design", industry: "Healthcare", location: "Spain", color: "#f0e8e8" },
  { title: "Employee Joining Experience Packaging", client: "ResQ / Reliance", vertical: "Marketing", industry: "Information Technology", location: "Mumbai", color: "#ede8e8" },
  { title: "Social Review Platform UX", client: "LaunchX Labs", vertical: "Tech", industry: "Information & Internet", location: "Bengaluru", color: "#e8ede8" },
  { title: "Job Seeker Platform UX Strategy", client: "CTGT / MyStory", vertical: "Tech", industry: "HRTech", location: "Pune", color: "#e8e8ed" },
  { title: "AI-Powered Facial Hair Styler", client: "Groomré", vertical: "Products", industry: "Lifestyle", location: "In-House", color: "#000000", dark: true },
];

const verticalFilters = ["All", "Design", "Tech", "Marketing", "Products"];

export default function WorkPage() {
  return (
    <div className="pt-20">
      <div className="px-6 xl:px-10 py-20">
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#000000] mb-4">Selected Work</p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#000000] tracking-tight leading-tight mb-6">
            Work that speaks.
          </h1>
          <p className="text-[#6b6b6b] text-lg max-w-xl leading-relaxed">
            From brand identities to AI-powered products — every project is a story of bold thinking and purposeful execution.
          </p>
        </div>

        {/* Filter tabs (static — dynamic filtering needs client component) */}
        <div className="flex flex-wrap gap-2 mb-12">
          {verticalFilters.map((f) => (
            <button
              key={f}
              className={`text-sm font-medium px-5 py-2 rounded-full border transition-colors ${
                f === "All"
                  ? "bg-[#000000] text-white border-[#000000]"
                  : " text-[#6b6b6b] hover:border-[#000000] hover:text-[#000000]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative rounded-sm overflow-hidden cursor-pointer"
              style={{ backgroundColor: p.color }}
            >
              <div className="p-8 min-h-[300px] flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span
                    className={`text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full ${
                      p.dark ? "bg-white/10 text-white" : "bg-black/5 text-[#6b6b6b]"
                    }`}
                  >
                    {p.vertical}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className={`group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${
                      p.dark ? "text-white/30 group-hover:text-white" : "text-[#6b6b6b] group-hover:text-[#000000]"
                    }`}
                  />
                </div>
                <div>
                  <p className={`text-xs mb-2 ${p.dark ? "text-white/50" : "text-[#6b6b6b]"}`}>
                    {p.industry} · {p.location}
                  </p>
                  <h3 className={`text-xl font-bold leading-snug ${p.dark ? "text-white" : "text-[#000000]"}`}>
                    {p.title}
                  </h3>
                  <p className={`text-sm mt-1 font-medium ${p.dark ? "text-white/50" : "text-[#6b6b6b]"}`}>
                    {p.client}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
