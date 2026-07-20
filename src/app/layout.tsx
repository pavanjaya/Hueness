import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Hueness — Strategic Brand Innovation & Experience Design Studio",
    template: "%s | Hueness",
  },
  description:
    "A purpose-led troupe of strategists, designers & engineers transforming bold ideas into global market-ready brands. Design, Tech, Marketing & In-House Products.",
  keywords: ["branding", "UX design", "AI tech", "CGI animation", "brand strategy", "Bangalore", "Nashik"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.hueness.com",
    siteName: "Hueness",
    title: "Hueness — Strategic Brand Innovation & Experience Design Studio",
    description:
      "Transforming bold ideas into global market-ready brands at the intersection of design intuition, strategic insight & emerging AI tech integration.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="min-h-screen flex flex-col" style={{ background: "#f4f1eb" }}>
        {/* Custom cursor elements */}
        <div id="cursor-dot" />
        <div id="cursor-ring" />
        <CustomCursor />
        <Navbar />
        <main className="flex-1 page-enter">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
