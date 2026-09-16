"use client";

import { useEffect, useRef } from "react";

/**
 * Our Clients — a logo carousel that scrolls slowly right-to-left on its own and
 * can also be driven with the arrows (each click advances by 3 logos). The list
 * is duplicated so the auto-scroll loops seamlessly; it pauses on hover and
 * briefly after an arrow click. Logos ship on white, so each sits on a chip.
 *
 * logos: string[] of image paths.
 */
export default function LogoCarousel({ logos = [] }) {
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const posRef = useRef(0); // float accumulator (scrollLeft is integer-rounded)
  const loop = [...logos, ...logos]; // second copy makes the loop seamless

  // Continuous slow auto-scroll (right → left).
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    posRef.current = el.scrollLeft;
    let raf;
    const tick = () => {
      if (pausedRef.current) {
        posRef.current = el.scrollLeft; // stay in sync while paused / arrowing
      } else if (el.scrollWidth > el.clientWidth) {
        posRef.current += 0.5; // slow drift
        const half = el.scrollWidth / 2;
        if (posRef.current >= half) posRef.current -= half; // seamless wrap
        el.scrollLeft = posRef.current;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Arrow: animate a jump of 3 logo widths (native smooth scroll is unreliable).
  const step = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const item = el.querySelector("li");
    const w = (item ? item.offsetWidth : 184) + 16;
    const from = el.scrollLeft;
    const max = el.scrollWidth - el.clientWidth;
    const to = Math.max(0, Math.min(from + dir * 3 * w, max));
    pausedRef.current = true;

    const dur = 450;
    const start = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const frame = (now) => {
      const t = Math.min((now - start) / dur, 1);
      el.scrollLeft = from + (to - from) * ease(t);
      if (t < 1) requestAnimationFrame(frame);
      else posRef.current = el.scrollLeft;
    };
    requestAnimationFrame(frame);

    window.clearTimeout(step._t);
    step._t = window.setTimeout(() => (pausedRef.current = false), dur + 400);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <button
        type="button"
        aria-label="Previous logos"
        onClick={() => step(-1)}
        className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-bone/20 bg-ink/70 text-xl text-bone backdrop-blur transition-colors hover:border-gold hover:text-gold sm:left-4"
      >
        ‹
      </button>

      <ul
        ref={trackRef}
        className="no-scrollbar flex gap-4 overflow-x-auto px-14 sm:px-20"
      >
        {loop.map((src, i) => (
          <li
            key={i}
            aria-hidden={i >= logos.length}
            className="flex h-28 w-48 shrink-0 items-center justify-center rounded-xl bg-white p-3 sm:h-32 sm:w-56"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt="Client logo"
              loading="lazy"
              className="max-h-full max-w-full object-contain"
            />
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-label="Next logos"
        onClick={() => step(1)}
        className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-bone/20 bg-ink/70 text-xl text-bone backdrop-blur transition-colors hover:border-gold hover:text-gold sm:right-4"
      >
        ›
      </button>
    </div>
  );
}
