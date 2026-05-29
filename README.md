# The Groove Media

Cinematic, dark-theme website for **The Groove Media** — a film & visual
production company in Chennai (est. 2018). Built with Next.js 14 (App Router),
Tailwind CSS, Framer Motion, GSAP/ScrollTrigger, and Lenis smooth scroll.

## Run it

```bash
npm install      # already done
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Project structure

Multi-page site (App Router). Each route has its own SEO metadata.

```
app/
  layout.js        Fonts, SEO metadata, JSON-LD schema, global shell (nav, bg, cursor)
  page.js          Home — Hero + WhatWeDo + clients + Stats + WorkMatters + CTA
  work/page.js     Portfolio (PageHero + SelectedWork + CTA)
  services/page.js What we do (PageHero + WhatWeDo + Production + Stats + CTA)
  weddings/page.js Weddings vertical (PageHero + Weddings + CTA)
  about/page.js    About (studio + Kodi)
  contact/page.js  Contact (PageHero + form/map/WhatsApp)
  globals.css      Theme tokens, Lenis + custom-cursor styles
  robots.js        /robots.txt
  sitemap.js       /sitemap.xml (all routes)
components/
  SmoothScroll.js  Lenis + GSAP ticker
  CustomCursor.js  Glowing dot + trailing ring (desktop only)
  Preloader.js     Letter reveal → curtain
  Navbar.js        Sticky nav + mobile menu + anchor smooth-scroll
  Hero.js          Fullscreen bg video + parallax + animated headline
  WhatWeDo.js      Services grid (stagger reveal + hover lift)
  SelectedWork.js  Bento portfolio grid (hover-play video) + ClientMarquee
  ClientMarquee.js Infinite client logo marquee
  Production.js    Horizontal-scroll pinned timeline (desktop)
  Stats.js         Count-up stat counters
  Weddings.js      Warmer-mood weddings vertical
  WorkMatters.js   Big statement typography
  Contact.js       Lead form (→ WhatsApp) + studio info + map
  Footer.js        Logo, links, contact
  ui/              AnimatedHeading (GSAP split text), MagneticButton, Reveal
public/assets/     Your media — see public/assets/README.md
```

## Sample media (replace with real assets)

The site ships with **sample/placeholder media** so it looks complete:
- Videos in `public/assets/videos/` are free CC0 clips (MDN flower, Big Buck
  Bunny) — swap for the studio's real reel/footage (keep the filenames).
- Images in `public/assets/images/` are generated cinematic gradient "stills"
  (SVG). Regenerate with `node scripts/gen-placeholders.js`, or replace with
  real photos. If you swap to `.jpg/.png`, update the paths in
  `SelectedWork.js`, `Weddings.js`, `about/page.js`, and `layout.js`
  (currently `.svg`). Note: real social previews need a raster `og-image`.

## Customizing

- **Media:** drop real files into `public/assets/` using the names in
  `public/assets/README.md`. They appear automatically — no code changes.
- **Colors:** edit the theme tokens in `tailwind.config.js`
  (`ink`, `bone`, `gold`, `smoke`). Want pure black/white minimal? Set
  `gold` to `#F5F5F5`.
- **Content:** all copy lives in the component files (clearly readable).
- **SEO:** update the `siteUrl` and metadata in `app/layout.js`.

## Leads engine (n8n)

The contact form POSTs to `app/api/lead/route.js`, which forwards the lead to
your **n8n** webhook server-side (keeps the URL private, avoids CORS):

1. Copy `.env.local.example` → `.env.local`
2. Paste your n8n Cloud webhook URL into `N8N_WEBHOOK_URL`
3. Restart `npm run dev`

On submit the form shows a success animation and offers a "Continue on
WhatsApp" button. If the server is unreachable, it falls back to a WhatsApp
link so the lead still reaches the studio. Until the env var is set, leads are
accepted (success shows) but not forwarded — see the server log warning.

Suggested n8n flow: webhook → email alert to mediathegroove@gmail.com →
auto-reply to client → append to Google Sheet → Telegram/WhatsApp ping to Kodi.

## Cinematic depth & conversion features

- **`ShaderBackground.js`** — cinematic depth behind transparent sections.
  Now **static layered CSS radial gradients** (no WebGL, no animation). The
  earlier WebGL/blurred-blob versions forced continuous GPU/compositor work
  that caused scroll jank on lower-end machines; the static version is free.
- **`GrainOverlay.js`** — static CSS film-grain. Uses a normal blend (NOT
  `mix-blend-mode`), because a full-screen `mix-blend` layer re-composites the
  whole viewport every scroll frame — a major jank source.
- **3D tilt** — `react-parallax-tilt` on Selected Work cards (desktop only).
- **`FloatingActions.js`** — sticky WhatsApp button (all pages) + "Get a Quote"
  CTA that appears after the first viewport of scroll.
- **`ExitIntentPopup.js`** — free-consultation offer on exit intent (desktop
  mouse-leave; once per session via `sessionStorage`).

## SEO

- Title: "The Groove Media | Film Production Company in Chennai"; keywords
  target "film production company Chennai" + "advertising film makers Chennai".
- JSON-LD: `LocalBusiness` (NAP + geo + hours) and `VideoObject` (showreel).
- `sitemap.xml`, `robots.txt`, OpenGraph + Twitter cards with alt text.
- Note: portfolio visuals are CSS backgrounds for the hover-video effect; if
  you want them indexed as images, switch the tiles to `next/image` with `alt`.

## Notes / performance

- Hero loads the video on desktop only; mobile + Save-Data get a static image.
- Work-tile videos use `preload="none"` and play on hover only.
- All animations respect `prefers-reduced-motion`.
- Horizontal-scroll Production section pins on desktop; stacks on mobile.
- Custom cursor is desktop-only (fine pointer); touch devices keep native.
- **Don't run `npm run build` while `npm run dev` is running** — they share
  `.next` and it corrupts the dev cache. Stop dev first (or `rm -rf .next`).
