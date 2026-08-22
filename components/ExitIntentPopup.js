"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Aperture } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const SESSION_KEY = "tgm-exit-intent-shown";

export default function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let armed = false;
    // Arm after a few seconds so it doesn't fire on immediate mouse wobble.
    const armTimer = setTimeout(() => (armed = true), 4000);

    // Desktop: fire when the cursor leaves toward the top (closing/url bar).
    const onMouseOut = (e) => {
      if (armed && !e.relatedTarget && e.clientY <= 0) trigger();
    };
    // Mobile fallback: fire on fast upward scroll near the top after a delay.
    const mobileTimer = setTimeout(() => {
      if (window.matchMedia("(hover: none)").matches) armed = true;
    }, 6000);

    const trigger = () => {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
      cleanup();
    };

    const cleanup = () => {
      document.removeEventListener("mouseout", onMouseOut);
      clearTimeout(armTimer);
      clearTimeout(mobileTimer);
    };

    document.addEventListener("mouseout", onMouseOut);
    return cleanup;
  }, []);

  // Close on Escape while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const goToContact = () => {
    setOpen(false);
    router.push("/contact");
  };

  // Gold L-bracket used at each corner of the "viewfinder".
  const Corner = ({ pos }) => (
    <motion.span
      initial={{ opacity: 0, scale: 1.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.28, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`pointer-events-none absolute h-7 w-7 border-gold/70 ${pos}`}
    />
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-ink/85 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Camera shutter blades — snap open from the centre */}
          <motion.div
            className="pointer-events-none absolute inset-x-0 top-0 z-[55] h-1/2 origin-top bg-ink"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ delay: 0.16, duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
          />
          <motion.div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[55] h-1/2 origin-bottom bg-ink"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ delay: 0.16, duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
          />

          {/* Camera flash — a hard white pop over everything, then fade */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-[60] bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 0.7,
              times: [0, 0.05, 0.16, 1],
              ease: "easeOut",
            }}
          />

          {/* Modal — focus-pulls in from a soft blur */}
          <motion.div
            initial={{ opacity: 0, scale: 1.06, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.96, filter: "blur(6px)" }}
            transition={{ delay: 0.22, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-[40] w-full max-w-lg overflow-hidden rounded-2xl border border-bone/10 bg-smoke px-8 py-12 text-center shadow-2xl sm:px-12"
          >
            {/* Viewfinder chrome */}
            <Corner pos="left-4 top-4 border-l-2 border-t-2" />
            <Corner pos="right-4 top-4 border-r-2 border-t-2" />
            <Corner pos="left-4 bottom-4 border-b-2 border-l-2" />
            <Corner pos="right-4 bottom-4 border-b-2 border-r-2" />

            {/* Top status row: REC + timecode */}
            <div className="mb-8 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.25em] text-bone/45">
              <span className="flex items-center gap-2">
                <motion.span
                  className="inline-block h-2 w-2 rounded-full bg-red-500"
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                />
                REC
              </span>
              <span className="tabular-nums">00:20:00</span>
            </div>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-5 top-5 z-10 text-bone/40 transition-colors hover:text-bone"
            >
              ✕
            </button>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.5 }}
            >
              <Aperture className="mx-auto mb-5 h-8 w-8 text-gold" strokeWidth={1.5} />
              <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">
                Before you go
              </p>
              <h2 className="display-line text-3xl leading-[1.05] text-bone sm:text-[2.75rem]">
                Let&apos;s talk, free
                <br className="hidden sm:block" /> for 20 minutes.
              </h2>
              <p className="mx-auto mt-5 max-w-md text-[0.95rem] leading-relaxed text-bone/65">
                Got a campaign or a film in mind? Book a free 20-minute call with
                our team — no commitment, no hard sell. Just honest ideas and a
                clear next step.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <MagneticButton onClick={goToContact} variant="solid">
                  Book My Consultation
                </MagneticButton>
                <button
                  onClick={() => setOpen(false)}
                  className="text-xs uppercase tracking-[0.25em] text-bone/45 transition-colors hover:text-bone"
                >
                  No thanks
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
