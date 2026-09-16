"use client";

import LogoCarousel from "@/components/LogoCarousel";

// Same client logo set as the advertising "Our Clients" scroll.
const CLIENTS = Array.from(
  { length: 29 },
  (_, i) => `/assets/images/client-logos/logo-${String(i + 1).padStart(2, "0")}.webp`
);

/**
 * Trusted By — uses the same auto-scrolling logo carousel (with arrows) as the
 * advertising Our Clients section, so both logo scrolls match.
 */
export default function LogoWall({ title = "Trusted by" }) {
  return (
    <section className="bg-ink py-16 md:py-24">
      <div className="container-x">
        {title && <p className="eyebrow mb-2">{title}</p>}
        <p className="max-w-md text-bone/60">
          Trusted by brands that care about the frame.
        </p>
      </div>

      <div className="mt-10">
        <LogoCarousel logos={CLIENTS} />
      </div>
    </section>
  );
}
