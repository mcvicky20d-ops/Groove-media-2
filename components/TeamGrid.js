"use client";

import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const TEAM = [
  { name: "Kodi", role: "Creative Director / DOP", img: "/assets/images/kodi.svg" },
  { name: "Producer", role: "Head of Production", img: "/assets/images/team-1.svg" },
  { name: "Editor", role: "Post & Colour", img: "/assets/images/team-2.svg" },
  { name: "Photographer", role: "Stills & Content", img: "/assets/images/team-3.svg" },
];

export default function TeamGrid({ id = "team" }) {
  return (
    <section id={id} className="scroll-mt-28 bg-ink py-16 md:py-24">
      <div className="container-x">
        <p className="eyebrow">Team</p>
        <AnimatedHeading
          text="The people behind the *frames*."
          className="display-line max-w-3xl text-bone text-[clamp(2rem,5vw,3.75rem)]"
        />
        <RevealGroup
          stagger={0.1}
          className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4"
        >
          {TEAM.map((m) => (
            <RevealItem key={m.role} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale transition-all duration-700 ease-cinematic group-hover:scale-105 group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${m.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              </div>
              <h3 className="mt-4 font-display text-xl uppercase text-bone">
                {m.name}
              </h3>
              <p className="text-sm text-gold">{m.role}</p>
            </RevealItem>
          ))}
        </RevealGroup>
        <p className="mt-8 text-sm text-bone/40">
          Names and roles are sample placeholders — swap for the real team.
        </p>
      </div>
    </section>
  );
}
