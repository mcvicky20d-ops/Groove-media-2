"use client";

import Link from "next/link";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

// Recent work — title cards (drop a real frame into `img` later to show it).
const FEATURED = [
  { title: "Devoid", href: "/films" },
  { title: "Iska", href: "/films" },
  { title: "Refex", href: "/advertising" },
  { title: "Hobbiton", href: "/films" },
];

export default function FeaturedWork() {
  return (
    <section className="relative bg-ink py-20 md:py-28">
      <div className="container-x">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Selected work</p>
            <AnimatedHeading
              text="Recent *frames.*"
              className="display-line text-bone text-[clamp(2rem,5vw,3.75rem)]"
            />
            <p className="mt-4 max-w-md text-bone/60">
              A selection of films, campaigns and visual stories from Groove
              Media.
            </p>
          </div>
          <MagneticButton href="/advertising" variant="outline">
            View All Work
          </MagneticButton>
        </div>

        <RevealGroup
          stagger={0.1}
          className="grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {FEATURED.map((item, i) => (
            <RevealItem key={item.title}>
              <Link
                href={item.href}
                data-cursor="grow"
                className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-2xl border border-bone/10 bg-gradient-to-b from-smoke to-ink p-6 transition-colors duration-500 hover:border-gold/40"
              >
                <span className="font-display text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl uppercase text-bone transition-transform duration-500 ease-cinematic group-hover:-translate-y-1 md:text-3xl">
                    {item.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-bone/45 transition-colors duration-300 group-hover:text-gold">
                    View
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
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
