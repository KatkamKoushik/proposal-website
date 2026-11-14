"use client";

import { motion } from "framer-motion";
import { digitalConfig } from "../config/proposal";

export default function Scene01Entrance() {
  const { entrance } = digitalConfig;

  return (
    <section id="entrance" className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 py-28 text-center overflow-hidden">
      {/* Background Ambient Video: Heart Particle Swirl */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40 mix-blend-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/heart-swirl.mp4" type="video/mp4" />
        </video>
        {/* Soft edge fade for seamless blending into the page */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
      </div>

      {/* Central Ambient Glow & Readability Vignette */}
      <div className="pointer-events-none absolute h-[480px] w-[480px] rounded-full bg-radial-gradient from-romanticPink/15 via-duskyLavender/10 to-transparent blur-3xl opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(2,6,23,0.65)_0%,_rgba(2,6,23,0.3)_55%,_transparent_85%)]" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
        {/* Subtitle / Eyebrow */}
        <motion.p
          className="mb-5 text-[0.7rem] uppercase tracking-[0.45em] text-roseGold/90 sm:text-xs"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        >
          {entrance.subtitle}
        </motion.p>

        {/* Main Majestic Title */}
        <motion.h1
          className="mb-8 text-4xl font-light leading-[1.15] tracking-wide text-romanticPink drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] sm:text-6xl md:text-7xl"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        >
          {entrance.titleLine1}
          <span className="mt-3 block bg-gradient-to-r from-romanticPink via-duskyLavender to-roseGold bg-clip-text text-transparent">
            {entrance.titleLine2}
          </span>
        </motion.h1>

        {/* Poetic Intro Paragraph */}
        <motion.p
          className="max-w-xl text-sm font-light leading-relaxed text-slate-200/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.8, ease: "easeOut" }}
        >
          {entrance.introParagraph}
        </motion.p>

        {/* Scroll Hint */}
        <motion.div
          className="mt-14 flex items-center gap-3 text-xs tracking-wider text-slate-400 sm:text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
        >
          <span className="inline-flex h-2 w-2 animate-ping rounded-full bg-romanticPink/80" />
          <span>{entrance.scrollHint}</span>
        </motion.div>
      </div>
    </section>
  );
}
