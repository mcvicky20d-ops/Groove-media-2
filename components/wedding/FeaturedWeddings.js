"use client";

import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

/**
 * Featured weddings, told as named stories with a date + place — the way
 * premium wedding studios present recent work. Swap images/couples for real
 * films/galleries when ready.
 */
const WEDDINGS = [
  { couple: "Raja & Saranya", place: "Chennai", date: "Feb 2024", note: "A palace morning full of colour and calm.", img: "/assets/images/cat/wed-couple-3.webp", span: "md:col-span-2 md:row-span-2" },
  { couple: "Ravi & Sahana", place: "Coimbatore", date: "Nov 2023", note: "Golden hour, two families, one celebration.", img: "/assets/images/cat/wed-couple-1.webp", span: "" },
  { couple: "Meera & Karthik", place: "Hampi", date: "Aug 2023", note: "A destination shoot among ancient stone.", img: "/assets/images/cat/wed-couple-2.webp", span: "" },
  { couple: "Anaya & Vikram", place: "Goa", date: "Jan 2024", note: "Barefoot vows by the sea, shot like a film.", img: "/assets/images/wedding-5.jpg", span: "" },
  { couple: "Divya & Arjun", place: "Ooty", date: "Dec 2023", note: "Misty hills and quiet, candid joy.", img: "/assets/images/wedding-6.jpg", span: "" },
];

export default function FeaturedWeddings() {
  return (
    <section id="featured" className="scroll-mt-28 bg-ink py-20 md:py-28">
      <div className="container-x">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Featured weddings</p>
            <AnimatedHeading
              text="Recent *stories*."
              className="display-line text-bone text-[clamp(2rem,5vw,3.75rem)]"
            />
          </div>
          <p className="max-w-sm text-bone/55">
            Every couple is different — so every film and every gallery is too.
          </p>
        </div>

        <RevealGroup
          stagger={0.1}
          className="grid auto-rows-[280px] grid-cols-1 gap-5 md:grid-cols-3"
        >
          {WEDDINGS.map((w) => (
            <RevealItem
              key={w.couple}
              className={`group relative overflow-hidden rounded-2xl ${w.span}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.2s] ease-cinematic group-hover:scale-105"
                style={{ backgroundImage: `url(${w.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#E0B872]">
                  {w.place} · {w.date}
                </p>
                <h3 className="mt-1 font-display text-2xl uppercase text-bone md:text-3xl">
                  {w.couple}
                </h3>
                <p className="mt-1 max-w-xs text-sm text-bone/65 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {w.note}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
