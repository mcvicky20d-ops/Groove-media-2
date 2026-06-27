import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import Contact from "@/components/Contact";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact — Start a Project, Collaborate or Join",
  description:
    "Get in touch with The Groove Media, a film production company in Chennai. Start a project, collaborate, or explore careers. Call +91 78128 91696 or message on WhatsApp.",
};

const TABS = [
  { id: "start-a-project", label: "Start a Project" },
  { id: "collaborate", label: "Collaborate" },
  { id: "careers", label: "Careers" },
];

function MiniCTA({ id, eyebrow, title, text, href, cta }) {
  return (
    <section id={id} className="scroll-mt-28 bg-ink py-16 md:py-20">
      <div className="container-x max-w-3xl text-center">
        <p className="eyebrow justify-center">{eyebrow}</p>
        <AnimatedHeading
          text={title}
          className="display-line text-bone text-[clamp(1.9rem,4.5vw,3.25rem)]"
        />
        <Reveal delay={0.1}>
          <p className="lead mx-auto mt-5 max-w-xl">{text}</p>
          <div className="mt-8 flex justify-center">
            <MagneticButton href={href} variant="solid">
              {cta}
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let's create something *meaningful*."
        subtitle="Planning a campaign or a film? Tell us what you have in mind."
        image="/assets/images/contact.jpg"
      />
      <SubNav items={TABS} />

      <div id="start-a-project" className="scroll-mt-28">
        <Contact />
      </div>

      <MiniCTA
        id="collaborate"
        eyebrow="Collaborate"
        title="Creators, models, brands & *agencies*."
        text="We're building a network of partners. If you create, model, style or market — let's connect."
        href="/collaborate"
        cta="Explore Collaborate"
      />

      <MiniCTA
        id="careers"
        eyebrow="Careers"
        title="Make films with *us*."
        text="We're always looking for filmmakers, photographers, editors and producers who care about craft."
        href="/about#careers"
        cta="See Open Roles"
      />

      <Footer />
    </main>
  );
}
