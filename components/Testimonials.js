"use client";

import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

/**
 * Client testimonials. Copy is placeholder/sample — replace with real quotes
 * and have permission before publishing brand names.
 */
const QUOTES = [
  {
    quote:
      "They understood the brand in one conversation and turned it into a film that genuinely moved our audience. Effortless from brief to delivery.",
    name: "Marketing Lead",
    org: "Hospitality Brand",
  },
  {
    quote:
      "The craft is on another level — every frame felt intentional. Our campaign performed beyond what we projected.",
    name: "Brand Manager",
    org: "Retail / Fashion",
  },
  {
    quote:
      "End-to-end, on time, and zero drama. The Groove Media is the team we call first for anything on camera.",
    name: "Creative Producer",
    org: "Agency Partner",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-ink py-20 md:py-28">
      <div className="container-x">
        <p className="eyebrow">What clients say</p>
        <AnimatedHeading
          text="Trusted to tell the *story*."
          className="display-line max-w-3xl text-bone text-[clamp(2rem,5vw,3.75rem)]"
        />

        <RevealGroup
          stagger={0.12}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {QUOTES.map((t) => (
            <RevealItem
              key={t.org}
              className="group flex h-full flex-col justify-between rounded-2xl border border-bone/10 bg-smoke/60 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40"
            >
              <div>
                <span className="font-serif text-5xl leading-none text-gold/70">
                  &ldquo;
                </span>
                <p className="-mt-4 text-lg leading-relaxed text-bone/80">
                  {t.quote}
                </p>
              </div>
              <div className="mt-8 border-t border-bone/10 pt-5">
                <p className="font-display text-sm uppercase tracking-wide text-bone">
                  {t.name}
                </p>
                <p className="text-sm text-gold">{t.org}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
