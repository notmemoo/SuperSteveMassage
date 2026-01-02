import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

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
  metadataBase: new URL("https://superstevemassage.com"),
  title: {
    default: "SuperSteve LMT | Professional Massage Therapy in University Place, WA",
    template: "%s | SuperSteve LMT",
  },
  description: "Experience 20+ years of expert massage therapy with Steve Thompson LMT. Offering deep tissue, signature massage, cupping, gua sha, and more in University Place, Washington.",
  keywords: ["massage therapy", "deep tissue massage", "cupping", "gua sha", "University Place", "WA", "Steve Thompson", "prenatal massage", "LMT", "licensed massage therapist"],
  authors: [{ name: "Steve Thompson, LMT" }],
  creator: "SuperSteve LMT",
  openGraph: {
    title: "SuperSteve LMT | Professional Massage Therapy",
    description: "20+ years of expert massage therapy in University Place, WA. Deep tissue, cupping, gua sha, and more.",
    url: "https://superstevemassage.com",
    siteName: "SuperSteve LMT",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "SuperSteve LMT - Professional Massage Therapy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperSteve LMT | Professional Massage Therapy",
    description: "20+ years of expert massage therapy in University Place, WA",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// LocalBusiness structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MassageTherapy",
  "name": "Super Steve Massage Therapy LLC",
  "alternateName": "SuperSteve LMT",
  "description": "Professional massage therapy with 20+ years of experience. Specializing in deep tissue, cupping, gua sha, and therapeutic massage in University Place, WA.",
  "url": "https://superstevemassage.com",
  "telephone": "+1-253-970-9615",
  "email": "info@superstevemassage.com",
  "image": "https://superstevemassage.com/images/steve.jpg",
  "logo": "https://superstevemassage.com/logo.png",
  "priceRange": "$45-$195",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "7406 27th St W #23",
    "addressLocality": "University Place",
    "addressRegion": "WA",
    "postalCode": "98466",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.2359,
    "longitude": -122.5487
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Massage Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Deep Tissue Massage",
          "description": "Targeted therapy for chronic muscle tension and pain relief"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "55.00",
          "priceCurrency": "USD",
          "minPrice": "55.00",
          "maxPrice": "168.00"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Steve's Signature Massage",
          "description": "Our signature full-body therapeutic experience"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "85.00",
          "priceCurrency": "USD",
          "minPrice": "85.00",
          "maxPrice": "195.00"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cupping Massage",
          "description": "Ancient therapy combined with massage for deep healing"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "84.00",
          "priceCurrency": "USD",
          "minPrice": "84.00",
          "maxPrice": "166.00"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gua Sha",
          "description": "Traditional scraping therapy for muscle recovery"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "83.00",
          "priceCurrency": "USD",
          "minPrice": "83.00",
          "maxPrice": "165.00"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Deep Stretch",
          "description": "Assisted stretching for improved flexibility and mobility"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "55.00",
          "priceCurrency": "USD",
          "minPrice": "55.00",
          "maxPrice": "133.00"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Prenatal Massage",
          "description": "Gentle, safe massage for expecting mothers"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "45.00",
          "priceCurrency": "USD",
          "minPrice": "45.00",
          "maxPrice": "77.00"
        }
      }
    ]
  },
  "founder": {
    "@type": "Person",
    "name": "Steve Thompson",
    "jobTitle": "Licensed Massage Therapist",
    "description": "20+ years of experience with background in physical therapy",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "Licensed Massage Therapist",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Washington State Department of Health"
      }
    }
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 47.2359,
      "longitude": -122.5487
    },
    "geoRadius": "30 mi"
  },
  "sameAs": [
    "https://www.massagebook.com/biz/superstevemassage"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics - Uncomment and add your measurement ID when ready */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script> */}
        {/* <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `
        }} /> */}
      </head>
      <body
        className={`${playfair.variable} ${lato.variable} antialiased bg-[#FDFBF9] text-[#2D2D2D]`}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
