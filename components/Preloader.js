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

    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      document.body.style.overflow = "";
      setDone(true);
    };

    // Safety net: never let the preloader block the site (e.g. if GSAP fails).
    const failsafe = setTimeout(finish, 5500);

    const letters = lettersRef.current.filter(Boolean);

    if (prefersReduced) {
      // Show the title statically (no motion), hold, then reveal site.
      letters.forEach((el) => {
        el.style.transform = "none";
        el.style.opacity = "1";
      });
      const t = setTimeout(finish, 2500);
      return () => {
        clearTimeout(t);
        clearTimeout(failsafe);
      };
    }

    // 3.0s total: in 0.90s → hold 1.05s → out 0.58s → curtain 0.6s overlapped
    // by 0.15s (0.90 + 1.05 + 0.58 + 0.45 = 2.98s). Letters start CSS-hidden
    // so the SSR frame never flashes.
    const tl = gsap.timeline({ onComplete: finish });
    tl.set(rootRef.current, { autoAlpha: 1 });
    tl.set(letters, { yPercent: 120, opacity: 0 });
    tl.to(letters, {
      yPercent: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.02,
    });
    tl.to(letters, {
      yPercent: -120,
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",
      stagger: 0.012,
      delay: 1.05,
    });
    // Curtain reveal: panel slides up and away.
    tl.to(
      rootRef.current,
      { yPercent: -100, duration: 0.6, ease: "expo.inOut" },
      "-=0.15"
    );

    return () => {
      clearTimeout(failsafe);
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
            {/* Letters start hidden via CSS so the server-rendered frame is a
                plain black screen (no flash-then-replay). The effect above
                makes them visible — animated normally, statically under
                prefers-reduced-motion. */}
            <span
              ref={(el) => (lettersRef.current[i] = el)}
              className="inline-block translate-y-[120%] opacity-0"
            >
              {char === " " ? " " : char}
            </span>
          </span>
        ))}
      </h1>
    </div>
  );
}
