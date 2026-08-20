import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import ContentSection from "@/components/ContentSection";
import BrandRow from "@/components/BrandRow";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import LogoWall from "@/components/LogoWall";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Advertising — Brand Films, Photography & Content, Chennai",
  description:
    "Advertising production by The Groove Media: brand & ad films, commercial photography, content production, hospitality & real estate, and integrated campaigns for modern brands in Chennai.",
};

const TABS = [
  { id: "brand-films", label: "Brand Films" },
  { id: "commercial-photography", label: "Commercial Photography" },
  { id: "content-production", label: "Content Production" },
  { id: "hospitality", label: "Hospitality & Real Estate" },
  { id: "campaigns", label: "Campaigns" },
  { id: "case-studies", label: "Case Studies" },
];

// Brand work per section. Media are placeholders — drop each brand's real
// film + stills into `video` / `images` and the modal shows them automatically.
const BRAND_FILMS = [
  {
    name: "Sree Kumaran",
    sector: "Jewellery",
    blurb:
      "Brand and product films for the heritage jeweller — crafted to make gold feel timeless.",
    video: "/assets/videos/showreel.mp4",
    images: [
      "/assets/images/cat/jewel-1.webp",
      "/assets/images/cat/jewel-3.webp",
      "/assets/images/cat/jewel-7.webp",
    ],
  },
  {
    name: "Westin",
    sector: "Hospitality",
    blurb:
      "Property and experience films for the Westin — selling the feeling of a stay.",
    images: [
      "/assets/images/cat/arch-1.jpg",
      "/assets/images/cat/arch-2.jpg",
      "/assets/images/portfolio/work-03.jpg",
    ],
  },
  {
    name: "Refex",
    sector: "Automotive / EV",
    blurb:
      "The EV fleet brand and campaign shoot for Refex Mobility — a clean-energy story on the move.",
    video: "/assets/videos/work/work-01.mp4",
    images: [
      "/assets/images/cat/auto-5.webp",
      "/assets/images/cat/auto-6.webp",
      "/assets/images/cat/auto-7.webp",
    ],
  },
  {
    name: "Triune Tech",
    sector: "Technology",
    blurb:
      "Corporate and product films for Triune — clarity and confidence for a technical story.",
    images: ["/assets/images/cat/auto-1.webp", "/assets/images/portfolio/work-06.jpg"],
  },
];

const CONTENT_BRANDS = [
  {
    name: "Phoenix Marketcity",
    sector: "Retail",
    blurb: "Always-on seasonal content that keeps the mall's calendar alive.",
    images: ["/assets/images/cat/arch-2.jpg", "/assets/images/cat/photo-1.webp"],
  },
  {
    name: "Pacifica",
    sector: "Real Estate",
    blurb: "Walkthroughs and lifestyle content for premium homes.",
    images: ["/assets/images/realestate-1.jpg", "/assets/images/cat/arch-5.jpg"],
  },
  {
    name: "Wrangler",
    sector: "Fashion / Denim",
    blurb: "Editorial fashion content and campaign stills.",
    images: ["/assets/images/cat/photo-1.webp", "/assets/images/cat/photo-2.webp"],
  },
  {
    name: "Jairam",
    sector: "Jewellery",
    blurb: "Social-first jewellery content, shot for scroll-stopping detail.",
    images: ["/assets/images/cat/jewel-4.webp", "/assets/images/cat/jewel-2.webp"],
  },
  {
    name: "Hilton",
    sector: "Hospitality",
    blurb: "Brand and interiors content for the property.",
    images: [
      "/assets/images/hotel-1.jpg",
      "/assets/images/hotel-2.jpg",
      "/assets/images/cat/arch-3.jpg",
    ],
  },
];

const CAMPAIGN_BRANDS = [
  {
    name: "Myntra",
    sector: "Fashion / E-commerce",
    blurb: "Social-first campaign content, cut for every platform and format.",
    video: "/assets/videos/work/work-04.mp4",
    images: ["/assets/images/cat/photo-2.webp", "/assets/images/cat/jewel-4.webp"],
  },
  {
    name: "Narayana Pearls",
    sector: "Jewellery",
    blurb: "A pearl-and-gold campaign, shot fine-art.",
    images: ["/assets/images/cat/jewel-1.webp", "/assets/images/cat/jewel-3.webp"],
  },
  {
    name: "Goa Tourism — TITO's",
    sector: "Nightlife / Casino",
    blurb: "A high-energy campaign for Goa's nightlife and casino scene.",
    images: ["/assets/images/cat/auto-2.webp", "/assets/images/cat/auto-3.webp"],
  },
  {
    name: "NAC Jewellers",
    sector: "Luxury",
    blurb: "Product film and commercial stills for the flagship jeweller.",
    images: [
      "/assets/images/cat/jewel-5.jpg",
      "/assets/images/cat/jewel-6.jpg",
      "/assets/images/portfolio/work-07.jpg",
    ],
  },
];

export default function AdvertisingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Advertising"
        title="Films and campaigns for modern *brands*."
        subtitle="Story-led advertising — from a single hero film to an always-on content engine."
        image="/assets/images/advertising.jpg"
      />
      <SubNav items={TABS} />

      <ContentSection
        id="brand-films"
        eyebrow="01 — Brand Films"
        title="Brand films that say something."
        intro="Concept-led films built to make a brand felt, not just seen."
        items={["Ad films", "Product films", "Corporate films", "Launch campaigns"]}
        image="/assets/images/cat/auto-1.webp"
      />
      <div className="bg-ink pb-16 md:pb-20">
        <BrandRow label="Brands we've filmed" brands={BRAND_FILMS} />
      </div>

      <ContentSection
        id="commercial-photography"
        eyebrow="02 — Commercial Photography"
        title="Photography with cinematic intent."
        intro="Stills shot with the same eye for light and detail as our films."
        items={["Product photography", "Fashion photography", "Hospitality photography", "Interior photography"]}
        image="/assets/images/cat/photo-3.webp"
        reverse
        dark
      />

      <ContentSection
        id="content-production"
        eyebrow="03 — Content Production"
        title="An always-on content engine."
        intro="Consistent, platform-native content that keeps brands present and relevant."
        items={["Monthly retainers", "Reels", "Social content", "Creator campaigns"]}
        image="/assets/images/cat/jewel-7.webp"
      />
      <div className="bg-ink pb-16 md:pb-20">
        <BrandRow label="Brands on retainer" brands={CONTENT_BRANDS} />
      </div>

      <ContentSection
        id="hospitality"
        eyebrow="04 — Hospitality & Real Estate"
        title="Spaces, shot to sell a feeling."
        intro="Films and stills that capture the experience of a place — for hotels, resorts and developments."
        items={["Property & resort films", "Hotel brand content", "Interior photography", "Walkthrough films"]}
        image="/assets/images/portfolio/work-03.jpg"
        reverse
        dark
      />

      <ContentSection
        id="campaigns"
        eyebrow="05 — Campaigns"
        title="One idea, every platform."
        intro="Integrated campaigns with a single visual language across every cutdown and format."
        items={["Integrated campaigns", "360° content", "Launch films", "Performance creatives"]}
        image="/assets/images/cat/auto-5.webp"
      />
      <div className="bg-ink pb-16 md:pb-20">
        <BrandRow label="Campaign clients" brands={CAMPAIGN_BRANDS} />
      </div>

      <CaseStudyGrid />
      <LogoWall title="Brands we've worked with" />
      <CTASection title="Have a campaign in *mind?*" />
      <Footer />
    </main>
  );
}
