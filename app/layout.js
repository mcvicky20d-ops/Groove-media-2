import { Anton, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import ShaderBackground from "@/components/ShaderBackground";
import GrainOverlay from "@/components/GrainOverlay";
import FloatingActions from "@/components/FloatingActions";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import ScrollProgress from "@/components/ScrollProgress";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Elegant serif used for italic emphasis words inside display headings —
// gives the editorial, premium "film studio" feel (A24-style).
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic", "normal"],
  variable: "--font-serif",
  display: "swap",
});

const siteUrl = "https://thegroovemedia.in";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Groove Media | Film Production Company in Chennai",
    template: "%s | The Groove Media",
  },
  description:
    "The Groove Media is a film production company in Chennai. Advertising film makers producing brand campaigns, commercial photography and digital content for brands, people, and ideas. Established 2018.",
  keywords: [
    "film production Chennai",
    "film production company Chennai",
    "advertising film makers Chennai",
    "ad film makers Chennai",
    "brand films",
    "commercial photography Chennai",
    "video production company Chennai",
    "The Groove Media",
    "Kodi cinematographer",
  ],
  authors: [{ name: "The Groove Media" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "The Groove Media",
    title: "The Groove Media | Film Production Company in Chennai",
    description:
      "We produce films. For brands, people, and ideas. Advertising film makers based in Chennai.",
    images: [
      {
        url: "/assets/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "The Groove Media — film production company in Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Groove Media | Film Production Company in Chennai",
    description: "We produce films. For brands, people, and ideas.",
    images: ["/assets/images/og-image.svg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "The Groove Media",
  description:
    "Film and visual production company based in Chennai producing advertising films, brand campaigns, commercial photography and digital content.",
  url: siteUrl,
  telephone: "+91-78128-91696",
  email: "mediathegroove@gmail.com",
  foundingDate: "2018",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5, Ganapathy St, Ramakrishnapuram, West Mambalam",
    addressLocality: "Chennai",
    postalCode: "600033",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 13.042877, longitude: 80.224594 },
  openingHours: "Mo-Sa 10:00-20:00",
  sameAs: ["https://www.instagram.com/the.groove.media"],
};

// Showreel schema — update contentUrl/thumbnailUrl once the reel is uploaded.
const videoLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "The Groove Media — Showreel",
  description:
    "Showreel of advertising films, brand campaigns and commercial work by The Groove Media, a film production company in Chennai.",
  thumbnailUrl: [`${siteUrl}/assets/images/hero-poster.svg`],
  uploadDate: "2024-01-01",
  contentUrl: `${siteUrl}/assets/videos/showreel.mp4`,
  publisher: {
    "@type": "Organization",
    name: "The Groove Media",
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/assets/images/logo.png`,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} ${playfair.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd) }}
        />
        <ShaderBackground />
        <GrainOverlay />
        <ScrollProgress />
        <Preloader />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
        <FloatingActions />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
