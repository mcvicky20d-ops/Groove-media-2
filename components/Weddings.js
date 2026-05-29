"use client";

import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

const GALLERY = [
  { img: "/assets/images/wedding-1.jpg", label: "The Ceremony" },
  { img: "/assets/images/wedding-2.jpg", label: "Candid Moments" },
  { img: "/assets/images/wedding-3.jpg", label: "The Celebration" },
];

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
      {/* Warm wedding backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url(/assets/images/wedding-bg.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />

      <div className="container-x relative z-10 max-w-3xl">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#E0B872]">
          Weddings Vertical
        </p>
        <AnimatedHeading
          text="Cinematic wedding *stories*, told with care."
          className="display-line text-bone text-[clamp(2rem,5vw,3.75rem)]"
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

      {/* Wedding gallery */}
      <RevealGroup
        stagger={0.12}
        className="container-x relative z-10 mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3"
      >
        {GALLERY.map((g) => (
          <RevealItem
            key={g.label}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.1s] ease-cinematic group-hover:scale-110"
              style={{ backgroundImage: `url(${g.img})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 font-display text-lg uppercase tracking-wide text-bone">
              {g.label}
            </span>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
