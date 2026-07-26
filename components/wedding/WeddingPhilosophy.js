"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal from "@/components/ui/Reveal";

/**
 * A full-bleed philosophy statement over a wedding still — the emotional
 * "why we do this" beat of the page.
 */
export default function WeddingPhilosophy() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden py-24">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/assets/images/cat/wed-couple-1.webp)" }}
        />
        <div className="absolute inset-0 bg-ink/75" />
      </div>

      <div className="container-x relative z-10 max-w-3xl">
        <p className="eyebrow" style={{ color: "#E0B872" }}>
          Our belief
        </p>
        <AnimatedHeading
          text="We shoot for the couple who wants it *real*, not staged."
          className="display-line text-bone text-[clamp(2rem,5.5vw,4rem)]"
        />
        <Reveal delay={0.1}>
          <p className="lead mt-8 max-w-xl">
            The best frames aren&apos;t posed — they happen in the laugh before
            the vows, the glance across the mandap, the quiet after the crowd
            leaves. We stay close, stay patient, and let your day be itself.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
