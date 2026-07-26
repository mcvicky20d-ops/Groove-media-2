"use client";

import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const STATS = [
  { value: "8+", label: "Years shooting weddings" },
  { value: "200+", label: "Couples filmed" },
  { value: "15+", label: "Cities & destinations" },
  { value: "A→Z", label: "Films, photos & albums" },
];

/**
 * Positioning statement + recognition strip — the studio's wedding manifesto
 * with a row of credibility numbers.
 */
export default function WeddingIntro() {
  return (
    <section className="scroll-mt-28 bg-ink py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow justify-center">The studio</p>
          <AnimatedHeading
            text="Modern wedding filmmaking, made in *Chennai*."
            className="display-line text-bone text-[clamp(2rem,5vw,3.75rem)]"
          />
          <Reveal delay={0.1}>
            <p className="lead mx-auto mt-8 max-w-2xl">
              We&apos;re a film-first studio that treats a wedding like a
              production — direction, cinematography, and finish under one roof.
              The result isn&apos;t a highlight reel; it&apos;s a film you&apos;ll
              still want to watch years from now.
            </p>
          </Reveal>
        </div>

        <RevealGroup
          stagger={0.1}
          className="mt-16 grid grid-cols-2 gap-y-12 border-t border-bone/10 pt-14 md:grid-cols-4"
        >
          {STATS.map((s) => (
            <RevealItem key={s.label} className="text-center">
              <div className="font-display text-4xl text-[#E0B872] md:text-6xl">
                {s.value}
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-bone/55">
                {s.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
