import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import ContentSection from "@/components/ContentSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Films — Documentaries, Music Videos & Originals",
  description:
    "Original films from The Groove Media: documentaries, music videos, short films and original productions in development. Narrative work beyond advertising, based in Chennai.",
};

const TABS = [
  { id: "documentaries", label: "Documentaries" },
  { id: "music-videos", label: "Music Videos" },
  { id: "short-films", label: "Short Films" },
  { id: "original-productions", label: "Original Productions" },
  { id: "development", label: "Development" },
];

export default function FilmsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Films"
        title="Original documentaries, music videos and *stories*."
        subtitle="The narrative side of Groove — work we make because it matters, not just because it's briefed."
        image="/assets/images/films.jpg"
      />
      <SubNav items={TABS} />

      <ContentSection
        id="documentaries"
        eyebrow="Documentaries"
        title="Real people, honest frames."
        intro="Long-form documentary work — including an ongoing project on the tribal communities of the Kodaikanal hills."
        items={["Feature documentaries", "Short docs", "Branded documentaries", "Social-impact films"]}
        image="/assets/images/films-feature.jpg"
      />
      <ContentSection
        id="music-videos"
        eyebrow="Music Videos"
        title="Music, given a picture."
        intro="Music videos and live sessions for independent artists and labels."
        items={["Independent artists", "Labels", "Live sessions", "Lyric & performance films"]}
        image="/assets/images/portfolio/work-08.jpg"
        reverse
        dark
      />
      <ContentSection
        id="short-films"
        eyebrow="Short Films"
        title="Stories worth ten minutes."
        intro="Short narrative films — a space to experiment with craft and voice."
        items={["Narrative shorts", "Anthologies", "Festival submissions", "Concept films"]}
        image="/assets/images/portfolio/work-06.jpg"
      />
      <ContentSection
        id="original-productions"
        eyebrow="Original Productions"
        title="Made by Groove, for the world."
        intro="Self-initiated productions where we own the idea end to end."
        items={["Original series", "Branded originals", "Independent cinema", "Web films"]}
        image="/assets/images/portfolio/work-09.jpg"
        reverse
        dark
      />
      <ContentSection
        id="development"
        eyebrow="Development"
        title="What we're building next."
        intro="Projects currently in development — the future of the studio."
        items={["Feature documentaries", "Branded originals", "Independent cinema", "Long-form series"]}
        image="/assets/images/films.jpg"
      />

      <CTASection
        title="Collaborate on a *film?*"
        text="Artists, labels, and producers — we'd love to hear what you're making."
      />
      <Footer />
    </main>
  );
}
