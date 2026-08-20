"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * A responsive grid of clickable brand LOGOS (no text). Each logo enlarges on
 * hover; clicking opens a modal with a heading about the brand and the work we
 * did — an optional video plus an image gallery.
 *
 * brands: [{ name, logo, sector, blurb, video?, images: string[] }]
 * `logo` is a swappable placeholder — drop the real logo file at that path.
 */
export default function BrandRow({ label = "Brands", brands = [] }) {
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

      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {brands.map((b) => (
          <li key={b.name}>
            <button
              onClick={() => setActive(b)}
              data-cursor="grow"
              aria-label={`See our work for ${b.name}`}
              title={b.name}
              className="group flex aspect-[3/2] w-full items-center justify-center overflow-hidden rounded-2xl border border-bone/10 bg-smoke/40 p-6 transition-colors duration-300 hover:border-gold/50 hover:bg-smoke focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={b.logo}
                alt={`${b.name} logo`}
                className="h-full max-h-20 w-auto max-w-full object-contain opacity-75 transition-all duration-500 ease-cinematic group-hover:scale-125 group-hover:opacity-100"
              />
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
                  <img
                    src={active.logo}
                    alt=""
                    aria-hidden="true"
                    className="h-14 w-14 shrink-0 object-contain"
                  />
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
