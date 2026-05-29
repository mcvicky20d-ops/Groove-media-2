import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About",
  description:
    "The Groove Media is a Chennai-based film and visual production company established in 2018, led by Creative Director and DOP Kodi.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="relative flex min-h-[70svh] items-end overflow-hidden bg-ink pb-20 pt-40">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url(/assets/images/about-hero.svg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/40" />
        <div className="container-x relative z-10">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">
            About · Est. 2018
          </p>
          <AnimatedHeading
            text="A film studio built on craft and clarity."
            className="display-line max-w-4xl text-5xl text-bone sm:text-6xl lg:text-7xl"
          />
        </div>
      </section>

      <section className="bg-ink py-20 md:py-28">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl uppercase text-bone">
              Who We Are
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6 text-lg text-bone/70">
              <p>
                The Groove Media is a film and visual production company based
                in Chennai, established in 2018. We produce advertising films,
                brand campaigns, commercial photography, and digital content for
                brands, people, and ideas.
              </p>
              <p>
                Our work moves across fashion, retail, hospitality, and
                culture-driven brands — from ITC Hotels and Hilton to Myntra,
                Wrangler India, and Crocs India. We also create select wedding
                films through our dedicated vertical.
              </p>
              <p>
                Every project runs end-to-end: creative direction,
                cinematography, post production, and campaign content — handled
                under one roof.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Creative lead */}
      <section className="bg-smoke py-20 md:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-ink">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: "url(/assets/images/kodi.svg)" }}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">
              Creative Director / DOP
            </p>
            <AnimatedHeading
              text="Led by Kodi."
              className="display-line mt-4 text-5xl text-bone sm:text-6xl"
            />
            <p className="mt-6 max-w-lg text-lg text-bone/70">
              Kodi leads the studio as Creative Director and Director of
              Photography — shaping each film from concept through to the final
              frame, with an eye for light, story, and the details that make
              work land.
            </p>
            <div className="mt-10">
              <MagneticButton href="/contact" variant="solid">
                Work With Us
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <Stats />
      <Footer />
    </main>
  );
}
