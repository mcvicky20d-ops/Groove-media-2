"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 100, suffix: "+", label: "Film Projects" },
  { value: 2018, suffix: "", label: "Established", raw: true },
  { value: 7, suffix: "+", label: "Major Brands" },
  { value: null, label: "End-to-End Production", text: "A→Z" },
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
      <div className="container-x grid grid-cols-2 gap-y-12 md:grid-cols-4">
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
    </section>
  );
}
