import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import ClientMarquee from "@/components/ClientMarquee";
import WorkMatters from "@/components/WorkMatters";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <div className="bg-ink pb-12">
        <ClientMarquee />
      </div>
      <Stats />
      <WorkMatters />
      <CTASection />
      <Footer />
    </main>
  );
}
