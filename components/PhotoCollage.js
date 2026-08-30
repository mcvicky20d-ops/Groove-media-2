// Photography collage for the Advertising page.
// Desktop (lg+): a single 5×3 grid with the caption in the dead-centre cell.
// Mobile / tablet: a clean 2- / 3-column photo grid split by a full-width,
// centred caption band — so the text still sits in the middle, with no gaps.

const IMAGES = [
  "01", "02", "03", "04", "05", "06", "07",
  "09", "10", "11", "12", "13", "14", "15",
].map((n) => `/assets/images/photo-collage/img-${n}.webp`);

const CAPTION =
  "Commercial photography created for brands, campaigns, products and people.";

function Tile({ src }) {
  return (
    <div className="group relative aspect-square overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="Commercial photography by The Groove Media"
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
      />
    </div>
  );
}

export default function PhotoCollage() {
  return (
    <>
      {/* Desktop: 5×3 grid, caption in the centre cell */}
      <div className="hidden grid-cols-5 lg:grid">
        {IMAGES.slice(0, 7).map((src) => (
          <Tile key={src} src={src} />
        ))}
        <div className="flex aspect-square items-center justify-center bg-white p-3 text-center">
          <p className="max-w-[20ch] font-medium leading-snug text-ink lg:text-base">
            {CAPTION}
          </p>
        </div>
        {IMAGES.slice(7).map((src) => (
          <Tile key={src} src={src} />
        ))}
      </div>

      {/* Mobile / tablet: photos, centred caption band, more photos */}
      <div className="lg:hidden">
        <div className="grid grid-cols-2 sm:grid-cols-3">
          {IMAGES.slice(0, 6).map((src) => (
            <Tile key={src} src={src} />
          ))}
        </div>
        <div className="flex items-center justify-center bg-white px-6 py-10 text-center">
          <p className="max-w-sm font-medium leading-snug text-ink">{CAPTION}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3">
          {IMAGES.slice(6).map((src) => (
            <Tile key={src} src={src} />
          ))}
        </div>
      </div>
    </>
  );
}
