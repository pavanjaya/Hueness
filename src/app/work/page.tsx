import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies across Design, Tech, Marketing, and In-House Products.",
};

const projects = [
  { title: "Elevating India's Smart Essentials Brand", client: "Rishaba Industries", vertical: "Design", industry: "Manufacturing", location: "Chennai", color: "#f0ddc7" },
  { title: "Gamified Learning for Next-Gen Coders", client: "CodeFobe", vertical: "Tech", industry: "EdTech", location: "New Delhi", color: "#9ee2d2" },
  { title: "Brand Upheaval for Global FinTech", client: "Megasoft", vertical: "Design", industry: "FinTech", location: "Pune", color: "#ffefd6" },
  { title: "Professional Network Redesign", client: "Konnectoid", vertical: "Tech", industry: "Real Estate Tech", location: "USA", color: "#e4caca" },
  { title: "Brand Design for Curiosity-Led Preschool", client: "Kinderlogica", vertical: "Design", industry: "Education", location: "Hyderabad", color: "#f0ddc7" },
  { title: "Crafting the Brand for Grand Master of Interiors", client: "GM Design", vertical: "Design", industry: "Design + Build", location: "Mumbai", color: "#9ee2d2" },
  { title: "Eco-Conscious Waste Management Brand", client: "Techeco", vertical: "Design", industry: "Waste Management", location: "Nashik", color: "#ffefd6" },
  { title: "Healthcare Speciality Brand", client: "Jointcare / Visco Basic", vertical: "Design", industry: "Healthcare", location: "Spain", color: "#e4caca" },
  { title: "Employee Joining Experience Packaging", client: "ResQ / Reliance", vertical: "Marketing", industry: "Information Technology", location: "Mumbai", color: "#f0ddc7" },
  { title: "Social Review Platform UX", client: "LaunchX Labs", vertical: "Tech", industry: "Information & Internet", location: "Bengaluru", color: "#9ee2d2" },
  { title: "Job Seeker Platform UX Strategy", client: "CTGT / MyStory", vertical: "Tech", industry: "HRTech", location: "Pune", color: "#ffefd6" },
  { title: "AI-Powered Facial Hair Styler", client: "Groomré", vertical: "Products", industry: "Lifestyle", location: "In-House", color: "#323462", dark: true },
];

const verticalFilters = ["All", "Design", "Tech", "Marketing", "Products"];

export default function WorkPage() {
  return (
    <div className="pt-20">
      <div className="px-8 md:px-14 xl:px-20 py-20">
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#fa9173] mb-4">Selected Work</p>
          <h1
            className="font-black uppercase text-[#2d2e38] tracking-tight leading-[0.88] mb-6"
            style={{ fontSize: "clamp(56px,8vw,120px)", fontFamily: "var(--font-display),'Barlow Condensed',Arial,sans-serif" }}
          >
            Work that speaks.
          </h1>
          <p className="text-[rgba(45,46,56,0.55)] text-lg max-w-xl leading-relaxed" style={{ fontFamily: "var(--font-serif),'IBM Plex Serif',Georgia,serif", fontStyle: "italic" }}>
            From brand identities to AI-powered products — every project is a story of bold thinking and purposeful execution.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {verticalFilters.map((f) => (
            <button
              key={f}
              className={`text-sm font-medium px-5 py-2 transition-colors ${
                f === "All"
                  ? "bg-[#2d2e38] text-[#fffef9]"
                  : "text-[rgba(45,46,56,0.55)] hover:text-[#2d2e38]"
              }`}
              style={{
                borderRadius: "50px",
                border: f === "All" ? "1px solid #2d2e38" : "1px solid rgba(45,46,56,0.2)",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative overflow-hidden cursor-pointer"
              style={{ backgroundColor: p.color }}
            >
              <div className="p-8 min-h-[280px] flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span
                    className={`text-xs font-semibold uppercase tracking-widest px-3 py-1.5 ${
                      p.dark ? "bg-white/10 text-[#ffefd6]" : "text-[rgba(45,46,56,0.55)]"
                    }`}
                    style={{ borderRadius: "50px", border: p.dark ? "1px solid rgba(255,239,214,0.2)" : "1px solid rgba(45,46,56,0.15)" }}
                  >
                    {p.vertical}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className={`group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${
                      p.dark ? "text-white/30 group-hover:text-[#ffefd6]" : "text-[rgba(45,46,56,0.3)] group-hover:text-[#fa9173]"
                    }`}
                  />
                </div>
                <div>
                  <p className={`text-xs mb-2 ${p.dark ? "text-white/50" : "text-[rgba(45,46,56,0.45)]"}`}>
                    {p.industry} · {p.location}
                  </p>
                  <h3
                    className={`text-xl font-semibold leading-snug ${p.dark ? "text-[#ffefd6]" : "text-[#2d2e38]"}`}
                    style={{ fontFamily: "var(--font-serif),'IBM Plex Serif',Georgia,serif" }}
                  >
                    {p.title}
                  </h3>
                  <p className={`text-sm mt-1 font-medium ${p.dark ? "text-white/50" : "text-[rgba(45,46,56,0.45)]"}`}>
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
