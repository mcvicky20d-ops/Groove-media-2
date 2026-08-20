"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { label: "Advertising", href: "/advertising" },
  { label: "Weddings", href: "/weddings" },
  { label: "Films", href: "/films" },
  { label: "Contact", href: "/contact" },
  { label: "About Us", href: "/about" },
];

// "More" dropdown items.
const MORE = [{ label: "Careers", href: "/about#careers" }];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus whenever the route changes.
  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  const linkClass = (active) =>
    `group relative text-xs uppercase tracking-wide transition-colors hover:text-bone xl:text-sm ${
      active ? "text-bone" : "text-bone/70"
    }`;
  const underline = (active) =>
    `absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
      active ? "w-full" : "w-0 group-hover:w-full"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[900] transition-all duration-500 ease-cinematic ${
        scrolled ? "bg-ink/80 py-4 backdrop-blur-md" : "bg-transparent py-6"
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg uppercase tracking-tight text-bone"
        >
          The Groove<span className="text-gold">.</span>Media
        </Link>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link href={link.href} className={linkClass(active)}>
                  {link.label}
                  <span className={underline(active)} />
                </Link>
              </li>
            );
          })}

          {/* More dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              onClick={() => setMoreOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={moreOpen}
              className={`${linkClass(false)} flex items-center gap-1`}
            >
              More
              <span
                className={`text-[0.7em] transition-transform duration-300 ${
                  moreOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute right-0 top-full mt-4 min-w-[160px] rounded-xl border border-bone/10 bg-ink/95 p-2 backdrop-blur-md"
                >
                  {MORE.map((m) => (
                    <li key={m.href}>
                      <Link
                        href={m.href}
                        className="block rounded-lg px-4 py-2.5 text-xs uppercase tracking-wide text-bone/70 transition-colors hover:bg-smoke hover:text-gold"
                      >
                        {m.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-px w-6 bg-bone transition-all duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-bone transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-bone transition-all duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="container-x flex flex-col gap-6 py-8">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-display text-3xl uppercase text-bone"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {/* More group */}
              <li className="border-t border-bone/10 pt-6">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">
                  More
                </p>
                <ul className="flex flex-col gap-4">
                  {MORE.map((m) => (
                    <li key={m.href}>
                      <Link
                        href={m.href}
                        className="font-display text-2xl uppercase text-bone/80"
                      >
                        {m.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
