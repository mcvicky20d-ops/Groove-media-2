import PageHero from "@/components/PageHero";
import FilterGallery from "@/components/FilterGallery";
import LogoWall from "@/components/LogoWall";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio — Films, Weddings & Photography",
  description:
    "Selected work by The Groove Media across advertising, weddings, films and photography. A visual portfolio of a Chennai film production company.",
};

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        eyebrow="Portfolio"
        title="Selected *work*."
        subtitle="Advertising, weddings, films and photography — in one place."
        image="/assets/images/portfolio.jpg"
      />
      <FilterGallery />
      <LogoWall />
      <CTASection title="Like what you *see?*" />
      <Footer />
    </main>
  );
}
