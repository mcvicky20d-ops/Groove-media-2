"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * A responsive grid of clickable brand LOGOS. Default state shows the logo only
 * (no text); on hover a gold overlay fades in with the brand name centered over
 * it (the thebanana.in portfolio pattern). Clicking opens a modal with a heading
 * about the brand and the work we did — an optional video plus an image gallery.
 *
 * brands: [{ name, logo, sector, blurb, video?, images: string[] }]
 * `logo` is a swappable placeholder — drop the real logo file at that path.
 */
export default function BrandRow({
  label = "Brands",
  brands = [],
  cta = "View Project",
}) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <div className="container-x mt-10">
      {label && (
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-bone/45">
          {label}
        </p>
      )}

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {brands.map((b) => (
          <li key={b.name}>
            <button
              onClick={() => setActive(b)}
              data-cursor="grow"
              aria-label={`${cta} — ${b.name}`}
              title={b.name}
              className="group relative flex aspect-[5/3] w-full items-center justify-center overflow-hidden rounded-lg bg-white p-5 transition-transform duration-500 ease-cinematic hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={b.logo}
                alt={`${b.name} logo`}
                className="relative z-10 max-h-[72%] w-auto max-w-[88%] object-contain transition-opacity duration-300 group-hover:opacity-0"
              />
              {/* Gold overlay: brand name + call-to-action on hover */}
              <span className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-1 bg-gold px-4 text-center opacity-0 transition-opacity duration-300 ease-cinematic group-hover:opacity-100">
                <span className="font-display text-lg uppercase leading-tight tracking-wide text-ink md:text-xl">
                  {b.name}
                </span>
                <span className="text-[0.7rem] uppercase tracking-[0.25em] text-ink/70">
                  {cta} →
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-start justify-center overflow-y-auto p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-ink/85 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative my-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-bone/10 bg-smoke"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink/60 text-bone/70 backdrop-blur transition-colors hover:text-gold"
              >
                ✕
              </button>

              <div className="p-6 md:p-10">
                <div className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <span className="flex h-16 w-24 shrink-0 items-center justify-center rounded-lg bg-white p-2">
                    <img
                      src={active.logo}
                      alt=""
                      aria-hidden="true"
                      className="max-h-full max-w-full object-contain"
                    />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gold">
                      {active.sector}
                    </p>
                    <h3 className="font-display text-3xl uppercase text-bone md:text-4xl">
                      {active.name}
                    </h3>
                  </div>
                </div>
                <p className="mt-5 max-w-2xl text-bone/70">{active.blurb}</p>

                {active.video && (
                  <div className="mt-8 overflow-hidden rounded-xl border border-bone/10">
                    <video
                      className="aspect-video w-full bg-ink"
                      controls
                      playsInline
                      preload="metadata"
                      poster="/assets/images/hero-poster.svg"
                    >
                      <source src={active.video} type="video/mp4" />
                    </video>
                  </div>
                )}

                {active.images?.length > 0 && (
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {active.images.map((src, i) => (
                      <div
                        key={i}
                        className="aspect-[4/5] overflow-hidden rounded-lg bg-ink"
                      >
                        <div
                          className="h-full w-full bg-cover bg-center transition-transform duration-700 ease-cinematic hover:scale-105"
                          style={{ backgroundImage: `url(${src})` }}
                        />
                      </div>
                    ))}
                  </div>
                )}

                <p className="mt-6 text-xs text-bone/35">
                  Sample selection — full case film &amp; gallery on request.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
