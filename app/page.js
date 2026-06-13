import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import PillarCards from "@/components/PillarCards";
import Approach from "@/components/Approach";
import FeaturedWork from "@/components/FeaturedWork";
import LogoWall from "@/components/LogoWall";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import WorkMatters from "@/components/WorkMatters";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <MarqueeStrip />
      <PillarCards />
      <Approach />
      <FeaturedWork />
      <LogoWall title="Trusted by" />
      <Stats />
      <Testimonials />
      <WorkMatters />
      <CTASection
        title="Have a story to *tell?*"
        text="Let's create something meaningful together."
      />
      <Footer />
    </main>
  );
}
