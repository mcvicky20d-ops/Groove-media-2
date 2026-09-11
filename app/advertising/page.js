import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PhotoCollage from "@/components/PhotoCollage";
import LogoCarousel from "@/components/LogoCarousel";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Advertising — Brand Films, Photography & Content, Chennai",
  description:
    "Advertising films, brand films, campaign content and commercial photography by The Groove Media — for brands and creative teams in Chennai.",
};

// Our Clients — every brand logo we have, on white chips.
const CLIENT_LOGOS = [
  "/assets/images/brands/sree-kumaran.webp",
  "/assets/images/clients/itc-hotels.webp",
  "/assets/images/brands/westin.webp",
  "/assets/images/brands/refex.webp",
  "/assets/images/brands/triune-tech.webp",
  "/assets/images/brands/phoenix.webp",
  "/assets/images/brands/wrangler.webp",
  "/assets/images/brands/hilton.webp",
  "/assets/images/brands/myntra.webp",
  "/assets/images/brands/narayana-pearls.webp",
  "/assets/images/brands/goa-titos.webp",
  "/assets/images/brands/nac.webp",
  "/assets/images/brands/pacifica.svg",
  "/assets/images/brands/jairam.svg",
  "/assets/images/clients/crocs-india.webp",
];

// Behind-the-scenes — dummy stills for now; swap for real BTS photos later.
const BTS_IMAGES = [
  "/assets/images/cat/auto-1.webp",
  "/assets/images/cat/photo-1.webp",
  "/assets/images/cat/jewel-7.webp",
  "/assets/images/cat/photo-3.webp",
  "/assets/images/cat/wed-couple-1.webp",
  "/assets/images/cat/photo-2.webp",
];

// Client testimonials — placeholder copy; replace with real, approved quotes.
const TESTIMONIALS = [
  { quote: "They understood the brand in one conversation and turned it into a film that genuinely moved our audience. Effortless from brief to delivery.", name: "Marketing Lead", org: "Hospitality Brand" },
  { quote: "The craft is on another level — every frame felt intentional. Our campaign performed beyond what we projected.", name: "Brand Manager", org: "Retail / Fashion" },
  { quote: "End-to-end, on time, and zero drama. The Groove Media is the team we call first for anything on camera.", name: "Creative Producer", org: "Agency Partner" },
  { quote: "From concept to final cut, they made a complex shoot feel simple. The films still get compliments months later.", name: "Head of Marketing", org: "Jewellery Brand" },
  { quote: "A rare mix of creativity and reliability. They pitched a sharper idea than our brief — and then delivered it flawlessly.", name: "Founder", org: "Real Estate" },
  { quote: "Our social content finally looks like the brand we want to be. Consistent, premium, and always on schedule.", name: "Digital Lead", org: "Automotive" },
];

// A simple play button for the (empty) film slots.
function PlayButton() {
  return (
    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-bone/30 bg-ink/40 text-bone transition-all duration-500 ease-cinematic group-hover:scale-110 group-hover:border-gold group-hover:text-gold">
      <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

export default function AdvertisingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Advertising"
        title="Films that make brands worth *watching*."
        subtitle="We create advertising films, brand films, campaign content and commercial photography for brands and creative teams — from the first idea to the final frame."
        image="/assets/images/advertising-banner.webp"
      />

      {/* Advertising Films — four film slots (9:16) */}
      <SectionHeading
        title="Advertising *Films*"
        sub="Brand and ad films made to be watched, shared and remembered."
      />
      <div className="bg-ink pb-16 md:pb-24">
        <div className="container-x mt-16 md:mt-24">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="group relative flex aspect-[9/16] items-center justify-center overflow-hidden rounded-2xl border border-bone/10 bg-gradient-to-b from-smoke to-ink"
              >
                <PlayButton />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Collage */}
      <SectionHeading
        title="Collage"
        sub="A frame-by-frame look at our commercial photography."
      />
      <div className="bg-ink pb-16 md:pb-24">
        <div className="mt-10">
          <PhotoCollage />
        </div>
      </div>

      {/* Behind the Scenes — 2×3 image grid */}
      <SectionHeading
        title="Behind the *Scenes*"
        sub="Our crew, our cameras and the making-of, on every set."
      />
      <div className="bg-ink pb-16 md:pb-24">
        <div className="container-x mt-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {BTS_IMAGES.map((src, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-bone/10"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-cinematic group-hover:scale-105"
                  style={{ backgroundImage: `url(${src})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Clients — auto-scrolling logo carousel */}
      <SectionHeading
        title="Our *Clients*"
        sub="Brands that trust us with their story."
      />
      <div className="bg-ink pb-16 md:pb-24">
        <div className="mt-10">
          <LogoCarousel logos={CLIENT_LOGOS} />
        </div>
      </div>

      {/* Client Testimonials */}
      <Testimonials
        eyebrow="Client Testimonials"
        title="What our *clients* say."
        quotes={TESTIMONIALS}
      />

      <CTASection
        title="Have a campaign in *mind?*"
        text="Let's turn the idea into something people want to watch."
      />
      <Footer />
    </main>
  );
}
