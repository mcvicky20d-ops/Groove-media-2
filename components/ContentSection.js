"use client";

import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";

/**
 * Reusable alternating content block for the pillar pages (Advertising, Films,
 * Weddings, Collaborate). Heading + intro + a list of offerings, paired with an
 * image. `reverse` flips the image to the other side. `dark` toggles bg.
 */
export default function ContentSection({
  id,
  eyebrow,
  title,
  intro,
  items = [],
  image,
  reverse = false,
  dark = false,
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 py-16 md:py-24 ${dark ? "bg-smoke" : "bg-ink"}`}
    >
      <div
        className={`container-x grid items-center gap-12 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image */}
        <Reveal>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
            <div
              className="absolute inset-0 scale-105 bg-cover bg-center transition-transform duration-[1.2s] ease-cinematic group-hover:scale-110"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <AnimatedHeading
            text={title}
            className="display-line text-bone text-[clamp(1.9rem,4.5vw,3.25rem)]"
          />
          {intro && (
            <Reveal delay={0.1}>
              <p className="lead mt-5 max-w-lg">{intro}</p>
            </Reveal>
          )}
          {items.length > 0 && (
            <RevealGroup
              stagger={0.08}
              className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2"
            >
              {items.map((it) => (
                <RevealItem
                  key={it}
                  className="group flex items-center gap-3 border-b border-bone/10 py-3 text-bone/80 transition-colors hover:text-bone"
                >
                  <span className="text-gold transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                  {it}
                </RevealItem>
              ))}
            </RevealGroup>
          )}
        </div>
      </div>
    </section>
  );
}
