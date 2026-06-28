"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Vertical text rotator / word-swap. Each word slides up from below, rests
 * centered, then slides out the top while the next enters — a continuous cycle.
 *
 * - An invisible sizer (the longest word, kept in normal flow) reserves width
 *   AND preserves the baseline so surrounding text stays aligned. Clipping is
 *   done on an inner absolute layer so `overflow:hidden` doesn't shift the
 *   inline-block baseline.
 * - A visually-hidden span exposes the full phrase to crawlers / screen readers.
 * - Respects prefers-reduced-motion (shows the first word, no cycling).
 */
export default function TextRotator({
  words = [],
  interval = 2000,
  className = "",
  srText,
}) {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced || words.length <= 1) return;
    setAnimate(true);
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval
    );
    return () => clearInterval(id);
  }, [words.length, interval]);

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span className="relative inline-block align-baseline leading-[0.82]">
      {/* sizer: reserves size + baseline, never visible. Tight line-height
          makes the clip box hug the caps so rotating words can't peek into a
          lower line-band during the slide. */}
      <span aria-hidden="true" className="invisible whitespace-nowrap leading-[0.82]">
        {longest}
      </span>

      {/* clip layer */}
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center overflow-hidden leading-[0.82]"
      >
        {animate ? (
          <AnimatePresence initial={false}>
            <motion.span
              key={index}
              className={`absolute inset-0 flex items-center whitespace-nowrap leading-[0.82] ${className}`}
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-105%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        ) : (
          <span
            className={`absolute inset-0 flex items-center whitespace-nowrap leading-[0.82] ${className}`}
          >
            {words[0]}
          </span>
        )}
      </span>

      {/* accessible / SEO full phrase */}
      <span className="sr-only">{srText || words.join(", ")}</span>
    </span>
  );
}
