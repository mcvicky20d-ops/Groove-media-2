// Generates monogram logo marks (SVG) as swappable placeholders for real brand
// logos. Run: node scripts/gen-brand-logos.js  (writes to public/assets/images/brands/)
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "public", "assets", "images", "brands");
fs.mkdirSync(dir, { recursive: true });

// [file, monogram]
const BRANDS = [
  ["sree-kumaran", "SK"],
  ["westin", "W"],
  ["refex", "Rx"],
  ["triune-tech", "T3"],
  ["phoenix", "PMC"],
  ["pacifica", "Pa"],
  ["wrangler", "Wr"],
  ["jairam", "J"],
  ["hilton", "H"],
  ["myntra", "M"],
  ["narayana-pearls", "NP"],
  ["goa-titos", "T's"],
  ["nac", "NAC"],
];

function logo(mono) {
  const size = mono.length > 2 ? 58 : mono.length > 1 ? 74 : 92;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">
  <circle cx="120" cy="120" r="112" fill="none" stroke="#C9A227" stroke-width="2" stroke-opacity="0.55"/>
  <circle cx="120" cy="120" r="100" fill="none" stroke="#F5F5F5" stroke-width="1" stroke-opacity="0.12"/>
  <circle cx="120" cy="20" r="4" fill="#C9A227"/>
  <text x="120" y="120" text-anchor="middle" dominant-baseline="central"
    font-family="Georgia, 'Times New Roman', serif" font-size="${size}" letter-spacing="1"
    fill="#F5F5F5">${mono}</text>
</svg>`;
}

BRANDS.forEach(([file, mono]) => {
  fs.writeFileSync(path.join(dir, `${file}.svg`), logo(mono).trim());
});

console.log(`Generated ${BRANDS.length} brand logo marks in`, dir);
