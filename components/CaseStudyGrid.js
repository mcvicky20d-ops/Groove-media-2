"use client";

import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const STUDIES = [
  { client: "Wrangler", type: "Brand Campaign", img: "/assets/images/portfolio/work-02.svg", result: "Denim launch film + fashion stills" },
  { client: "ITC Hotels", type: "Hospitality", img: "/assets/images/portfolio/work-03.svg", result: "Property & experience films" },
  { client: "Hilton", type: "Hospitality", img: "/assets/images/portfolio/work-08.svg", result: "Brand & interiors photography" },
  { client: "Phoenix Marketcity", type: "Retail", img: "/assets/images/portfolio/work-05.svg", result: "Seasonal campaign content" },
  { client: "NAC Jewellers", type: "Luxury", img: "/assets/images/portfolio/work-07.svg", result: "Product film + commercial stills" },
  { client: "Myntra", type: "Fashion / E-com", img: "/assets/images/portfolio/work-01.svg", result: "Social-first content production" },
];

export default function CaseStudyGrid({ id = "case-studies" }) {
  return (
    <section id={id} className="scroll-mt-28 bg-ink py-16 md:py-24">
      <div className="container-x">
        <p className="eyebrow">Case studies</p>
        <AnimatedHeading
          text="Work that earns *trust*."
          className="display-line max-w-3xl text-bone text-[clamp(2rem,5vw,3.75rem)]"
        />
        <RevealGroup
          stagger={0.1}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {STUDIES.map((s) => (
            <RevealItem
              key={s.client}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.1s] ease-cinematic group-hover:scale-110"
                style={{ backgroundImage: `url(${s.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="text-xs uppercase tracking-[0.3em] text-gold">
                  {s.type}
                </span>
                <h3 className="mt-1 font-display text-2xl uppercase text-bone">
                  {s.client}
                </h3>
                <p className="mt-1 text-sm text-bone/60">{s.result}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
