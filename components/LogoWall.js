"use client";

// Client logos live in /public/assets/images/client-logos (drop-in swappable).
const CLIENTS = Array.from({ length: 29 }, (_, i) => ({
  name: `Client ${i + 1}`,
  logo: `/assets/images/client-logos/logo-${String(i + 1).padStart(2, "0")}.webp`,
}));

function Logo({ name, logo }) {
  return (
    <div className="mx-3 flex h-28 w-48 shrink-0 items-center justify-center rounded-xl bg-white p-3 sm:h-32 sm:w-56">
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
