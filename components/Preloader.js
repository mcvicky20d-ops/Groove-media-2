"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const TITLE = "THE GROOVE MEDIA";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const rootRef = useRef(null);
  const lettersRef = useRef([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Lock scroll while the curtain is up.
    document.body.style.overflow = "hidden";

    const finish = () => {
      document.body.style.overflow = "";
      setDone(true);
    };

    if (prefersReduced) {
      const t = setTimeout(finish, 400);
      return () => clearTimeout(t);
    }

    const tl = gsap.timeline({ onComplete: finish });
    tl.set(rootRef.current, { autoAlpha: 1 });
    tl.fromTo(
      lettersRef.current,
      { yPercent: 120, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.025,
      }
    );
    tl.to(lettersRef.current, {
      yPercent: -120,
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",
      stagger: 0.015,
      delay: 0.2,
    });
    // Curtain reveal: panel slides up and away.
    tl.to(
      rootRef.current,
      { yPercent: -100, duration: 0.8, ease: "expo.inOut" },
      "-=0.15"
    );

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-ink"
      aria-hidden="true"
    >
      <h1 className="display-line flex flex-wrap justify-center px-6 text-center text-4xl text-bone sm:text-6xl md:text-7xl">
        {TITLE.split("").map((char, i) => (
          <span key={i} className="overflow-hidden">
            <span
              ref={(el) => (lettersRef.current[i] = el)}
              className="inline-block"
            >
              {char === " " ? " " : char}
            </span>
          </span>
        ))}
      </h1>
    </div>
  );
}
