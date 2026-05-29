"use client";

import AnimatedHeading from "@/components/ui/AnimatedHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";

/**
 * Conversion band reused at the bottom of the home and weddings pages.
 */
export default function CTASection({
  title = "Let's make something cinematic.",
  text = "If you're planning a campaign or a film, we'd love to hear about it.",
}) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container-x text-center">
        <AnimatedHeading
          text={title}
          className="display-line mx-auto max-w-4xl text-bone text-[clamp(2.25rem,7vw,5rem)]"
        />
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-bone/60">{text}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <MagneticButton href="/contact" variant="solid">
              Start a Project
            </MagneticButton>
            <MagneticButton href="/work" variant="outline">
              See Our Work
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
