"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
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

  const goToContact = () => {
    setOpen(false);
    router.push("/contact");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-bone/10 bg-smoke p-10 text-center"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-5 top-5 text-bone/40 transition-colors hover:text-bone"
            >
              ✕
            </button>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">
              Before you go
            </p>
            <h2 className="display-line text-3xl text-bone sm:text-4xl">
              Free consultation
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-bone/60">
              Planning a campaign or a film? Get a free 20-minute consultation
              with our team — no commitment, just ideas.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <MagneticButton onClick={goToContact} variant="solid">
                Book My Consultation
              </MagneticButton>
              <MagneticButton onClick={() => setOpen(false)} variant="ghost">
                No thanks
              </MagneticButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
