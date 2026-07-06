"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const TITLE = "THE GROOVE MEDIA";

/**
 * Cinematic gate preloader: the wordmark rises in over a gold progress line
 * with a 0→100% counter, then the screen parts like a cinema curtain (top and
 * bottom panels) to reveal the site. ~3.2s total, one pass.
 *
 * Safety: letters/counter start CSS-hidden so the SSR frame never flashes;
 * static fallback under prefers-reduced-motion; failsafe timer so the
 * preloader can never block the site.
 */
export default function Preloader() {
  const [done, setDone] = useState(false);
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const contentRef = useRef(null);
  const lettersRef = useRef([]);
  const counterRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Lock scroll while the gate is closed.
    document.body.style.overflow = "hidden";

    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      document.body.style.overflow = "";
      setDone(true);
    };

    // Safety net: never let the preloader block the site.
    const failsafe = setTimeout(finish, 6000);

    const letters = lettersRef.current.filter(Boolean);

    if (prefersReduced) {
      // Static: show title, full line, 100% — hold, then reveal instantly.
      letters.forEach((el) => {
        el.style.transform = "none";
        el.style.opacity = "1";
      });
      if (counterRef.current) {
        counterRef.current.textContent = "100%";
        counterRef.current.style.opacity = "1";
      }
      if (lineRef.current) lineRef.current.style.transform = "scaleX(1)";
      const t = setTimeout(finish, 2500);
      return () => {
        clearTimeout(t);
        clearTimeout(failsafe);
      };
    }

    const counter = { val: 0 };
    const tl = gsap.timeline({ onComplete: finish });

    // Phase 1 (0 → ~2.15s): letters rise while the counter climbs to 100 and
    // the gold line fills.
    tl.set(letters, { yPercent: 120, opacity: 0 });
    tl.set(counterRef.current, { opacity: 1 }, 0);
    tl.to(
      letters,
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.035,
      },
      0.25
    );
    tl.to(
      counter,
      {
        val: 100,
        duration: 2.0,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current)
            counterRef.current.textContent = Math.round(counter.val) + "%";
        },
      },
      0.15
    );
    tl.to(
      lineRef.current,
      { scaleX: 1, duration: 2.0, ease: "power2.inOut" },
      0.15
    );

    // Phase 2 (~2.35s): a beat, then the content slips up and away.
    tl.to(
      contentRef.current,
      { yPercent: -18, opacity: 0, duration: 0.45, ease: "power2.in" },
      2.35
    );

    // Phase 3 (2.5 → 3.2s): the gate parts — cinema-curtain reveal.
    tl.to(
      topRef.current,
      { yPercent: -101, duration: 0.7, ease: "expo.inOut" },
      2.5
    );
    tl.to(
      bottomRef.current,
      { yPercent: 101, duration: 0.7, ease: "expo.inOut" },
      2.5
    );

    return () => {
      clearTimeout(failsafe);
      tl.kill();
      document.body.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-[10000]" aria-hidden="true">
      {/* Gate panels */}
      <div ref={topRef} className="absolute inset-x-0 top-0 h-1/2 bg-ink" />
      <div ref={bottomRef} className="absolute inset-x-0 bottom-0 h-1/2 bg-ink" />

      {/* Content */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center px-6"
      >
        <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-gold/80">
          Film &amp; Visual Production — Chennai
        </p>

        <h1 className="display-line flex flex-wrap justify-center text-center text-4xl text-bone sm:text-6xl md:text-7xl">
          {TITLE.split("").map((char, i) => (
            <span key={i} className="overflow-hidden">
              {/* Letters start CSS-hidden so the SSR frame never flashes the
                  title (which read as the preloader "running twice"). */}
              <span
                ref={(el) => (lettersRef.current[i] = el)}
                className="inline-block translate-y-[120%] opacity-0"
              >
                {char === " " ? " " : char}
              </span>
            </span>
          ))}
        </h1>

        {/* Progress line + counter */}
        <div className="mt-10 w-56 sm:w-72">
          <div className="h-px w-full overflow-hidden bg-bone/15">
            <div
              ref={lineRef}
              className="h-px w-full origin-left scale-x-0 bg-gold"
            />
          </div>
          <div className="mt-3 flex justify-between text-[11px] uppercase tracking-[0.3em] text-bone/50">
            <span>Loading</span>
            <span ref={counterRef} className="tabular-nums text-gold opacity-0">
              0%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
