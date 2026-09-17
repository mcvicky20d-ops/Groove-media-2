"use client";

import Link from "next/link";

const EMAIL = "mediathegroove@gmail.com";
const INSTAGRAM = "https://www.instagram.com/the.groove.media";
const WHATSAPP = "https://wa.me/917812891696";

const iconClass =
  "h-4 w-4 shrink-0 text-bone/45 transition-colors group-hover:text-gold";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={iconClass} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.86 9.86 0 0 0 4.74 1.21h.004c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.06 8.06 0 0 1 2.37 5.73c0 4.48-3.65 8.12-8.13 8.12a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.14.82.84-3.06-.2-.31a8.03 8.03 0 0 1-1.24-4.28c0-4.48 3.65-8.12 8.13-8.12Zm-2.6 4.03c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.7 2.6 4.14 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.76-1.8-.18-.42-.36-.42-.54-.43h-.5Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={iconClass} aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink pt-20">
      <div className="container-x">
        <div className="flex flex-col gap-12 border-b border-bone/10 pb-16 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-display text-2xl uppercase tracking-tight text-bone"
            >
              The Groove<span className="text-gold">.</span>Media
            </Link>
            <p className="mt-4 text-bone/50">
              A film and visual production company based in Chennai. We produce
              films for brands, people, and ideas.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">
                Explore
              </p>
              <ul className="mt-4 space-y-3 text-bone/60">
                {[
                  ["Advertising", "/advertising"],
                  ["Weddings", "/weddings"],
                  ["Films", "/films"],
                  ["About", "/about"],
                  ["Careers", "/careers"],
                  ["Work With Us", "/work-with-us"],
                  ["Updates", "/updates"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-bone">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">
                Connect
              </p>
              <ul className="mt-4 space-y-3 text-bone/60">
                <li>
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 hover:text-bone"
                  >
                    <InstagramIcon />
                    @the.groove.media
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 hover:text-bone"
                  >
                    <WhatsAppIcon />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="group inline-flex items-center gap-2.5 hover:text-bone"
                  >
                    <MailIcon />
                    Email
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">
                Studio
              </p>
              <p className="mt-4 text-bone/60">
                West Mambalam,
                <br />
                Chennai 600033
              </p>
              <a
                href="tel:+917812891696"
                className="mt-3 block text-bone/60 hover:text-bone"
              >
                +91 78128 91696
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-bone/40 md:flex-row">
          <p>© {year} The Groove Media. All rights reserved.</p>
          <p>Chennai · Est. 2018</p>
        </div>
      </div>
    </footer>
  );
}
