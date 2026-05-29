import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact — Start a Film or Campaign",
  description:
    "Get in touch with The Groove Media, a film production company in Chennai. Call +91 78128 91696, message on WhatsApp, or send a project brief. Studio in West Mambalam, Chennai.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Start a *project.*"
        subtitle="Planning a campaign or a film? Tell us what you have in mind."
      />
      <Contact />
      <Footer />
    </main>
  );
}
