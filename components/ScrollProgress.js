"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin gold progress bar at the very top of the viewport. Uses a transform
 * (scaleX) so it's GPU-composited and cheap.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[950] h-[3px] origin-left bg-gradient-to-r from-gold via-[#E9CE7A] to-gold"
    />
  );
}
