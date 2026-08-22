"use client";

import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

// Real client logos live in /public/assets/images/clients (drop-in swappable).
const CLIENTS = [
  { name: "ITC Hotels", logo: "/assets/images/clients/itc-hotels.webp" },
  { name: "Hilton", logo: "/assets/images/clients/hilton.webp" },
  { name: "Phoenix Marketcity", logo: "/assets/images/clients/phoenix-marketcity.webp" },
  { name: "Myntra", logo: "/assets/images/clients/myntra.webp" },
  { name: "Wrangler India", logo: "/assets/images/clients/wrangler-india.webp" },
  { name: "NAC Jewellers", logo: "/assets/images/clients/nac-jewellers.webp" },
  { name: "Crocs India", logo: "/assets/images/clients/crocs-india.webp" },
];

/**
 * Client logo wall. Logos ship on white backgrounds, so each sits on a light
 * chip to read cleanly against the dark site.
 */
export default function LogoWall({ title = "Trusted by" }) {
  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="container-x">
        {title && (
          <p className="eyebrow mb-3 justify-center text-center">{title}</p>
        )}
        <p className="mx-auto mb-10 max-w-md text-center text-bone/60">
          Trusted by brands that care about the frame.
        </p>

        <RevealGroup
          stagger={0.06}
          className="mx-auto flex max-w-5xl flex-wrap justify-center gap-4"
        >
          {CLIENTS.map((c) => (
            <RevealItem
              key={c.name}
              className="flex h-24 w-[calc(50%-0.5rem)] items-center justify-center rounded-xl bg-bone/95 p-5 transition-transform duration-500 ease-cinematic hover:scale-[1.03] sm:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.logo}
                alt={`${c.name} logo`}
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
