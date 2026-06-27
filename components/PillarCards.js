"use client";

import Link from "next/link";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const PILLARS = [
  {
    title: "Advertising",
    desc: "Films and campaigns for modern brands.",
    href: "/advertising",
    img: "/assets/images/advertising.jpg",
  },
  {
    title: "Weddings",
    desc: "Timeless wedding films and photography.",
    href: "/weddings",
    img: "/assets/images/wedding-hero.jpg",
  },
  {
    title: "Films",
    desc: "Original documentaries, music videos and narrative productions.",
    href: "/films",
    img: "/assets/images/films.jpg",
  },
];

export default function PillarCards() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="container-x">
        <p className="eyebrow">What we do</p>
        <AnimatedHeading
          text="Three things, done *properly*."
          className="display-line max-w-3xl text-bone text-[clamp(2rem,5vw,3.75rem)]"
        />

        <RevealGroup
          stagger={0.12}
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {PILLARS.map((p) => (
            <RevealItem key={p.title}>
              <Link
                href={p.href}
                data-cursor="grow"
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.1s] ease-cinematic group-hover:scale-110"
                  style={{ backgroundImage: `url(${p.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <h3 className="font-display text-3xl uppercase text-bone transition-transform duration-500 ease-cinematic group-hover:-translate-y-1">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-bone/65">{p.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold opacity-0 transition-all duration-500 group-hover:opacity-100">
                    Explore →
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
