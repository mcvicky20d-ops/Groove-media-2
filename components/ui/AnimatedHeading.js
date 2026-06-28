"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Splits text into words and reveals each on scroll (letters/words rise from
 * the bottom of a clipped line). Pass `as` to control the rendered tag.
 */
export default function AnimatedHeading({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll(".reveal-word");

    if (prefersReduced) {
      gsap.set(words, { yPercent: 0, opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.06,
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay]);

  // Words wrapped in *asterisks* render as elegant serif-italic accents.
  const words = String(text).split(" ");

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => {
        // Accept *word*, *word.*, or *word*. — punctuation may sit inside or
        // just after the asterisks.
        const m = word.match(/^\*(.+?)\*([^\w*]*)$/);
        const isAccent = !!m;
        const clean = isAccent ? m[1] : word;
        const trail = isAccent ? m[2] : "";
        const isLast = i === words.length - 1;
        return (
          <span
            key={i}
            className={`reveal-line inline-block align-top ${
              isLast ? "" : "mr-[0.4em]"
            }`}
          >
            <span
              className={`reveal-word inline-block ${
                isAccent ? "accent-serif text-gold" : ""
              }`}
            >
              {clean}
              {trail}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
