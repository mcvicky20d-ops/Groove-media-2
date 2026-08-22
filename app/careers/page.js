import PageHero from "@/components/PageHero";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Careers — Join The Groove Media, Chennai",
  description:
    "Make films with The Groove Media. We're always looking for filmmakers, cinematographers, editors and producers in Chennai who care about craft.",
};

const ROLES = [
  { title: "Cinematographer", type: "Full-time · Chennai", desc: "Shape the look of brand films, weddings and originals on set." },
  { title: "Video Editor", type: "Full-time · Chennai", desc: "Cut story-first edits and platform cutdowns in post." },
  { title: "Producer", type: "Full-time · Chennai", desc: "Own timelines, crews and budgets end-to-end." },
  { title: "Photographer", type: "Freelance · Chennai", desc: "Product, fashion and wedding stills with a cinematic eye." },
];

const VALUES = [
  { n: "01", title: "Craft over shortcuts", desc: "We sweat the details most people never notice — because they add up." },
  { n: "02", title: "Ownership", desc: "You'll own your work end-to-end, not just a slice of it." },
  { n: "03", title: "Learn on real sets", desc: "Grow fast on live projects for real brands and real couples." },
];

export default function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Careers"
        title="Make films with *us*."
        subtitle="We're a focused team in Chennai that cares about the craft. If you do too, we'd love to meet you."
        image="/assets/images/about-hero.jpg"
      />

      {/* Values */}
      <section className="bg-ink py-20 md:py-28">
        <div className="container-x">
          <p className="eyebrow">Why here</p>
          <AnimatedHeading
            text="A place to do your *best work*."
            className="display-line max-w-3xl text-bone text-[clamp(2rem,5vw,3.75rem)]"
          />
          <RevealGroup stagger={0.1} className="mt-12 grid gap-px sm:grid-cols-3">
            {VALUES.map((v) => (
              <RevealItem
                key={v.n}
                className="border-t border-bone/10 py-8 pr-6 transition-colors hover:border-gold/30"
              >
                <span className="font-display text-sm text-gold">{v.n}</span>
                <h3 className="mt-3 font-display text-xl uppercase text-bone">{v.title}</h3>
                <p className="mt-2 text-bone/60">{v.desc}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Open roles */}
      <section className="bg-smoke py-20 md:py-28">
        <div className="container-x">
          <p className="eyebrow">Open roles</p>
          <AnimatedHeading
            text="We're *hiring*."
            className="display-line text-bone text-[clamp(2rem,5vw,3.75rem)]"
          />
          <RevealGroup stagger={0.08} className="mt-10">
            {ROLES.map((r) => (
              <RevealItem
                key={r.title}
                className="group flex flex-col gap-2 border-t border-bone/10 py-6 transition-colors hover:border-gold/30 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-display text-2xl uppercase text-bone transition-transform duration-300 group-hover:translate-x-1">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-bone/55">{r.desc}</p>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-gold">{r.type}</span>
                  <MagneticButton href="/contact" variant="outline">
                    Apply
                  </MagneticButton>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.1}>
            <p className="lead mt-10 max-w-xl">
              Don&apos;t see your role? We still want to hear from good people.
              Send us your reel or portfolio.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Think you'd *fit in?*"
        text="Send your reel, portfolio or CV and tell us what you love to make."
      />
      <Footer />
    </main>
  );
}
