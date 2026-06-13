"use client";

import Link from "next/link";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

const FEATURED = [
  { title: "Brand Film", tag: "Advertising", img: "/assets/images/portfolio/work-01.svg" },
  { title: "Fashion Campaign", tag: "Retail", img: "/assets/images/portfolio/work-02.svg" },
  { title: "Product Story", tag: "Commercial", img: "/assets/images/portfolio/work-04.svg" },
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
          </div>
          <MagneticButton href="/portfolio" variant="outline">
            View All Work
          </MagneticButton>
        </div>

        <RevealGroup stagger={0.12} className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {FEATURED.map((item) => (
            <RevealItem key={item.title}>
              <Link
                href="/portfolio"
                data-cursor="grow"
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.1s] ease-cinematic group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.3em] text-gold">
                      {item.tag}
                    </span>
                    <h3 className="mt-1 font-display text-2xl uppercase text-bone">
                      {item.title}
                    </h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 translate-y-3 items-center justify-center rounded-full border border-bone/40 text-bone opacity-0 transition-all duration-500 ease-cinematic group-hover:translate-y-0 group-hover:border-gold group-hover:text-gold group-hover:opacity-100">
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
