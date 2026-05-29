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
    <span className="relative inline-block align-baseline">
      {/* sizer: reserves size + baseline, never visible */}
      <span aria-hidden="true" className="invisible whitespace-nowrap">
        {longest}
      </span>

      {/* clip layer */}
      <span
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden"
      >
        {animate ? (
          <AnimatePresence initial={false}>
            <motion.span
              key={index}
              className={`absolute inset-0 whitespace-nowrap ${className}`}
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-110%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        ) : (
          <span className={`absolute inset-0 whitespace-nowrap ${className}`}>
            {words[0]}
          </span>
        )}
      </span>

      {/* accessible / SEO full phrase */}
      <span className="sr-only">{srText || words.join(", ")}</span>
    </span>
  );
}
