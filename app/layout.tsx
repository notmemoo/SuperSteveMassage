import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Super Steve Massage Therapy | Professional Massage in University Place, WA",
  description: "Experience 20+ years of expert massage therapy with Steve Thompson LMT. Offering deep tissue, signature massage, cupping, gua sha, and more in University Place, Washington.",
  keywords: "massage therapy, deep tissue massage, cupping, gua sha, University Place, WA, Steve Thompson, prenatal massage",
  openGraph: {
    title: "Super Steve Massage Therapy",
    description: "Professional massage therapy services in University Place, WA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased bg-[#FDFBF9] text-[#2D2D2D]`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
