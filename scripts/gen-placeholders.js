// One-off generator for cinematic placeholder images (SVG). Copyright-safe —
// pure gradients/vignette/typography. Run: node scripts/gen-placeholders.js
const fs = require("fs");
const path = require("path");

const imgDir = path.join(__dirname, "..", "public", "assets", "images");
const portDir = path.join(imgDir, "portfolio");
fs.mkdirSync(portDir, { recursive: true });

const vignette = (id) => `
  <radialGradient id="vig${id}" cx="50%" cy="42%" r="75%">
    <stop offset="55%" stop-color="#000000" stop-opacity="0"/>
    <stop offset="100%" stop-color="#000000" stop-opacity="0.75"/>
  </radialGradient>`;

// A graded "film still": two-tone diagonal gradient + warm light pool +
// vignette + faint big number. No labels — the page supplies the real text.
function still({ w, h, a, b, glow, num = "", gx = 68, gy = 30, file }) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${a}"/>
      <stop offset="100%" stop-color="${b}"/>
    </linearGradient>
    <radialGradient id="glow" cx="${gx}%" cy="${gy}%" r="60%">
      <stop offset="0%" stop-color="${glow}" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="${glow}" stop-opacity="0"/>
    </radialGradient>
    ${vignette(file)}
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>
  ${num ? `<text x="${w - 40}" y="${h - 40}" text-anchor="end" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="${Math.round(h * 0.5)}" fill="#ffffff" fill-opacity="0.045">${num}</text>` : ""}
  <rect width="${w}" height="${h}" fill="url(#vig${file})"/>
</svg>`;
  fs.writeFileSync(path.join(portDir, file), svg.trim());
}

const tiles = [
  { a: "#10211f", b: "#060a0a", glow: "#1f6f63", num: "01", file: "work-01.svg" },
  { a: "#241a10", b: "#0a0705", glow: "#a9772a", num: "02", file: "work-02.svg" },
  { a: "#23110f", b: "#0a0504", glow: "#9c3b30", num: "03", file: "work-03.svg" },
  { a: "#0f1a24", b: "#05080a", glow: "#2f6da9", num: "04", file: "work-04.svg" },
  { a: "#1a1024", b: "#07050a", glow: "#6a3ba9", num: "05", file: "work-05.svg" },
  { a: "#101f17", b: "#05090a", glow: "#2fa96d", num: "06", file: "work-06.svg" },
  { a: "#20160c", b: "#080604", glow: "#c9a227", num: "07", file: "work-07.svg" },
  { a: "#0c1c20", b: "#04080a", glow: "#2f9aa9", num: "08", file: "work-08.svg" },
  { a: "#1d0f17", b: "#080406", glow: "#a93b73", num: "09", file: "work-09.svg" },
];
tiles.forEach((t) => still({ w: 1200, h: 800, ...t }));

// Approach section image (4:3, warm on-set tone)
still({ w: 1400, h: 1050, a: "#211a10", b: "#080604", glow: "#c9a227", gx: 60, gy: 30, file: "../approach.svg" });

// Contact page banner (cool studio tone)
still({ w: 1920, h: 1080, a: "#10161c", b: "#050708", glow: "#3a7bbf", gx: 65, gy: 25, file: "../contact.svg" });

// Section / page banners for the new architecture
still({ w: 1920, h: 1080, a: "#1c160c", b: "#070604", glow: "#c9a227", gx: 60, gy: 25, file: "../advertising.svg" });
still({ w: 1920, h: 1080, a: "#0e1118", b: "#050608", glow: "#5b6b8c", gx: 55, gy: 22, file: "../films.svg" });
still({ w: 1920, h: 1080, a: "#161616", b: "#060606", glow: "#9c7a3a", gx: 50, gy: 25, file: "../portfolio.svg" });
still({ w: 1920, h: 1080, a: "#171019", b: "#070509", glow: "#8a5fae", gx: 60, gy: 28, file: "../collaborate.svg" });
still({ w: 1400, h: 1050, a: "#101820", b: "#05080a", glow: "#3a7bbf", gx: 55, gy: 30, file: "../films-feature.svg" });

// Team portraits (4:5)
[["#1a1a1a","#c9a227"],["#171b1a","#2f9a8a"],["#1b1714","#c98a3a"],["#15171b","#5b7bbf"]].forEach(([base, glow], i) => {
  still({ w: 1000, h: 1250, a: base, b: "#080808", glow, gx: 50, gy: 30, file: `../team-${i + 1}.svg` });
});

// Wedding gallery (warm tones)
still({ w: 900, h: 1200, a: "#2a1d10", b: "#0d0805", glow: "#e0b872", gx: 50, gy: 30, file: "../wedding-1.svg" });
still({ w: 900, h: 1200, a: "#241910", b: "#0b0705", glow: "#d8a86a", gx: 40, gy: 40, file: "../wedding-2.svg" });
still({ w: 900, h: 1200, a: "#2b1e14", b: "#0e0806", glow: "#e8c486", gx: 60, gy: 35, file: "../wedding-3.svg" });

// Weddings — warm
still({ w: 1600, h: 900, a: "#2a1d10", b: "#0d0805", glow: "#e0b872", gx: 30, gy: 35, file: "../wedding.svg" });

// About hero — wide charcoal + gold
still({ w: 1920, h: 1080, a: "#161616", b: "#070707", glow: "#C9A227", gx: 50, gy: 20, file: "../about-hero.svg" });

// Kodi portrait — 4:5 with rim light
still({ w: 1000, h: 1250, a: "#171717", b: "#080808", glow: "#C9A227", gx: 75, gy: 25, file: "../kodi.svg" });

// OG share image — 1200x630 branded
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#161616"/><stop offset="100%" stop-color="#070707"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#C9A227" stop-opacity="0.3"/><stop offset="100%" stop-color="#C9A227" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <text x="600" y="300" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="92" letter-spacing="4" fill="#F5F5F5">THE GROOVE MEDIA</text>
  <text x="600" y="360" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" letter-spacing="8" fill="#C9A227">FILM PRODUCTION COMPANY · CHENNAI</text>
</svg>`;
fs.writeFileSync(path.join(imgDir, "og-image.svg"), og.trim());

console.log("Generated placeholder images in", portDir, "and", imgDir);
