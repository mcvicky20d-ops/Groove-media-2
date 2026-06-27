"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ITEMS = [
  { title: "Brand Film", cat: "Advertising", img: "/assets/images/portfolio/work-01.jpg" },
  { title: "Fashion Campaign", cat: "Photography", img: "/assets/images/portfolio/work-02.jpg" },
  { title: "Hospitality", cat: "Advertising", img: "/assets/images/portfolio/work-03.jpg" },
  { title: "Product Story", cat: "Photography", img: "/assets/images/portfolio/work-04.jpg" },
  { title: "Digital Content", cat: "Advertising", img: "/assets/images/portfolio/work-05.jpg" },
  { title: "Culture Film", cat: "Films", img: "/assets/images/portfolio/work-06.jpg" },
  { title: "Jewellery Spot", cat: "Advertising", img: "/assets/images/portfolio/work-07.jpg" },
  { title: "Music Video", cat: "Films", img: "/assets/images/portfolio/work-08.jpg" },
  { title: "Wedding Story", cat: "Weddings", img: "/assets/images/wedding-1.jpg" },
  { title: "The Ceremony", cat: "Weddings", img: "/assets/images/wedding-2.jpg" },
  { title: "Documentary", cat: "Films", img: "/assets/images/films-feature.jpg" },
  { title: "Celebration", cat: "Weddings", img: "/assets/images/wedding-3.jpg" },
];

const CATS = ["All", "Advertising", "Weddings", "Films", "Photography"];

export default function FilterGallery() {
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? ITEMS : ITEMS.filter((i) => i.cat === cat);

  return (
    <section className="bg-ink py-12 md:py-16">
      <div className="container-x">
        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              data-cursor="grow"
              className={`rounded-full px-5 py-2 text-xs uppercase tracking-[0.15em] transition-colors duration-300 ${
                cat === c
                  ? "bg-gold text-ink"
                  : "border border-bone/20 text-bone/60 hover:border-gold hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {shown.map((item) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl"
                data-cursor="grow"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.1s] ease-cinematic group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold">
                    {item.cat}
                  </span>
                  <h3 className="font-display text-lg uppercase leading-tight text-bone">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
