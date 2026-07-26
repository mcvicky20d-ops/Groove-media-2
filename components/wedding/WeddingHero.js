"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

/**
 * Editorial full-screen wedding hero — a single cinematic still with a large
 * serif-accented tagline, in the House-on-the-Clouds spirit but on the dark
 * Groove theme.
 */
export default function WeddingHero() {
  const up = {
    hidden: { opacity: 0, y: 30 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.14 },
    }),
  };

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/assets/images/cat/wed-couple-2.webp)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink" />
        <div className="absolute inset-0 bg-ink/25" />
      </div>

      <div className="container-x relative z-10 text-center">
        <motion.p
          custom={0}
          variants={up}
          initial="hidden"
          animate="show"
          className="mb-6 text-xs uppercase tracking-[0.5em] text-[#E0B872]"
        >
          The Groove Media · Weddings
        </motion.p>

        <motion.h1
          custom={1}
          variants={up}
          initial="hidden"
          animate="show"
          className="display-line mx-auto max-w-4xl text-balance text-bone text-[clamp(2.5rem,8vw,6rem)]"
        >
          Your wedding, told like a{" "}
          <span className="accent-serif text-[#E9CE7A]">film.</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={up}
          initial="hidden"
          animate="show"
          className="mx-auto mt-8 max-w-xl text-balance text-base text-bone/70 sm:text-lg"
        >
          Cinematic wedding films &amp; photography — timeless, unhurried, and
          deeply personal.
        </motion.p>

        <motion.div
          custom={3}
          variants={up}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="#featured" variant="solid">
            View Weddings
          </MagneticButton>
          <MagneticButton href="/contact" variant="outline">
            Enquire
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 items-start justify-center rounded-full border border-bone/30 p-2">
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-[#E0B872]"
          />
        </div>
      </motion.div>
    </section>
  );
}
