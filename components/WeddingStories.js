"use client";

import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

/**
 * Wedding "stories" instead of generic galleries — people connect with names
 * and narratives more than portfolios.
 */
const STORIES = [
  { couple: "Raja & Saranya", place: "Chennai", note: "A morning wedding full of quiet, candid joy.", img: "/assets/images/wedding-4.jpg" },
  { couple: "Ravi & Sahana", place: "Coimbatore", note: "Two families, one unforgettable celebration of colour.", img: "/assets/images/wedding-5.jpg" },
  { couple: "Meera & Karthik", place: "Hampi", note: "A destination shoot among the stones, shot like a film.", img: "/assets/images/wedding-6.jpg" },
];

export default function WeddingStories({ id = "stories" }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 py-16 md:py-24"
      style={{
        background:
          "radial-gradient(120% 120% at 50% 0%, #1c1610 0%, #0a0a0a 60%)",
      }}
    >
      <div className="container-x">
        <p className="eyebrow" style={{ color: "#E0B872" }}>
          Stories
        </p>
        <AnimatedHeading
          text="Every couple, a *story*."
          className="display-line max-w-3xl text-bone text-[clamp(2rem,5vw,3.75rem)]"
        />
        <RevealGroup
          stagger={0.12}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {STORIES.map((s) => (
            <RevealItem key={s.couple} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.1s] ease-cinematic group-hover:scale-110"
                  style={{ backgroundImage: `url(${s.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#E0B872]">
                    {s.place}
                  </p>
                  <h3 className="mt-1 font-display text-2xl uppercase text-bone">
                    {s.couple}
                  </h3>
                  <p className="mt-2 text-sm text-bone/65">{s.note}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
