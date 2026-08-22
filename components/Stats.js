"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

const STATS = [
  { value: 500, suffix: "+", label: "Weddings" },
  { value: 200, suffix: "+", label: "Advertising & Film Projects" },
  { value: 50, suffix: "+", label: "Major Brands" },
];

function Counter({ target, suffix = "", raw = false }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  useEffect(() => {
    if (!inView) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setValue(target);
      return;
    }

    const duration = 1600;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  const display = raw ? value : value.toLocaleString();

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="container-x">
        <div className="mb-14 text-center">
          <p className="eyebrow justify-center">Experience</p>
          <AnimatedHeading
            text="Years of stories. Thousands of *frames*."
            className="display-line mx-auto max-w-3xl text-bone text-[clamp(2rem,5vw,3.75rem)]"
          />
        </div>
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-3">
          {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div className="font-display text-5xl text-gold md:text-7xl">
              {s.value !== null ? (
                <Counter target={s.value} suffix={s.suffix} raw={s.raw} />
              ) : (
                s.text
              )}
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-bone/60">
              {s.label}
            </p>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
