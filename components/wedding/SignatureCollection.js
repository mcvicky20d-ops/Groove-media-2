"use client";

import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

/**
 * Premium / exclusive package block — the studio's fine-art tier, led by the
 * Creative Director (mirrors a "signature package" section on premium studios).
 */
export default function SignatureCollection() {
  return (
    <section className="scroll-mt-28 bg-smoke py-20 md:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/assets/images/cat/wed-couple-3.webp)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="font-serif text-2xl italic text-[#E9CE7A]">
                The Signature Collection
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <p className="eyebrow" style={{ color: "#E0B872" }}>
            Fine-art weddings
          </p>
          <AnimatedHeading
            text="A limited number of weddings, each *year*."
            className="display-line text-bone text-[clamp(2rem,5vw,3.5rem)]"
          />
          <Reveal delay={0.1}>
            <p className="lead mt-6 max-w-lg">
              Our flagship tier — led personally by Kodi, our Creative Director
              and DOP. Full creative direction, a dedicated crew, cinematic
              colour, and a heirloom album. Taken on by application only, a
              handful of dates a year.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Director-led coverage",
                "Signature film + teaser",
                "Fine-art photography",
                "Heirloom album",
              ].map((r) => (
                <li
                  key={r}
                  className="flex items-center gap-3 border-b border-bone/10 py-3 text-bone/80"
                >
                  <span className="text-[#E0B872]">→</span>
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <MagneticButton href="/contact" variant="solid">
                Apply for a Date
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
