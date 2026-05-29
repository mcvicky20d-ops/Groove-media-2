"use client";

import AnimatedHeading from "@/components/ui/AnimatedHeading";

export default function WorkMatters() {
  return (
    <section className="relative flex min-h-[60svh] items-center justify-center py-20">
      <div className="container-x text-center">
        <p className="mb-8 text-xs uppercase tracking-[0.4em] text-gold">
          The Work Matters
        </p>
        <AnimatedHeading
          text="Good ideas."
          className="display-line text-bone text-[clamp(2.75rem,11vw,9rem)]"
        />
        <AnimatedHeading
          text="Strong visuals."
          delay={0.1}
          className="display-line text-bone/50 text-[clamp(2.75rem,11vw,9rem)]"
        />
        <AnimatedHeading
          text="Clear storytelling."
          delay={0.2}
          className="display-line text-gold text-[clamp(2.75rem,11vw,9rem)]"
        />
      </div>
    </section>
  );
}
