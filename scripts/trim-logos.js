// One-off: trim baked-in whitespace from client logos so they fill their tiles
// evenly. Flatten onto white, auto-trim the white border, add a tight uniform
// margin, cap size. Run: node scripts/trim-logos.js
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const dir = path.join(__dirname, "..", "public", "assets", "images", "clients");
// clean any leftover temp files
fs.readdirSync(dir)
  .filter((f) => f.endsWith(".tmp"))
  .forEach((f) => fs.unlinkSync(path.join(dir, f)));

const files = fs.readdirSync(dir).filter((f) => /\.webp$/i.test(f));

(async () => {
  for (const f of files) {
    const p = path.join(dir, f);
    const src = fs.readFileSync(p); // read into buffer -> no open file handle on p

    const trimmed = await sharp(src)
      .flatten({ background: "#ffffff" })
      .trim({ background: "#ffffff", threshold: 18 })
      .toBuffer({ resolveWithObject: true });

    const { width, height } = trimmed.info;
    const margin = Math.round(Math.max(width, height) * 0.03); // tight margin

    const out = await sharp(trimmed.data)
      .extend({ top: margin, bottom: margin, left: margin, right: margin, background: "#ffffff" })
      .resize({ width: 720, withoutEnlargement: true })
      .webp({ quality: 92 })
      .toBuffer();

    fs.writeFileSync(p, out);
    console.log(`trimmed ${f}  ${width}x${height} (+${margin}px)`);
  }
  console.log("done");
})();
