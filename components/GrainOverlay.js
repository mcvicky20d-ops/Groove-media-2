"use client";

/**
 * Subtle film-grain layer. IMPORTANT for performance: this uses a normal blend
 * (NOT mix-blend-mode) and is static (no animation). A full-screen fixed
 * mix-blend layer forces the browser to re-composite the whole viewport on
 * every scroll frame — the main cause of scroll jank — so we avoid it. A single
 * static, normally-composited noise layer is essentially free.
 */
export default function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="grain pointer-events-none fixed inset-0 z-[40] opacity-[0.07]"
    >
      <style jsx>{`
        .grain {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E");
          background-size: 180px 180px;
        }
      `}</style>
    </div>
  );
}
