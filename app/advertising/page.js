import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import SectionHeading from "@/components/SectionHeading";
import BrandRow from "@/components/BrandRow";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Advertising — Brand Films, Photography & Content, Chennai",
  description:
    "Advertising production by The Groove Media: brand & ad films, photography, content production and integrated campaigns for modern brands in Chennai.",
};

const TABS = [
  { id: "brand-films", label: "Brand Films" },
  { id: "photography", label: "Photography" },
  { id: "content-production", label: "Content Production" },
  { id: "campaigns", label: "Campaigns" },
];

const L = "/assets/images/brands";

// Logos + case media are placeholders — drop each brand's real logo (`logo`),
// case film (`video`) and stills (`images`) at these paths and it all shows.
const BRAND_FILMS = [
  { name: "Sree Kumaran", logo: `${L}/sree-kumaran.svg`, sector: "Jewellery", blurb: "Brand and product films for the heritage jeweller — crafted to make gold feel timeless.", video: "/assets/videos/showreel.mp4", images: ["/assets/images/cat/jewel-1.webp", "/assets/images/cat/jewel-3.webp", "/assets/images/cat/jewel-7.webp"] },
  { name: "Westin", logo: `${L}/westin.svg`, sector: "Hospitality", blurb: "Property and experience films for the Westin — selling the feeling of a stay.", video: "/assets/videos/work/work-01.mp4", images: ["/assets/images/cat/arch-1.jpg", "/assets/images/cat/arch-2.jpg", "/assets/images/portfolio/work-03.jpg"] },
  { name: "Refex", logo: `${L}/refex.svg`, sector: "Automotive / EV", blurb: "The EV fleet brand and campaign shoot for Refex Mobility — a clean-energy story on the move.", video: "/assets/videos/work/work-04.mp4", images: ["/assets/images/cat/auto-5.webp", "/assets/images/cat/auto-6.webp", "/assets/images/cat/auto-7.webp"] },
  { name: "Triune Tech", logo: `${L}/triune-tech.svg`, sector: "Technology", blurb: "Corporate and product films for Triune — clarity and confidence for a technical story.", images: ["/assets/images/cat/auto-1.webp", "/assets/images/portfolio/work-06.jpg"] },
];

const CONTENT_BRANDS = [
  { name: "Phoenix Marketcity", logo: `${L}/phoenix.svg`, sector: "Retail", blurb: "Always-on seasonal content that keeps the mall's calendar alive.", images: ["/assets/images/cat/arch-2.jpg", "/assets/images/cat/photo-1.webp"] },
  { name: "Pacifica", logo: `${L}/pacifica.svg`, sector: "Real Estate", blurb: "Walkthroughs and lifestyle content for premium homes.", images: ["/assets/images/realestate-1.jpg", "/assets/images/cat/arch-5.jpg"] },
  { name: "Wrangler", logo: `${L}/wrangler.svg`, sector: "Fashion / Denim", blurb: "Editorial fashion content and campaign stills.", images: ["/assets/images/cat/photo-1.webp", "/assets/images/cat/photo-2.webp"] },
  { name: "Jairam", logo: `${L}/jairam.svg`, sector: "Jewellery", blurb: "Social-first jewellery content, shot for scroll-stopping detail.", images: ["/assets/images/cat/jewel-4.webp", "/assets/images/cat/jewel-2.webp"] },
  { name: "Hilton", logo: `${L}/hilton.svg`, sector: "Hospitality", blurb: "Brand and interiors content for the property.", images: ["/assets/images/hotel-1.jpg", "/assets/images/hotel-2.jpg", "/assets/images/cat/arch-3.jpg"] },
];

const CAMPAIGN_BRANDS = [
  { name: "Myntra", logo: `${L}/myntra.svg`, sector: "Fashion / E-commerce", blurb: "Social-first campaign content, cut for every platform and format.", video: "/assets/videos/work/work-04.mp4", images: ["/assets/images/cat/photo-2.webp", "/assets/images/cat/jewel-4.webp"] },
  { name: "Narayana Pearls", logo: `${L}/narayana-pearls.svg`, sector: "Jewellery", blurb: "A pearl-and-gold campaign, shot fine-art.", images: ["/assets/images/cat/jewel-1.webp", "/assets/images/cat/jewel-3.webp"] },
  { name: "Goa Tourism — TITO's", logo: `${L}/goa-titos.svg`, sector: "Nightlife / Casino", blurb: "A high-energy campaign for Goa's nightlife and casino scene.", images: ["/assets/images/cat/auto-2.webp", "/assets/images/cat/auto-3.webp"] },
  { name: "NAC Jewellers", logo: `${L}/nac.svg`, sector: "Luxury", blurb: "Product film and commercial stills for the flagship jeweller.", images: ["/assets/images/cat/jewel-5.jpg", "/assets/images/cat/jewel-6.jpg", "/assets/images/portfolio/work-07.jpg"] },
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

      <SectionHeading id="brand-films" eyebrow="01 — Brand Films" title="Brand films that say *something*." />
      <div className="bg-ink pb-16 md:pb-24">
        <BrandRow label="" brands={BRAND_FILMS} />
      </div>

      <SectionHeading id="photography" eyebrow="02 — Photography" title="Photography with cinematic *intent*." />

      <SectionHeading id="content-production" eyebrow="03 — Content Production" title="An always-on content *engine*." />
      <div className="bg-ink pb-16 md:pb-24">
        <BrandRow label="" brands={CONTENT_BRANDS} />
      </div>

      <SectionHeading id="campaigns" eyebrow="04 — Campaigns" title="One idea, *every platform*." />
      <div className="bg-ink pb-16 md:pb-24">
        <BrandRow label="" brands={CAMPAIGN_BRANDS} />
      </div>

      <CTASection title="Have a campaign in *mind?*" />
      <Footer />
    </main>
  );
}
