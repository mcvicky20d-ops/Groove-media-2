import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import ContentSection from "@/components/ContentSection";
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

export default function AdvertisingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Advertising"
        title="Films and campaigns for modern *brands*."
        subtitle="Story-led advertising — from a single hero film to an always-on content engine."
        image="/assets/images/advertising.svg"
      />
      <SubNav items={TABS} />

      <ContentSection
        id="brand-films"
        eyebrow="01 — Brand Films"
        title="Brand films that say something."
        intro="Concept-led films built to make a brand felt, not just seen."
        items={["Ad films", "Product films", "Corporate films", "Launch campaigns"]}
        image="/assets/images/portfolio/work-01.svg"
      />
      <ContentSection
        id="commercial-photography"
        eyebrow="02 — Commercial Photography"
        title="Photography with cinematic intent."
        intro="Stills shot with the same eye for light and detail as our films."
        items={["Product photography", "Fashion photography", "Hospitality photography", "Interior photography"]}
        image="/assets/images/portfolio/work-02.svg"
        reverse
        dark
      />
      <ContentSection
        id="content-production"
        eyebrow="03 — Content Production"
        title="An always-on content engine."
        intro="Consistent, platform-native content that keeps brands present and relevant."
        items={["Monthly retainers", "Reels", "Social content", "Creator campaigns"]}
        image="/assets/images/portfolio/work-05.svg"
      />
      <ContentSection
        id="hospitality"
        eyebrow="04 — Hospitality & Real Estate"
        title="Spaces, shot to sell a feeling."
        intro="Films and stills that capture the experience of a place — for hotels, resorts and developments."
        items={["Property & resort films", "Hotel brand content", "Interior photography", "Walkthrough films"]}
        image="/assets/images/portfolio/work-03.svg"
        reverse
        dark
      />
      <ContentSection
        id="campaigns"
        eyebrow="05 — Campaigns"
        title="One idea, every platform."
        intro="Integrated campaigns with a single visual language across every cutdown and format."
        items={["Integrated campaigns", "360° content", "Launch films", "Performance creatives"]}
        image="/assets/images/portfolio/work-04.svg"
      />

      <CaseStudyGrid />
      <LogoWall title="Brands we've worked with" />
      <CTASection title="Have a campaign in *mind?*" />
      <Footer />
    </main>
  );
}
