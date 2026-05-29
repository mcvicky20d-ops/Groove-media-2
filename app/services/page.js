import PageHero from "@/components/PageHero";
import WhatWeDo from "@/components/WhatWeDo";
import Approach from "@/components/Approach";
import Production from "@/components/Production";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services — Advertising Films & Brand Campaigns",
  description:
    "What we do: advertising films, brand campaigns, commercial photography and digital content. End-to-end production — creative direction, cinematography, post and campaign content — by The Groove Media, Chennai.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="We make films that *move* people."
        subtitle="From the first concept to the last frame — handled end-to-end, under one roof."
        image="/assets/images/portfolio/work-04.svg"
      />
      <WhatWeDo />
      <Approach />
      <Production />
      <Stats />
      <CTASection title="Let's build your next campaign." />
      <Footer />
    </main>
  );
}
