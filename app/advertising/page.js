import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import SectionHeading from "@/components/SectionHeading";
import PhotoCollage from "@/components/PhotoCollage";
import BrandRow from "@/components/BrandRow";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Advertising — Brand Films, Photography & Content, Chennai",
  description:
    "Advertising films, brand films, campaign content and commercial photography by The Groove Media — for brands and creative teams in Chennai.",
};

const TABS = [
  { id: "brand-films", label: "Brand Films" },
  { id: "photography", label: "Photography" },
  { id: "content-production", label: "Content Production" },
  { id: "campaigns", label: "Campaigns" },
  { id: "case-studies", label: "Case Studies" },
];

const L = "/assets/images/brands";

// Real client logos live in /assets/images/brands. Case film (`video`) and
// stills (`images`) are still placeholders — swap them when supplied.
const BRAND_FILMS = [
  { name: "Sree Kumaran", logo: `${L}/sree-kumaran.webp`, sector: "Jewellery", blurb: "Brand and product films for the heritage jeweller — crafted to make gold feel timeless.", video: "/assets/videos/showreel.mp4", images: ["/assets/images/cat/jewel-1.webp", "/assets/images/cat/jewel-3.webp", "/assets/images/cat/jewel-7.webp"] },
  { name: "The Westin", logo: `${L}/westin.webp`, sector: "Hospitality", blurb: "Property and experience films for the Westin — selling the feeling of a stay.", video: "/assets/videos/work/work-01.mp4", images: ["/assets/images/cat/arch-1.jpg", "/assets/images/cat/arch-2.jpg", "/assets/images/portfolio/work-03.jpg"] },
  { name: "Refex", logo: `${L}/refex.webp`, sector: "Automotive / EV", blurb: "The EV fleet brand and campaign shoot for Refex Mobility — a clean-energy story on the move.", video: "/assets/videos/work/work-04.mp4", images: ["/assets/images/cat/auto-5.webp", "/assets/images/cat/auto-6.webp", "/assets/images/cat/auto-7.webp"] },
  { name: "Triune Tech", logo: `${L}/triune-tech.webp`, sector: "Technology", blurb: "Corporate and product films for Triune — clarity and confidence for a technical story.", images: ["/assets/images/cat/auto-1.webp", "/assets/images/portfolio/work-06.jpg"] },
];

const CONTENT_BRANDS = [
  { name: "Phoenix Marketcity", logo: `${L}/phoenix.webp`, sector: "Retail", blurb: "Always-on seasonal content that keeps the mall's calendar alive.", images: ["/assets/images/cat/arch-2.jpg", "/assets/images/cat/photo-1.webp"] },
  { name: "Pacifica", logo: `${L}/pacifica.svg`, sector: "Real Estate", blurb: "Walkthroughs and lifestyle content for premium homes.", images: ["/assets/images/realestate-1.jpg", "/assets/images/cat/arch-5.jpg"] },
  { name: "Wrangler", logo: `${L}/wrangler.webp`, sector: "Fashion / Denim", blurb: "Editorial fashion content and campaign stills.", images: ["/assets/images/cat/photo-1.webp", "/assets/images/cat/photo-2.webp"] },
  { name: "Jairam", logo: `${L}/jairam.svg`, sector: "Jewellery", blurb: "Social-first jewellery content, shot for scroll-stopping detail.", images: ["/assets/images/cat/jewel-4.webp", "/assets/images/cat/jewel-2.webp"] },
  { name: "Hilton", logo: `${L}/hilton.webp`, sector: "Hospitality", blurb: "Brand and interiors content for the property.", images: ["/assets/images/hotel-1.jpg", "/assets/images/hotel-2.jpg", "/assets/images/cat/arch-3.jpg"] },
];

const CAMPAIGN_BRANDS = [
  { name: "Myntra", logo: `${L}/myntra.webp`, sector: "Fashion / E-commerce", blurb: "Social-first campaign content, cut for every platform and format.", video: "/assets/videos/work/work-04.mp4", images: ["/assets/images/cat/photo-2.webp", "/assets/images/cat/jewel-4.webp"] },
  { name: "Narayana Pearls", logo: `${L}/narayana-pearls.webp`, sector: "Jewellery", blurb: "A pearl-and-gold campaign, shot fine-art.", images: ["/assets/images/cat/jewel-1.webp", "/assets/images/cat/jewel-3.webp"] },
  { name: "Goa Tourism — Casino / TITO's", logo: `${L}/goa-titos.webp`, sector: "Nightlife / Casino", blurb: "A high-energy campaign for Goa's nightlife and casino scene.", images: ["/assets/images/cat/auto-2.webp", "/assets/images/cat/auto-3.webp"] },
  { name: "NAC", logo: `${L}/nac.webp`, sector: "Luxury Jewellery", blurb: "Product film and commercial stills for the flagship jeweller.", images: ["/assets/images/cat/jewel-5.jpg", "/assets/images/cat/jewel-6.jpg", "/assets/images/portfolio/work-07.jpg"] },
];

export default function AdvertisingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Advertising"
        title="Films that make brands worth *watching*."
        subtitle="We create advertising films, brand films, campaign content and commercial photography for brands and creative teams — from the first idea to the final frame."
        image="/assets/images/advertising.jpg"
      />
      <SubNav items={TABS} />

      {/* 01 — Brand Films */}
      <SectionHeading
        id="brand-films"
        eyebrow="01 — Brand Films"
        title="Give your brand a story people can *remember*."
        sub="Selected brand films by Groove Media."
      />
      <div className="bg-ink pb-16 md:pb-24">
        <BrandRow brands={BRAND_FILMS} cta="View Project" />
      </div>

      {/* 02 — Photography */}
      <SectionHeading
        id="photography"
        eyebrow="02 — Photography"
        title="Still images. Strong visual *identity*."
      />
      <div className="bg-ink pb-16 md:pb-24">
        <div className="mt-10">
          <PhotoCollage />
        </div>
      </div>

      {/* 03 — Content Production */}
      <SectionHeading
        id="content-production"
        eyebrow="03 — Content Production"
        title="One brand. Many *stories*."
        sub="Visual content created to work across campaigns, digital platforms and social media while maintaining a consistent brand language."
      />
      <div className="bg-ink pb-16 md:pb-24">
        <BrandRow brands={CONTENT_BRANDS} cta="View Project" />
      </div>

      {/* 04 — Campaigns */}
      <SectionHeading
        id="campaigns"
        eyebrow="04 — Campaigns"
        title="One idea. Many *frames*."
        sub="Campaign films and visual content created to work together across platforms."
      />
      <div className="bg-ink pb-16 md:pb-24">
        <BrandRow brands={CAMPAIGN_BRANDS} cta="View Campaign" />
      </div>

      {/* Case Studies */}
      <SectionHeading
        id="case-studies"
        eyebrow="Case Studies"
        title="The work behind the *work*."
        sub="A deeper look at selected projects, the thinking behind them and how they came together."
      />
      <div className="bg-ink pb-20 md:pb-28">
        <div className="container-x mt-10">
          <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <li
                key={i}
                className="flex aspect-[5/3] items-center justify-center rounded-lg border border-dashed border-bone/15 bg-smoke/30"
              >
                <span className="text-xs uppercase tracking-[0.25em] text-bone/35">
                  Brand Logo
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm italic text-bone/40">
            Detailed case studies coming soon.
          </p>
        </div>
      </div>

      <CTASection
        title="Have a campaign in *mind?*"
        text="Let's turn the idea into something people want to watch."
      />
      <Footer />
    </main>
  );
}
