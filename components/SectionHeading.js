"use client";

import AnimatedHeading from "@/components/ui/AnimatedHeading";

/**
 * A minimal centered section heading (eyebrow + title) used to introduce each
 * brand-logo block on the Advertising page — no imagery, no copy blocks.
 */
export default function SectionHeading({ id, eyebrow, title }) {
  return (
    <div id={id} className="container-x scroll-mt-28 pt-16 text-center md:pt-24">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <AnimatedHeading
        text={title}
        className="display-line mx-auto max-w-3xl text-bone text-[clamp(1.9rem,4.5vw,3.25rem)]"
      />
    </div>
  );
}
