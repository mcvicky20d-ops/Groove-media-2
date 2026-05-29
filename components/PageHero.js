"use client";

import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal from "@/components/ui/Reveal";

/**
 * Compact banner used at the top of inner pages. Animated heading + optional
 * graded background image for depth. Keeps a consistent cinematic header across
 * /work, /services, /weddings, /contact, /about.
 */
export default function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <section className="relative flex min-h-[58svh] items-end overflow-hidden pb-16 pt-36 md:min-h-[62svh] md:pb-20 md:pt-40">
      {image && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        </>
      )}
      <div className="container-x relative z-10">
        {eyebrow && (
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">
            {eyebrow}
          </p>
        )}
        <AnimatedHeading
          text={title}
          as="h1"
          className="display-line max-w-5xl text-bone text-[clamp(2.25rem,8vw,5.5rem)]"
        />
        {subtitle && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base text-bone/60 md:text-lg">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
