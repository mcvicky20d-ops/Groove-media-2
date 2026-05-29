"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STEPS = [
  {
    n: "01",
    title: "Creative Direction",
    desc: "We shape the idea — the concept, references, and the why behind every frame.",
  },
  {
    n: "02",
    title: "Cinematography",
    desc: "On set, we capture it with intent: light, lens, movement, and mood.",
  },
  {
    n: "03",
    title: "Post Production",
    desc: "Edit, color, sound, and finish — where the story finds its rhythm.",
  },
  {
    n: "04",
    title: "Campaign Content",
    desc: "Cutdowns, formats, and deliverables built for every platform.",
  },
];

export default function Production() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    // Horizontal pin only on larger screens; mobile stacks vertically.
    if (prefersReduced || window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const distance = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${distance}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-smoke py-28 md:h-[100svh] md:py-0"
    >
      <div className="flex h-full flex-col justify-center">
        <div className="container-x mb-12 md:mb-0 md:absolute md:left-1/2 md:top-16 md:-translate-x-1/2">
          <p className="mb-4 text-center text-xs uppercase tracking-[0.4em] text-gold">
            End-to-End Production
          </p>
        </div>

        <div
          ref={trackRef}
          className="flex flex-col gap-6 px-6 md:h-full md:w-max md:flex-row md:items-center md:gap-0 md:px-0"
        >
          {STEPS.map((step, i) => (
            <div
              key={step.n}
              className="flex shrink-0 items-center gap-6 md:w-screen md:justify-center md:px-[10vw]"
            >
              <div className="max-w-md">
                <span className="font-display text-7xl text-bone/10 md:text-9xl">
                  {step.n}
                </span>
                <h3 className="mt-2 font-display text-3xl uppercase text-bone md:text-5xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-bone/60 md:text-lg">{step.desc}</p>
              </div>
              {i < STEPS.length - 1 && (
                <span className="hidden text-4xl text-gold md:block">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
