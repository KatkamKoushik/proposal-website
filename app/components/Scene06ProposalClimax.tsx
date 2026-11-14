"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { digitalConfig } from "../config/proposal";

export default function Scene06ProposalClimax() {
  const { celestialWish } = digitalConfig;
  const [hasReleased, setHasReleased] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [playfulHint, setPlayfulHint] = useState<string | null>(null);
  const hintTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (hintTimeoutRef.current) {
        clearTimeout(hintTimeoutRef.current);
      }
    };
  }, []);

  const triggerCelebration = () => {
    const count = 220;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 999
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ["#F9C6D4", "#B9A4F5", "#B76E79"]
    });
    fire(0.2, {
      spread: 60,
      colors: ["#FFFFFF", "#FDF4DC", "#F9C6D4"]
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ["#F9C6D4", "#B76E79", "#E8A598"]
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ["#B9A4F5", "#FFFFFF"]
    });
  };

  const handleRelease = () => {
    setHasReleased(true);
    triggerCelebration();
  };

  const handleDodgePonder = () => {
    if (hintTimeoutRef.current) {
      clearTimeout(hintTimeoutRef.current);
    }
    setPlayfulHint("Take all the time you need; the stars are in no rush tonight.");
    hintTimeoutRef.current = setTimeout(() => setPlayfulHint(null), 3500);
  };

  return (
    <section id="celestial-wish" className="relative flex w-full flex-col items-center justify-center px-4 py-32 sm:px-6 overflow-hidden">
      {/* Background Ambient Video: Rose Heart Love Tunnel */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-25 mix-blend-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/heart-tunnel.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/50 to-slate-950" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center justify-center text-center">
        <motion.p
          className="mb-3 text-[0.7rem] uppercase tracking-[0.4em] text-roseGold/80 sm:text-xs"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.35, once: false }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {celestialWish.subtitle}
        </motion.p>

        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* Sealed Celestial Wish Box */
            <motion.div
              key="sealed-box"
              className="group relative flex w-full max-w-md flex-col items-center justify-center rounded-3xl border border-roseGold/35 bg-slate-950/80 p-8 text-center shadow-soft-glow backdrop-blur-xl sm:p-12"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ amount: 0.35, once: false }}
              exit={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
              transition={{ duration: 0.7 }}
            >
              <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-romanticPink/20 via-duskyLavender/20 to-roseGold/20 blur-xl opacity-60 group-hover:opacity-100" />

              {/* Glowing Heart Icon */}
              <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-roseGold/50 bg-gradient-to-br from-roseGold/20 to-romanticPink/20 shadow-[0_0_30px_rgba(249,198,212,0.5)] transition-transform duration-500 group-hover:scale-110">
                <svg
                  className="h-10 w-10 text-romanticPink animate-pulse"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>

              <span className="mb-2 text-xs font-semibold tracking-widest uppercase text-roseGold">
                {celestialWish.cardTagline}
              </span>

              <h2 className="mb-4 text-2xl font-light text-slate-100 sm:text-3xl">
                {celestialWish.heading}
              </h2>

              <p className="mb-8 text-xs leading-relaxed text-slate-300/80 sm:text-sm">
                A secret sanctuary where your quietest hopes are welcomed and remembered.
              </p>

              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="group/btn relative flex min-h-[48px] items-center gap-2 rounded-full bg-gradient-to-r from-roseGold via-romanticPink to-duskyLavender px-8 py-3 text-sm font-semibold tracking-wide text-slate-950 shadow-[0_0_25px_rgba(249,198,212,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(249,198,212,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-romanticPink"
              >
                <span>Open The Stars</span>
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          ) : !hasReleased ? (
            /* Unfolded Wish Card */
            <motion.div
              key="wish-card"
              className="relative w-full max-w-2xl rounded-3xl border border-roseGold/35 bg-slate-950/85 p-6 shadow-soft-glow backdrop-blur-xl sm:p-10"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-romanticPink/20 via-duskyLavender/20 to-roseGold/20 blur-xl opacity-60" />

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Glowing Celestial Starlight Emblem */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-roseGold/40 bg-romanticPink/10 shadow-[0_0_25px_rgba(249,198,212,0.4)]">
                  <svg
                    className="h-8 w-8 text-romanticPink"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>

                <h2 className="mb-6 text-2xl font-light leading-snug text-romanticPink sm:text-3xl md:text-4xl">
                  {celestialWish.heading}
                </h2>

                <div className="mb-8 space-y-4 text-xs leading-relaxed text-slate-200/90 sm:text-sm md:text-base">
                  <p>{celestialWish.letterParagraph1}</p>
                  <p>{celestialWish.letterParagraph2}</p>
                </div>

                {playfulHint && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-4 rounded-full border border-duskyLavender/40 bg-duskyLavender/10 px-4 py-1 text-xs text-duskyLavender"
                  >
                    {playfulHint}
                  </motion.div>
                )}

                <div className="relative mt-2 flex flex-wrap items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={handleRelease}
                    className="group relative flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-roseGold via-romanticPink to-duskyLavender px-8 py-3.5 text-sm font-semibold tracking-wide text-slate-950 shadow-[0_0_30px_rgba(249,198,212,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(249,198,212,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-romanticPink"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {celestialWish.wishButtonText}
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDodgePonder}
                    className="flex min-h-[44px] items-center justify-center rounded-full border border-slate-700/60 bg-slate-900/60 px-6 py-2.5 text-xs text-slate-400 backdrop-blur-md transition-colors duration-200 hover:border-slate-500 hover:text-slate-200 focus-visible:outline-none"
                  >
                    {celestialWish.ponderButtonText}
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Celebration Blessing View */
            <motion.div
              key="celebration-view"
              className="relative w-full max-w-2xl rounded-3xl border border-romanticPink/40 bg-slate-950/85 p-8 text-center shadow-[0_0_50px_rgba(249,198,212,0.4)] backdrop-blur-xl sm:p-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full border border-romanticPink bg-romanticPink/20 shadow-[0_0_40px_rgba(249,198,212,0.8)]">
                  <svg
                    className="h-10 w-10 text-romanticPink animate-bounce"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>

                <h2 className="mb-3 text-3xl font-light text-romanticPink sm:text-4xl md:text-5xl">
                  {celestialWish.celebrationTitle}
                </h2>

                <p className="mb-6 text-sm font-medium tracking-wide text-duskyLavender sm:text-base">
                  {celestialWish.celebrationSubtitle}
                </p>

                <div className="rounded-2xl border border-roseGold/25 bg-slate-900/60 p-6 text-slate-200/90 sm:p-8">
                  <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                    {celestialWish.eternalBlessing}
                  </p>
                  <p className="mt-6 text-xs uppercase tracking-widest text-roseGold font-semibold">
                    Always & Into Tomorrow
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
