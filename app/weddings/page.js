import PageHero from "@/components/PageHero";
import Weddings from "@/components/Weddings";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Wedding Films — Cinematic Wedding Stories, Chennai",
  description:
    "Cinematic wedding films by The Groove Media's dedicated wedding vertical — the same filmmaking process we bring to brands, applied to the films that matter most.",
};

export default function WeddingsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Weddings Vertical"
        title="The films that matter most."
        subtitle="The same filmmaking craft we bring to brands, for the day you'll relive forever."
        image="/assets/images/wedding.svg"
      />
      <Weddings />
      <CTASection
        title="Tell us about your day."
        text="Share your dates and vision — we'll craft a film you'll watch for years."
      />
      <Footer />
    </main>
  );
}
