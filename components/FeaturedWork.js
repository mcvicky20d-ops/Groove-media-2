"use client";

import Link from "next/link";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

// Recent work — real frames.
const FEATURED = [
  { title: "Lasya", img: "/assets/images/work/lasya.jpg", href: "/advertising" },
  { title: "Automotive", img: "/assets/images/work/automotive.jpg", href: "/advertising" },
  { title: "Refex", img: "/assets/images/work/refex.jpg", href: "/advertising" },
  { title: "Ambervilla", img: "/assets/images/work/ambervilla.jpg", href: "/advertising" },
];

export default function FeaturedWork() {
  return (
    <section className="relative bg-ink py-20 md:py-28">
      <div className="container-x">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
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
          {FEATURED.map((item) => (
            <RevealItem key={item.title}>
              <Link
                href={item.href}
                data-cursor="grow"
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-bone/10"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.1s] ease-cinematic group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <h3 className="font-display text-xl uppercase text-bone transition-transform duration-500 ease-cinematic group-hover:-translate-y-1 md:text-2xl">
                    {item.title}
                  </h3>
                  <span className="flex h-9 w-9 shrink-0 translate-y-3 items-center justify-center rounded-full border border-bone/40 text-bone opacity-0 transition-all duration-500 ease-cinematic group-hover:translate-y-0 group-hover:border-gold group-hover:text-gold group-hover:opacity-100">
                    ↗
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
