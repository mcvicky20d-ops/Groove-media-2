import PageHero from "@/components/PageHero";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Updates — News & Journal | The Groove Media",
  description:
    "The latest from The Groove Media — new work, behind-the-scenes notes and studio news from our film and visual production team in Chennai.",
};

// Studio journal entries — edit or add items here as news comes in.
const UPDATES = [
  {
    date: "August 2025",
    tag: "Showreel",
    title: "Our new showreel is live.",
    desc: "A fresh cut of recent brand films, weddings and originals — the frames we're proudest of this year.",
  },
  {
    date: "August 2025",
    tag: "Studio",
    title: "We're hiring.",
    desc: "Cinematographers, editors, producers and photographers — come make films with us in Chennai.",
  },
  {
    date: "July 2025",
    tag: "On set",
    title: "Wedding season, across South India.",
    desc: "A busy run of wedding films and photography — new couples, new locations, same care for the frame.",
  },
];

export default function UpdatesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Updates"
        title="From the *studio*."
        subtitle="New work, behind-the-scenes notes and what we're up to lately."
        image="/assets/images/films-feature.jpg"
      />

      <section className="bg-ink py-20 md:py-28">
        <div className="container-x">
          <p className="eyebrow">Latest</p>
          <AnimatedHeading
            text="What's *new*."
            className="display-line text-bone text-[clamp(2rem,5vw,3.75rem)]"
          />

          <RevealGroup stagger={0.1} className="mt-10">
            {UPDATES.map((u) => (
              <RevealItem
                key={u.title}
                className="group flex flex-col gap-2 border-t border-bone/10 py-8 transition-colors hover:border-gold/30 sm:flex-row sm:gap-10"
              >
                <div className="sm:w-40 sm:shrink-0">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">{u.tag}</p>
                  <p className="mt-1 text-sm text-bone/40">{u.date}</p>
                </div>
                <div>
                  <h3 className="font-display text-2xl uppercase text-bone transition-transform duration-300 group-hover:translate-x-1">
                    {u.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-bone/60">{u.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1}>
            <p className="lead mt-10 max-w-xl">
              More coming soon. Follow us on Instagram for behind-the-scenes,
              between updates.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Want to be our *next story?*"
        text="Tell us what you're planning — we'd love to make it with you."
      />
      <Footer />
    </main>
  );
}
