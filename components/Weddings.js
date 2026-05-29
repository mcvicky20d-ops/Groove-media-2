"use client";

import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Weddings() {
  return (
    <section
      id="weddings"
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background:
          "radial-gradient(120% 120% at 50% 0%, #1c1610 0%, #0a0a0a 60%)",
      }}
    >
      {/* Warm placeholder backdrop — swap for a wedding still/clip */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url(/assets/images/wedding.svg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />

      <div className="container-x relative z-10 max-w-3xl">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#E0B872]">
          Weddings Vertical
        </p>
        <AnimatedHeading
          text="Cinematic wedding stories, told with care."
          className="display-line text-4xl text-bone sm:text-5xl lg:text-6xl"
        />
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-lg text-bone/70">
            The same filmmaking process we bring to brands — direction,
            cinematography, and finish — applied to the films that matter most.
          </p>
          <div className="mt-10">
            <MagneticButton href="/contact" variant="outline">
              Enquire About Weddings
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
