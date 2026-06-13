"use client";

import { useEffect, useState } from "react";

/**
 * Sticky in-page sub-navigation ("sub-tabs"). Smooth-scrolls to sections by id
 * and highlights the active one via IntersectionObserver scrollspy.
 * items: [{ id, label }]
 */
export default function SubNav({ items = [] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observers = [];
    const visible = new Map();
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          visible.set(id, entry.intersectionRatio);
          // pick the most-visible section
          let best = active;
          let bestRatio = 0;
          visible.forEach((r, key) => {
            if (r > bestRatio) {
              bestRatio = r;
              best = key;
            }
          });
          if (bestRatio > 0) setActive(best);
        },
        { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [items]); // eslint-disable-line react-hooks/exhaustive-deps

  const go = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -90 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sticky top-[68px] z-[800] border-y border-bone/10 bg-ink/85 backdrop-blur-md">
      <nav className="container-x flex gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => go(e, item.id)}
            className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors duration-300 ${
              active === item.id
                ? "bg-gold text-ink"
                : "text-bone/55 hover:text-bone"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
