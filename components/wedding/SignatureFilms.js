"use client";

import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal from "@/components/ui/Reveal";

/**
 * The films section — a statement, then two named signature films presented
 * with a poster still and a short narrative (in the spirit of premium wedding
 * cinema). Drop a real trailer/embed in later.
 */
const FILMS = [
  {
    title: "The Long Way Home",
    couple: "Ravi & Sahana",
    runtime: "Signature Film · 6:12",
    blurb:
      "Two families, three cities, one monsoon week. A film about the quiet, in-between moments that a highlight reel usually skips.",
    img: "/assets/images/cat/wed-couple-1.webp",
  },
  {
    title: "Among the Stones",
    couple: "Meera & Karthik",
    runtime: "Destination Film · 4:48",
    blurb:
      "A destination wedding shot against the ruins of Hampi — a story about choosing each other, told at the scale of an epic.",
    img: "/assets/images/cat/wed-couple-2.webp",
    reverse: true,
  },
];

export default function SignatureFilms() {
  return (
    <section
      className="scroll-mt-28 py-20 md:py-28"
      style={{
        background:
          "radial-gradient(120% 120% at 50% 0%, #14100a 0%, #0a0a0a 55%)",
      }}
    >
      <div className="container-x">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="eyebrow justify-center" style={{ color: "#E0B872" }}>
            Wedding Films
          </p>
          <AnimatedHeading
            text="Every wedding is unique — so are our *films*."
            className="display-line text-bone text-[clamp(2rem,5vw,3.75rem)]"
          />
        </div>

        <div className="space-y-16">
          {FILMS.map((f) => (
            <Reveal key={f.title}>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  f.reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Poster */}
                <div className="group relative aspect-video overflow-hidden rounded-2xl">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.3s] ease-cinematic group-hover:scale-105"
                    style={{ backgroundImage: `url(${f.img})` }}
                  />
                  <div className="absolute inset-0 bg-ink/30" />
                  {/* Play affordance */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-bone/50 bg-ink/40 text-bone backdrop-blur-sm transition-all duration-300 group-hover:border-[#E0B872] group-hover:text-[#E0B872]">
                      ▶
                    </span>
                  </div>
                </div>

                {/* Copy */}
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#E0B872]">
                    {f.runtime}
                  </p>
                  <h3 className="mt-3 font-display text-3xl uppercase text-bone md:text-4xl">
                    {f.title}
                  </h3>
                  <p className="mt-1 font-serif text-lg italic text-bone/60">
                    {f.couple}
                  </p>
                  <p className="mt-5 max-w-md text-bone/70">{f.blurb}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
