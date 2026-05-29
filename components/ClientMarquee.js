"use client";

const CLIENTS = [
  "ITC Hotels",
  "Hilton",
  "Phoenix Marketcity",
  "Wrangler India",
  "Myntra",
  "NAC Jewellers",
  "Crocs India",
];

function Row({ ariaHidden = false }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-16 px-8"
      aria-hidden={ariaHidden}
    >
      {CLIENTS.map((c, i) => (
        <li
          key={`${c}-${i}`}
          className="font-display whitespace-nowrap text-2xl uppercase tracking-wide text-bone/40 transition-colors hover:text-gold md:text-4xl"
        >
          {c}
        </li>
      ))}
    </ul>
  );
}

export default function ClientMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-bone/10 py-8">
      <p className="container-x mb-6 text-xs uppercase tracking-[0.4em] text-bone/40">
        Trusted by
      </p>
      <div className="group flex w-max animate-marquee">
        <Row />
        <Row ariaHidden />
      </div>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
