import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import ContentSection from "@/components/ContentSection";
import WeddingStories from "@/components/WeddingStories";
import Weddings from "@/components/Weddings";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Wedding Films & Photography — Cinematic Weddings, Chennai",
  description:
    "Cinematic wedding films and photography by The Groove Media. Signature films, destination weddings and candid photography — the same filmmaking craft we bring to brands.",
};

const TABS = [
  { id: "wedding-films", label: "Wedding Films" },
  { id: "wedding-photography", label: "Wedding Photography" },
  { id: "destination", label: "Destination Weddings" },
  { id: "stories", label: "Stories" },
  { id: "experience", label: "Experience" },
];

export default function WeddingsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Weddings"
        title="Timeless wedding films and *photography*."
        subtitle="Premium, unhurried, and deeply personal — the films you'll relive forever."
        image="/assets/images/wedding-hero.jpg"
      />
      <SubNav items={TABS} />

      <ContentSection
        id="wedding-films"
        eyebrow="Wedding Films"
        title="Films that feel like the day."
        intro="Signature films and highlights crafted with a true filmmaking process."
        items={["Signature films", "Highlights", "Teasers", "Same-day edits"]}
        image="/assets/images/wedding-1.jpg"
      />
      <ContentSection
        id="wedding-photography"
        eyebrow="Wedding Photography"
        title="Candid, never staged."
        intro="Photography that catches the real moments between the big ones."
        items={["Candid photography", "Traditional coverage", "Pre-wedding shoots", "Premium albums"]}
        image="/assets/images/wedding-2.jpg"
        reverse
        dark
      />
      <ContentSection
        id="destination"
        eyebrow="Destination Weddings"
        title="Anywhere your story takes us."
        intro="Full-crew destination coverage, planned and shot like a production."
        items={["Beach & hill weddings", "Palace & heritage venues", "Multi-day events", "Travel-ready crews"]}
        image="/assets/images/wedding-3.jpg"
      />

      <WeddingStories />

      <div id="experience" className="scroll-mt-28">
        <Weddings />
      </div>

      <CTASection
        title="Tell us about your *day*."
        text="Share your dates and vision — we'll craft a film you'll watch for years."
      />
      <Footer />
    </main>
  );
}
