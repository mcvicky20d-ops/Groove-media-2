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
 * Client logo wall. Logos ship on white backgrounds, so tiles are white and
 * edge-to-edge (hairline gridlines between them). On hover a tile lifts with a
 * gold inset ring while its logo scales up — an on-theme, restrained animation.
 */
export default function LogoWall({ title = "Trusted by" }) {
  return (
    <section className="bg-ink py-16 md:py-24">
      <div className="container-x">
        {title && <p className="eyebrow mb-2">{title}</p>}
        <p className="max-w-md text-bone/60">
          Trusted by brands that care about the frame.
        </p>

        <RevealGroup
          stagger={0.06}
          className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-bone/10 lg:grid-cols-4"
        >
          {CLIENTS.map((c) => (
            <RevealItem key={c.name}>
              <div className="group relative flex aspect-[5/3] items-center justify-center bg-white p-2 transition-colors duration-500 sm:p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  loading="lazy"
                  className="max-h-[88%] w-auto max-w-[94%] object-contain transition-transform duration-500 ease-cinematic group-hover:scale-[1.08]"
                />
                {/* Gold inset ring on hover */}
                <span className="pointer-events-none absolute inset-0 rounded-none ring-0 ring-inset ring-gold transition-all duration-300 group-hover:ring-[6px]" />
              </div>
            </RevealItem>
          ))}

          {/* Accent tile completes the 8-cell grid and ties to the 50+ stat */}
          <RevealItem>
            <div className="group flex aspect-[5/3] flex-col items-center justify-center bg-gold p-6 text-center">
              <span className="font-display text-3xl uppercase leading-none text-ink transition-transform duration-500 ease-cinematic group-hover:scale-110 md:text-4xl">
                50+
              </span>
              <span className="mt-1 text-xs uppercase tracking-[0.25em] text-ink/70">
                Brands
              </span>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
