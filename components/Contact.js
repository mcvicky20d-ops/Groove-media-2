"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

const WHATSAPP = "https://wa.me/917812891696";
const PHONE = "+917812891696";
const EMAIL = "mediathegroove@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Advertising",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const whatsappLink = () => {
    const text = encodeURIComponent(
      `Hi The Groove Media!\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nProject: ${form.projectType}\n\n${form.message}`
    );
    return `${WHATSAPP}?text=${text}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      // Even if the webhook fails, let the lead reach the studio via WhatsApp.
      setStatus("error");
    }
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      projectType: "Advertising",
      message: "",
    });
    setStatus("idle");
  };

  const inputClass =
    "w-full border-b border-bone/20 bg-transparent py-3 text-bone placeholder-bone/40 outline-none transition-colors focus:border-gold";

  return (
    <section id="contact" className="relative bg-smoke py-20 md:py-28">
      <div className="container-x grid gap-16 lg:grid-cols-2">
        {/* Left: pitch + studio info */}
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">
            Contact
          </p>
          <AnimatedHeading
            text="If you're planning a campaign or a film, let's talk."
            className="display-line text-4xl text-bone sm:text-5xl"
          />

          <Reveal delay={0.1}>
            <div className="mt-12 space-y-8 text-bone/70">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold">
                  Studio
                </p>
                <p className="mt-2 max-w-xs">
                  5, Ganapathy St, Ramakrishnapuram, West Mambalam, Chennai
                  600033
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold">
                  Hours
                </p>
                <p className="mt-2">Mon–Sat, 10AM–8PM</p>
                <p className="text-sm text-bone/40">
                  Shoots happen any day — just ask.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <a href={`tel:${PHONE}`} className="hover:text-gold">
                  +91 78128 91696
                </a>
                <a href={`mailto:${EMAIL}`} className="hover:text-gold">
                  {EMAIL}
                </a>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <MagneticButton href={WHATSAPP} variant="solid" external>
                  WhatsApp Us
                </MagneticButton>
                <MagneticButton href={`tel:${PHONE}`} variant="ghost">
                  Call →
                </MagneticButton>
              </div>
            </div>

            {/* Google Map embed centered on the studio coordinates */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-bone/10">
              <iframe
                title="The Groove Media studio location"
                src="https://www.google.com/maps?q=13.042877,80.224594&z=16&output=embed"
                width="100%"
                height="240"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </Reveal>
        </div>

        {/* Right: form */}
        <Reveal delay={0.15}>
          <div className="relative">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-bone/10 bg-ink/40 p-8 md:p-10"
          >
            <div className="space-y-7">
              <input
                required
                name="name"
                value={form.name}
                onChange={update}
                placeholder="Your name"
                className={inputClass}
              />
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                placeholder="Email"
                className={inputClass}
              />
              <input
                required
                name="phone"
                value={form.phone}
                onChange={update}
                placeholder="Phone"
                className={inputClass}
              />
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-bone/40">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={update}
                  className={`${inputClass} cursor-pointer`}
                >
                  <option className="bg-ink">Advertising</option>
                  <option className="bg-ink">Brand</option>
                  <option className="bg-ink">Wedding</option>
                  <option className="bg-ink">Other</option>
                </select>
              </div>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={update}
                rows={4}
                placeholder="Tell us about your project"
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="mt-8">
              <MagneticButton type="submit" variant="solid">
                {status === "sending" ? "Sending…" : "Send Message"}
              </MagneticButton>
            </div>

            {status === "error" && (
              <p className="mt-4 text-sm text-bone/70">
                Couldn&apos;t reach our server — please{" "}
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold underline"
                >
                  message us on WhatsApp
                </a>{" "}
                instead.
              </p>
            )}
          </form>

          {/* Success animation overlay */}
          <AnimatePresence>
            {status === "sent" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-gold/30 bg-ink/95 p-8 text-center backdrop-blur-sm"
              >
                <motion.svg
                  viewBox="0 0 52 52"
                  className="h-20 w-20"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.circle
                    cx="26"
                    cy="26"
                    r="24"
                    fill="none"
                    stroke="#C9A227"
                    strokeWidth="2"
                    variants={{
                      hidden: { pathLength: 0, opacity: 0 },
                      visible: {
                        pathLength: 1,
                        opacity: 1,
                        transition: { duration: 0.6, ease: "easeInOut" },
                      },
                    }}
                  />
                  <motion.path
                    d="M16 27 l7 7 l13 -15"
                    fill="none"
                    stroke="#C9A227"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={{
                      hidden: { pathLength: 0 },
                      visible: {
                        pathLength: 1,
                        transition: { duration: 0.4, delay: 0.5, ease: "easeOut" },
                      },
                    }}
                  />
                </motion.svg>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-6 font-display text-2xl uppercase text-bone"
                >
                  Message sent
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-2 max-w-xs text-bone/60"
                >
                  Thanks, {form.name.split(" ")[0] || "there"} — we&apos;ll be in
                  touch soon. Prefer to chat now?
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.95 }}
                  className="mt-6 flex flex-wrap justify-center gap-3"
                >
                  <MagneticButton href={whatsappLink()} variant="solid" external>
                    Continue on WhatsApp
                  </MagneticButton>
                  <MagneticButton onClick={resetForm} variant="ghost">
                    Send another
                  </MagneticButton>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
