# Assets — drop your real media here

All files in `public/` are served from the site root. A file at
`public/assets/videos/hero-bg.mp4` is referenced in code as
`/assets/videos/hero-bg.mp4`.

## What goes where

```
public/assets/
├── videos/
│   ├── hero-bg.mp4        ← homepage hero loop (15–30s, MUTED, H.264, < 5 MB ideally, 1080p)
│   ├── showreel.mp4       ← optional full showreel
│   └── work/
│       ├── work-01.mp4    ← hover clip for the large featured tile
│       └── work-04.mp4    ← hover clip for the wide tile
├── images/
│   ├── hero-poster.svg    ← placeholder poster (replace with hero-poster.jpg + update Hero.js)
│   ├── og-image.jpg       ← 1200×630 social share image
│   ├── about-hero.jpg     ← About page banner
│   ├── kodi.jpg           ← portrait for the About page (4:5)
│   ├── logo.png           ← transparent logo (optional)
│   ├── portfolio/
│   │   ├── work-01.jpg … work-06.jpg   ← portfolio poster images
│   │   └── wedding.jpg                 ← weddings section backdrop
│   └── clients/          ← optional client logo PNGs (marquee currently uses text)
```

## Video optimization tip
Compress the hero video at https://www.freeconvert.com → target under ~5 MB,
1080p, MP4 (H.264). A heavy hero video is the #1 thing that slows this kind of
site and hurts SEO/leads.

## Notes
- Filenames are wired up in `components/SelectedWork.js`, `components/Hero.js`,
  `components/Weddings.js`, and `app/about/page.js`. Match the names above and
  the media appears automatically — no code changes needed.
- Until real files are added, tiles show labeled "Placeholder" text and the
  hero shows a dark poster. Nothing breaks.
