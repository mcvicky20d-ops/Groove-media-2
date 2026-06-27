"use client";

import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const POINTS = [
  {
    n: "01",
    title: "Idea-first",
    desc: "Every project starts with the story — not the gear. We find the angle that makes people stop scrolling.",
  },
  {
    n: "02",
    title: "One team, end-to-end",
    desc: "Direction, camera, and post under one roof means a tighter vision and a faster, calmer process.",
  },
  {
    n: "03",
    title: "Built for the platform",
    desc: "From a 60-second TVC to a vertical cutdown — we craft for where your audience actually watches.",
  },
];

export default function Approach() {
  return (
    <section className="relative bg-smoke py-20 md:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        {/* Image with hover zoom */}
        <Reveal>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
            <div
              className="absolute inset-0 scale-105 bg-cover bg-center transition-transform duration-[1.2s] ease-cinematic group-hover:scale-110"
              style={{ backgroundImage: "url(/assets/images/approach.jpg)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">
                On set, in Chennai
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <p className="eyebrow">Our approach</p>
          <AnimatedHeading
            text="Craft you can *feel*, on every frame."
            className="display-line max-w-xl text-bone text-[clamp(2rem,5vw,3.75rem)]"
          />
          <Reveal delay={0.1}>
            <p className="lead mt-6 max-w-lg">
              We&apos;re a tight team of filmmakers who care about the details
              most people never notice — the ones that make a film feel
              expensive, honest, and unmistakably yours.
            </p>
          </Reveal>

          <RevealGroup stagger={0.1} className="mt-10 space-y-px">
            {POINTS.map((p) => (
              <RevealItem
                key={p.n}
                className="group flex gap-6 border-t border-bone/10 py-6 transition-colors hover:border-gold/30"
              >
                <span className="font-display text-sm text-gold">{p.n}</span>
                <div>
                  <h3 className="font-display text-xl uppercase text-bone transition-transform duration-300 group-hover:translate-x-1">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-md text-bone/60">{p.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
