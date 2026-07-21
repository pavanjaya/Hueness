import Hero from "@/components/sections/Hero";
import ClientStrip from "@/components/sections/ClientStrip";
import FeaturedWork from "@/components/sections/FeaturedWork";
import StudioStatement from "@/components/sections/StudioStatement";
import ServicesSection from "@/components/sections/ServicesSection";
import InsightsSection from "@/components/sections/InsightsSection";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientStrip />
      <StudioStatement />
      <FeaturedWork />
      <ServicesSection />
      <InsightsSection />
      <CTA />
    </>
  );
}
