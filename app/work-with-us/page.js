import PageHero from "@/components/PageHero";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Work With Us — Partner with The Groove Media",
  description:
    "Brands, agencies, wedding planners and creators — here's how to work with The Groove Media, a film and visual production company in Chennai.",
};

const WHO = [
  { title: "Brands & Agencies", desc: "Ad films, product films, photography and always-on content — from a single hero film to a full campaign." },
  { title: "Couples & Planners", desc: "Wedding films and photography made to be remembered, shot with a cinematic eye." },
  { title: "Creators & Labels", desc: "Music videos, documentaries and original productions we make with you, or for you." },
];

const STEPS = [
  { n: "01", title: "Tell us the idea", desc: "Share the brief, the goal and the deadline. A quick call is usually enough to get started." },
  { n: "02", title: "We shape the plan", desc: "Concept, treatment, budget and timeline — clear, upfront, no surprises." },
  { n: "03", title: "We produce it", desc: "Direction, production, cinematography and post — one team, end-to-end." },
  { n: "04", title: "You get the film", desc: "Delivered in every format you need, ready for where your audience actually watches." },
];

export default function WorkWithUsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Work With Us"
        title="Let's build something *together*."
        subtitle="Whether you're a brand, a couple or a creator — here's how we work, and how to start."
        image="/assets/images/collaborate.jpg"
      />

      {/* Who we work with */}
      <section className="bg-ink py-20 md:py-28">
        <div className="container-x">
          <p className="eyebrow">Who we work with</p>
          <AnimatedHeading
            text="Different briefs. Same *care*."
            className="display-line max-w-3xl text-bone text-[clamp(2rem,5vw,3.75rem)]"
          />
          <RevealGroup stagger={0.1} className="mt-12 grid gap-5 md:grid-cols-3">
            {WHO.map((w) => (
              <RevealItem
                key={w.title}
                className="rounded-2xl border border-bone/10 bg-smoke/40 p-7 transition-colors hover:border-gold/30"
              >
                <h3 className="font-display text-2xl uppercase text-bone">{w.title}</h3>
                <p className="mt-3 text-bone/60">{w.desc}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-smoke py-20 md:py-28">
        <div className="container-x">
          <p className="eyebrow">How it works</p>
          <AnimatedHeading
            text="From idea to *delivery*."
            className="display-line text-bone text-[clamp(2rem,5vw,3.75rem)]"
          />
          <RevealGroup stagger={0.1} className="mt-10 space-y-px">
            {STEPS.map((s) => (
              <RevealItem
                key={s.n}
                className="group flex gap-6 border-t border-bone/10 py-6 transition-colors hover:border-gold/30"
              >
                <span className="font-display text-sm text-gold">{s.n}</span>
                <div>
                  <h3 className="font-display text-xl uppercase text-bone transition-transform duration-300 group-hover:translate-x-1">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-md text-bone/60">{s.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTASection
        title="Have a project in *mind?*"
        text="Tell us what you're planning — we'll get back to you fast."
      />
      <Footer />
    </main>
  );
}
