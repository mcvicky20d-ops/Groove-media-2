"use client";

import Link from "next/link";

const EMAIL = "mediathegroove@gmail.com";
const INSTAGRAM = "https://www.instagram.com/the.groove.media";
const WHATSAPP = "https://wa.me/917812891696";

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
                  ["Portfolio", "/portfolio"],
                  ["Collaborate", "/collaborate"],
                  ["About", "/about"],
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
                    className="hover:text-bone"
                  >
                    @the.groove.media
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-bone"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="hover:text-bone">
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
