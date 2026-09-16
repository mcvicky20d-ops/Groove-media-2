"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Client testimonials carousel. The active (centre) review is large and sharp;
 * the neighbouring reviews are smaller, dimmed and glass-blurred. Auto-advances
 * every 4 seconds (pauses on hover); arrows and dots drive it manually.
 *
 * quotes: [{ quote, name, org }]
 */
export default function TestimonialCarousel({ quotes = [] }) {
  const [active, setActive] = useState(0);
  const [offset, setOffset] = useState(0);
  const pausedRef = useRef(false);
  const trackRef = useRef(null);
  const cardsRef = useRef([]);

  // Centre the active card within the viewport.
  const recenter = () => {
    const track = trackRef.current;
    const card = cardsRef.current[active];
    if (!track || !card) return;
    const containerW = track.parentElement.clientWidth;
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    setOffset(containerW / 2 - cardCenter);
  };

  useLayoutEffect(() => {
    recenter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, quotes.length]);

  useEffect(() => {
    const onResize = () => recenter();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  // Auto-advance every 4s.
  useEffect(() => {
    if (quotes.length <= 1) return;
    const id = setInterval(() => {
      if (!pausedRef.current) setActive((a) => (a + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(id);
  }, [quotes.length]);

  return (
    <div
      className="relative overflow-hidden py-8"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div
        ref={trackRef}
        className="flex items-center gap-5 transition-transform duration-700 ease-cinematic sm:gap-8"
        style={{ transform: `translateX(${offset}px)` }}
      >
        {quotes.map((t, i) => {
          const isActive = i === active;
          return (
            <button
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`w-[82vw] max-w-2xl shrink-0 rounded-2xl border p-8 text-left transition-all duration-700 ease-cinematic md:p-10 ${
                isActive
                  ? "scale-100 border-gold/40 bg-smoke/70 opacity-100 blur-0"
                  : "scale-90 border-bone/10 bg-smoke/30 opacity-40 blur-[3px]"
              }`}
            >
              <span className="font-serif text-5xl leading-none text-gold/70">
                &ldquo;
              </span>
              <p
                className={`-mt-4 leading-relaxed text-bone/85 ${
                  isActive ? "text-lg md:text-2xl" : "text-base"
                }`}
              >
                {t.quote}
              </p>
              <div className="mt-8 border-t border-bone/10 pt-5">
                <p className="font-display text-sm uppercase tracking-wide text-bone md:text-base">
                  {t.name}
                </p>
                <p className="text-sm text-gold">{t.org}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous testimonial"
        onClick={() => setActive((a) => (a - 1 + quotes.length) % quotes.length)}
        className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-bone/20 bg-ink/70 text-xl text-bone backdrop-blur transition-colors hover:border-gold hover:text-gold sm:left-5"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next testimonial"
        onClick={() => setActive((a) => (a + 1) % quotes.length)}
        className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-bone/20 bg-ink/70 text-xl text-bone backdrop-blur transition-colors hover:border-gold hover:text-gold sm:right-5"
      >
        ›
      </button>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {quotes.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-gold" : "w-1.5 bg-bone/25 hover:bg-bone/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
