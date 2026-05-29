"use client";

/**
 * Cinematic depth background — intentionally STATIC and cheap.
 *
 * History: started as a full-screen WebGL shader, then animated blurred blobs.
 * Both forced continuous GPU/compositor work that competed with scrolling and
 * caused jank on lower-end machines. The depth effect doesn't need motion, so
 * this is now layered CSS radial gradients painted exactly once — no blur
 * filters, no animation, no per-frame work. Zero runtime cost = smooth scroll.
 */
export default function ShaderBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(60vw 60vw at 70% 15%, rgba(201,162,39,0.10), transparent 60%)," +
          "radial-gradient(55vw 55vw at 15% 85%, rgba(120,120,130,0.08), transparent 60%)," +
          "radial-gradient(70vw 70vw at 50% 50%, rgba(201,162,39,0.04), transparent 55%)," +
          "#0a0a0a",
      }}
    />
  );
}
