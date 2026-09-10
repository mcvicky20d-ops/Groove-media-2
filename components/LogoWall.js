"use client";

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

function Logo({ name, logo }) {
  return (
    <div className="mx-3 flex h-24 w-44 shrink-0 items-center justify-center rounded-xl bg-white p-4 sm:h-28 sm:w-52">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo}
        alt={`${name} logo`}
        loading="lazy"
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );
}

/**
 * Trusted By — an auto-scrolling logo carousel. The track holds two copies of
 * the logos and loops seamlessly; it pauses on hover, and edge fades keep the
 * ends soft. Logos ship on white, so each sits on a white chip to stay legible.
 */
export default function LogoWall({ title = "Trusted by" }) {
  const loop = [...CLIENTS, ...CLIENTS];
  return (
    <section className="bg-ink py-16 md:py-24">
      <div className="container-x">
        {title && <p className="eyebrow mb-2">{title}</p>}
        <p className="max-w-md text-bone/60">
          Trusted by brands that care about the frame.
        </p>
      </div>

      {/* Full-bleed marquee with soft edge fades */}
      <div className="marquee-mask relative mt-10 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent sm:w-28"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent sm:w-28"
          aria-hidden="true"
        />
        <ul className="marquee-track py-2">
          {loop.map((c, i) => (
            <li key={`${c.name}-${i}`} aria-hidden={i >= CLIENTS.length}>
              <Logo name={c.name} logo={c.logo} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
