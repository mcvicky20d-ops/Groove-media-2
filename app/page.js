import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import WhatWeDo from "@/components/WhatWeDo";
import Approach from "@/components/Approach";
import ClientMarquee from "@/components/ClientMarquee";
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
      <WhatWeDo />
      <Approach />
      <div className="bg-ink pb-12">
        <ClientMarquee />
      </div>
      <Stats />
      <Testimonials />
      <WorkMatters />
      <CTASection />
      <Footer />
    </main>
  );
}
