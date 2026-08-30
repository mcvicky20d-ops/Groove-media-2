// Normalize client logos so they read at a COMMON size on the Trusted By wall.
// Each logo is trimmed tight, scaled to a shared optical height (capped width),
// then centred on an identical 5:3 white canvas that matches the tile. Result:
// uniform, larger logos. Run: node scripts/normalize-clients.js
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const dir = path.join(__dirname, "..", "public", "assets", "images", "clients");
const CW = 1000; // canvas width
const CH = 600; //  canvas height (5:3, matches the tile aspect)
const TARGET_H = Math.round(CH * 0.58); // shared logo height
const MAX_W = Math.round(CW * 0.92); //    width cap for very wide wordmarks

const files = fs.readdirSync(dir).filter((f) => /\.webp$/i.test(f));

(async () => {
  for (const f of files) {
    const p = path.join(dir, f);
    const src = fs.readFileSync(p);

    // tight trim to the mark
    const t = await sharp(src)
      .flatten({ background: "#ffffff" })
      .trim({ background: "#ffffff", threshold: 18 })
      .toBuffer({ resolveWithObject: true });

    // scale to the shared height, capping width
    let scale = TARGET_H / t.info.height;
    let w = Math.round(t.info.width * scale);
    let h = TARGET_H;
    if (w > MAX_W) {
      scale = MAX_W / t.info.width;
      w = MAX_W;
      h = Math.round(t.info.height * scale);
    }

    const mark = await sharp(t.data).resize(w, h).toBuffer();

    // centre on an identical white canvas
    const out = await sharp({
      create: { width: CW, height: CH, channels: 4, background: "#ffffff" },
    })
      .composite([
        { input: mark, left: Math.round((CW - w) / 2), top: Math.round((CH - h) / 2) },
      ])
      .webp({ quality: 92 })
      .toBuffer();

    fs.writeFileSync(p, out);
    console.log(`normalized ${f}  mark ${w}x${h} on ${CW}x${CH}`);
  }
  console.log("done");
})();
