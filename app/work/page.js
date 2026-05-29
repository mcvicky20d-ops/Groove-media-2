import PageHero from "@/components/PageHero";
import SelectedWork from "@/components/SelectedWork";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Work — Films, Campaigns & Photography",
  description:
    "Selected work from The Groove Media — advertising films, brand campaigns and commercial photography across fashion, retail, hospitality and culture-driven brands in Chennai.",
};

export default function WorkPage() {
  return (
    <main>
      <PageHero
        eyebrow="Selected Work"
        title="A reel of films, campaigns, and frames."
        subtitle="Our work moves across fashion, retail, hospitality, and culture-driven brands."
        image="/assets/images/portfolio/work-01.svg"
      />
      <SelectedWork />
      <CTASection title="Got a project in mind?" />
      <Footer />
    </main>
  );
}
