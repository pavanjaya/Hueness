import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
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
    <html lang="en" className={`${GeistSans.variable} ${barlowCondensed.variable}`}>
      <body className="min-h-screen flex flex-col" style={{ background: "#fffef9" }}>
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
