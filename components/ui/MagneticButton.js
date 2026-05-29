"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Button/link with a magnetic hover: the element eases toward the cursor while
 * hovered and snaps back on leave. Renders an <a> (Link) when `href` is given.
 */
export default function MagneticButton({
  children,
  href,
  variant = "solid",
  className = "",
  onClick,
  type = "button",
  external = false,
}) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0px, 0px)";
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm uppercase tracking-wide transition-colors duration-300 ease-cinematic";
  const variants = {
    solid: "bg-gold text-ink hover:bg-bone",
    outline: "border border-bone/30 text-bone hover:border-gold hover:text-gold",
    ghost: "text-bone/80 hover:text-gold",
  };

  const inner = (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block transition-transform duration-300 ease-cinematic"
      style={{ willChange: "transform" }}
    >
      <span className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </span>
    </span>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" data-cursor="grow">
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} data-cursor="grow">
        {inner}
      </Link>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} data-cursor="grow">
      {inner}
    </motion.button>
  );
}
