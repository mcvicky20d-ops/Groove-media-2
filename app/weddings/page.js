import WeddingHero from "@/components/wedding/WeddingHero";
import WeddingIntro from "@/components/wedding/WeddingIntro";
import FeaturedWeddings from "@/components/wedding/FeaturedWeddings";
import SignatureFilms from "@/components/wedding/SignatureFilms";
import ContentSection from "@/components/ContentSection";
import WeddingPhilosophy from "@/components/wedding/WeddingPhilosophy";
import SignatureCollection from "@/components/wedding/SignatureCollection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Wedding Films & Photography — Cinematic Weddings, Chennai",
  description:
    "Cinematic wedding films and photography by The Groove Media. Signature films, destination weddings, fine-art photography and heirloom albums — a film-first wedding studio in Chennai.",
};

export default function WeddingsPage() {
  return (
    <main>
      {/* 1 — Hero */}
      <WeddingHero />

      {/* 2 — Positioning statement + recognition */}
      <WeddingIntro />

      {/* 3 — Featured weddings (named couples + dates) */}
      <FeaturedWeddings />

      {/* 4 — The films section */}
      <SignatureFilms />

      {/* 5 — What we offer */}
      <section className="bg-ink pt-16 md:pt-24">
        <div className="container-x">
          <p className="eyebrow">What we offer</p>
          <h2 className="display-line max-w-3xl text-bone text-[clamp(2rem,5vw,3.5rem)]">
            Three ways we cover your day.
          </h2>
        </div>
      </section>
      <ContentSection
        id="wedding-films"
        eyebrow="01 — Wedding Films"
        title="Films that feel like the day."
        intro="Signature films and highlights crafted with a true filmmaking process — script, shoot, edit, colour and sound."
        items={["Signature films", "Highlights", "Teasers", "Same-day edits"]}
        image="/assets/images/cat/wed-couple-3.webp"
      />
      <ContentSection
        id="wedding-photography"
        eyebrow="02 — Wedding Photography"
        title="Candid, never staged."
        intro="Photography that catches the real moments between the big ones — and a fine-art album to keep them in."
        items={["Candid photography", "Traditional coverage", "Pre-wedding shoots", "Heirloom albums"]}
        image="/assets/images/cat/wed-couple-1.webp"
        reverse
        dark
      />
      <ContentSection
        id="destination"
        eyebrow="03 — Destination Weddings"
        title="Anywhere your story takes us."
        intro="Full-crew destination coverage, planned and shot like a production — beaches, palaces, hills and heritage venues."
        items={["Beach & hill weddings", "Palace & heritage venues", "Multi-day events", "Travel-ready crews"]}
        image="/assets/images/cat/wed-couple-2.webp"
      />

      {/* 6 — Philosophy */}
      <WeddingPhilosophy />

      {/* 7 — Premium tier */}
      <SignatureCollection />

      {/* 8 — CTA + footer */}
      <CTASection
        title="Tell us about your *day*."
        text="Share your dates and vision — we'll craft a film you'll watch for years."
      />
      <Footer />
    </main>
  );
}
