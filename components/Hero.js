"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/ui/MagneticButton";
import TextRotator from "@/components/ui/TextRotator";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  // Play the looping background video everywhere (muted + playsInline autoplays
  // on mobile too). Only skip it if the user has Data Saver turned on.
  const [useVideo, setUseVideo] = useState(true);

  useEffect(() => {
    const saveData =
      navigator.connection && navigator.connection.saveData === true;
    if (saveData) setUseVideo(false);
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    // Parallax is desktop-only — on mobile it competes with touch scrolling.
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (prefersReduced || !useVideo || !isDesktop) return;

    const ctx = gsap.context(() => {
      gsap.to(videoRef.current, {
        yPercent: 18,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [useVideo]);

  // 3D entrance: lines lift and rotate in from below on a perspective plane.
  const reveal3d = {
    hidden: { opacity: 0, y: 40, rotateX: -45 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.4 + i * 0.15 },
    }),
  };
  const fadeUp = reveal3d;

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      {/* Background. Desktop: looping video. Mobile / save-data: static image
          (the video is never downloaded). Replace files in /assets. */}
      <div className="absolute inset-0 z-0">
        {useVideo ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/images/hero-poster.svg"
          >
            <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        ) : (
          <div
            ref={videoRef}
            role="img"
            aria-label="The Groove Media cinematic showreel still"
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url(/assets/images/hero-poster.svg)" }}
          />
        )}
        {/* Cinematic gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-ink/30" />
      </div>

      <div
        className="container-x relative z-10 text-center"
        style={{ perspective: "900px" }}
      >
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-6 text-xs uppercase tracking-[0.4em] text-gold"
        >
          Chennai · Est. 2018
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          style={{ transformStyle: "preserve-3d" }}
          className="display-line mx-auto max-w-5xl text-balance text-bone text-[clamp(2rem,8vw,6.5rem)]"
        >
          We produce{" "}
          <span className="bg-gradient-to-r from-gold via-[#E9CE7A] to-gold bg-clip-text text-transparent">
            films.
          </span>{" "}
          For{" "}
          <TextRotator
            words={["brands.", "people.", "ideas."]}
            srText="brands, people, and ideas."
            className="text-gold"
          />
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto mt-8 max-w-xl text-balance text-base text-bone/70 sm:text-lg"
        >
          A film and visual production company based in Chennai.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="/portfolio" variant="solid">
            View Work
          </MagneticButton>
          <MagneticButton href="/contact" variant="outline">
            Start a Project
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 items-start justify-center rounded-full border border-bone/30 p-2">
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
