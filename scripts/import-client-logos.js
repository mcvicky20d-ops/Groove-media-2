// Import the new client logos: flatten each onto white, trim the surrounding
// space, then centre on an identical white canvas so they read uniformly on the
// carousel's white chips. Output: public/assets/images/client-logos/logo-NN.webp
// Run: node scripts/import-client-logos.js
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const src = path.join(
  __dirname,
  "..",
  "_client-uploads",
  "logos",
  "newlogos",
  "without white bg_"
);
const outDir = path.join(__dirname, "..", "public", "assets", "images", "client-logos");
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

const CW = 1000;
const CH = 600; //     5:3 canvas (matches the chip)
const BOX_W = Math.round(CW * 0.8); // every logo fits inside this box (contain)
const BOX_H = Math.round(CH * 0.6); // → uniform visual size across the set

// files to drop from the set (removed by the client)
const EXCLUDE = new Set(["6.webp", "24.webp"]);

// numeric sort of the messy filenames (e.g. "12 .webp", "3.webp", "29.png")
const files = fs
  .readdirSync(src)
  .filter((f) => /\.(webp|png|jpe?g)$/i.test(f))
  .filter((f) => !EXCLUDE.has(f.trim()))
  .sort((a, b) => (parseInt(a, 10) || 0) - (parseInt(b, 10) || 0));

(async () => {
  let n = 0;
  for (const f of files) {
    const buf = fs.readFileSync(path.join(src, f));
    const t = await sharp(buf)
      .flatten({ background: "#ffffff" })
      .trim({ background: "#ffffff", threshold: 18 })
      .toBuffer({ resolveWithObject: true });

    // contain-fit into a shared box so all logos read at a consistent size
    const scale = Math.min(BOX_W / t.info.width, BOX_H / t.info.height);
    const w = Math.max(1, Math.round(t.info.width * scale));
    const h = Math.max(1, Math.round(t.info.height * scale));
    const mark = await sharp(t.data).resize(w, h).toBuffer();
    const out = await sharp({
      create: { width: CW, height: CH, channels: 4, background: "#ffffff" },
    })
      .composite([{ input: mark, left: Math.round((CW - w) / 2), top: Math.round((CH - h) / 2) }])
      .webp({ quality: 92 })
      .toBuffer();

    n += 1;
    const name = `logo-${String(n).padStart(2, "0")}.webp`;
    fs.writeFileSync(path.join(outDir, name), out);
    console.log(`${f}  ->  ${name}  (${w}x${h})`);
  }
  console.log(`\nDone: ${n} logos in`, outDir);
})();
