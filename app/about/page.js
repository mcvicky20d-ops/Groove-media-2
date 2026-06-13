import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import ContentSection from "@/components/ContentSection";
import LogoWall from "@/components/LogoWall";
import TeamGrid from "@/components/TeamGrid";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About — Our Story, Team & Clients",
  description:
    "The Groove Media is a Chennai-based film and visual production company established in 2018, led by Creative Director and DOP Kodi. Our story, team, clients and careers.",
};

const TABS = [
  { id: "our-story", label: "Our Story" },
  { id: "clients", label: "Clients" },
  { id: "team", label: "Team" },
  { id: "careers", label: "Careers" },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About · Est. 2018"
        title="A film studio built on *craft*."
        subtitle="Films, photography and stories — production for brands, people, and ideas."
        image="/assets/images/about-hero.svg"
      />
      <SubNav items={TABS} />

      {/* Our Story */}
      <section id="our-story" className="scroll-mt-28 bg-ink py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <AnimatedHeading
              text="From one camera to a *studio*."
              className="display-line text-bone text-[clamp(2rem,5vw,3.5rem)]"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6 text-lg text-bone/70">
              <p>
                The Groove Media is a film and visual production company based in
                Chennai, established in 2018. We produce advertising films, brand
                campaigns, commercial photography and digital content for brands,
                people, and ideas.
              </p>
              <p>
                Our work moves across fashion, retail, hospitality and
                culture-driven brands — from ITC Hotels and Hilton to Myntra,
                Wrangler and Amazon. We also create cinematic wedding films and
                original documentary and music work.
              </p>
              <p>
                Every project runs end-to-end: creative direction, cinematography,
                post production and campaign content — under one roof.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ContentSection
        eyebrow="Creative Director / DOP"
        title="Led by *Kodi*."
        intro="Kodi leads the studio as Creative Director and Director of Photography — shaping each film from concept to final frame, with an eye for light, story and the details that make work land."
        items={["Creative direction", "Cinematography", "Colour & finish", "Story development"]}
        image="/assets/images/kodi.svg"
        reverse
        dark
      />

      {/* Clients */}
      <div id="clients" className="scroll-mt-28">
        <LogoWall title="Clients & partners" />
      </div>

      {/* Team */}
      <TeamGrid />

      {/* Careers */}
      <section id="careers" className="scroll-mt-28 bg-smoke py-16 md:py-24">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Careers</p>
          <AnimatedHeading
            text="Make films with *us*."
            className="display-line text-bone text-[clamp(2rem,5vw,3.5rem)]"
          />
          <Reveal delay={0.1}>
            <p className="lead mt-6">
              We&apos;re always looking for filmmakers, photographers, editors and
              producers who care about craft. Freelance and full-time.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {["Cinematographers", "Editors & Colourists", "Producers", "Photographers"].map(
                (r) => (
                  <li
                    key={r}
                    className="flex items-center gap-3 border-b border-bone/10 py-3 text-bone/80"
                  >
                    <span className="text-gold">→</span>
                    {r}
                  </li>
                )
              )}
            </ul>
            <div className="mt-10">
              <MagneticButton href="/contact" variant="solid">
                Apply / Say Hello
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
