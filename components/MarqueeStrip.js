"use client";

/**
 * Bold moving keyword band — pure CSS transform animation (cheap). Adds energy
 * and reinforces the studio's disciplines between sections.
 */
const WORDS = [
  "Advertising Films",
  "Brand Campaigns",
  "Commercial Photography",
  "Digital Content",
  "Wedding Films",
  "Creative Direction",
];

function Row({ ariaHidden = false }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {WORDS.map((w, i) => (
        <span key={`${w}-${i}`} className="flex items-center">
          <span className="display-line whitespace-nowrap px-8 text-4xl text-bone/90 md:text-6xl">
            {w}
          </span>
          <span className="text-2xl text-gold md:text-4xl">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function MarqueeStrip() {
  return (
    <div className="relative overflow-hidden border-y border-bone/10 bg-ink py-6 md:py-8">
      <div className="flex w-max animate-strip">
        <Row />
        <Row ariaHidden />
      </div>
      <style jsx>{`
        @keyframes strip {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-strip {
          animation: strip 30s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-strip {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
