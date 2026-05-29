"use client";

import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const SERVICES = [
  {
    n: "01",
    title: "Advertising Films",
    desc: "Story-led commercials and brand films built for screens of every size.",
  },
  {
    n: "02",
    title: "Brand Campaigns",
    desc: "End-to-end campaign content with a single, consistent visual language.",
  },
  {
    n: "03",
    title: "Commercial Photography",
    desc: "Product, fashion, and lifestyle imagery shot with cinematic intent.",
  },
  {
    n: "04",
    title: "Digital Content Production",
    desc: "Social-first films and edits made to move fast and travel far.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="services" className="relative bg-ink py-20 md:py-28">
      <div className="container-x">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">
            What We Do
          </p>
          <AnimatedHeading
            text="Full-service production, from the first idea to the final cut."
            className="display-line text-4xl text-bone sm:text-5xl lg:text-6xl"
          />
        </div>

        <RevealGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/10 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <RevealItem
              key={s.n}
              className="group relative bg-ink p-8 transition-colors duration-500 hover:bg-smoke md:p-12"
            >
              <div className="relative z-10 transition-transform duration-500 ease-cinematic group-hover:-translate-y-2">
                <span className="font-display text-sm text-gold">{s.n}</span>
                <h3 className="mt-4 font-display text-2xl uppercase text-bone md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-sm text-bone/60">{s.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-10 max-w-xl text-bone/50">
          We also create select{" "}
          <span className="text-gold">wedding films</span> through our dedicated
          vertical.
        </p>
      </div>
    </section>
  );
}
