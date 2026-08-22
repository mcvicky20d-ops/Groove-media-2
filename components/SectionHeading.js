"use client";

import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal from "@/components/ui/Reveal";

/**
 * A minimal centered section heading (eyebrow + title + optional subtext) used to
 * introduce each block on the Advertising page.
 */
export default function SectionHeading({ id, eyebrow, title, sub }) {
  return (
    <div id={id} className="container-x scroll-mt-28 pt-16 text-center md:pt-24">
      {eyebrow && <p className="eyebrow justify-center">{eyebrow}</p>}
      <AnimatedHeading
        text={title}
        className="display-line mx-auto max-w-3xl text-bone text-[clamp(1.9rem,4.5vw,3.25rem)]"
      />
      {sub && (
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-xl text-bone/60">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
