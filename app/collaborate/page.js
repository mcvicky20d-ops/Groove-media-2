import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import ContentSection from "@/components/ContentSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Collaborate — Creators, Models, Brands & Agencies",
  description:
    "Collaborate with The Groove Media. We're building a network of creators, models, stylists, brands and agencies for productions in Chennai and beyond.",
};

const TABS = [
  { id: "creators", label: "Creators" },
  { id: "models", label: "Models" },
  { id: "brands", label: "Brands" },
  { id: "agencies", label: "Agencies" },
];

export default function CollaboratePage() {
  return (
    <main>
      <PageHero
        eyebrow="Collaborate"
        title="Let's build something *together*."
        subtitle="We're growing a network of creators, models, brands and agencies to make better work, faster."
        image="/assets/images/collaborate.jpg"
      />
      <SubNav items={TABS} />

      <ContentSection
        id="creators"
        eyebrow="Creators"
        title="For creators & influencers."
        intro="Partner with us on creator campaigns and original content — we handle the craft, you bring the voice."
        items={["Creator campaigns", "UGC & reels", "Collabs & features", "Long-term partnerships"]}
        image="/assets/images/portfolio/work-05.jpg"
      />
      <ContentSection
        id="models"
        eyebrow="Models & Talent"
        title="For models & stylists."
        intro="Join our roster for fashion, product and campaign shoots across the calendar."
        items={["Fashion shoots", "Product & lifestyle", "Stylists & MUAs", "Test shoots"]}
        image="/assets/images/portfolio/work-02.jpg"
        reverse
        dark
      />
      <ContentSection
        id="brands"
        eyebrow="Brands"
        title="For brands."
        intro="Looking for a production partner who can take an idea from script to screen? Let's talk."
        items={["Brand films", "Always-on content", "Photography", "Campaigns"]}
        image="/assets/images/advertising.jpg"
      />
      <ContentSection
        id="agencies"
        eyebrow="Agencies"
        title="For agencies & partners."
        intro="A reliable production house for your client work — on brief, on time, on budget."
        items={["Production partner", "Overflow capacity", "End-to-end delivery", "White-label production"]}
        image="/assets/images/portfolio/work-04.jpg"
        reverse
        dark
      />

      <CTASection
        title="Want to *collaborate?*"
        text="Tell us who you are and what you make — we'll be in touch."
      />
      <Footer />
    </main>
  );
}
