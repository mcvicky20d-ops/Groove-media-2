"use client";

import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const CLIENTS = [
  "Wrangler",
  "Hilton",
  "ITC Hotels",
  "Phoenix Marketcity",
  "NAC Jewellers",
  "Amazon",
  "Myntra",
  "Crocs",
];

/**
 * Client logo wall (text wordmarks as placeholders for real logos). Builds
 * instant trust. Pass `compact` for a tighter strip.
 */
export default function LogoWall({ title = "Trusted by" }) {
  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="container-x">
        {title && (
          <p className="eyebrow mb-10 justify-center text-center">{title}</p>
        )}
        <RevealGroup
          stagger={0.06}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/10 sm:grid-cols-4"
        >
          {CLIENTS.map((c) => (
            <RevealItem
              key={c}
              className="flex items-center justify-center bg-ink px-4 py-8 transition-colors duration-500 hover:bg-smoke"
            >
              <span className="font-display text-lg uppercase tracking-wide text-bone/50 transition-colors duration-300 hover:text-gold md:text-xl">
                {c}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
