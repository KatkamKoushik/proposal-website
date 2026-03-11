"use client";

import { motion } from "framer-motion";
import ScrollScene from "./ScrollScene.js";

const particles = Array.from({ length: 24 }).map((_, index) => ({
  id: index,
  delay: (index % 6) * 0.4,
  duration: 6 + (index % 5),
  x: (index * 37) % 100,
  size: 6 + (index % 4) * 3
}));

export default function Scene01Entrance() {
  return (
    <ScrollScene id="entrance" className="bg-romantic-gradient">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,198,212,0.45),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(185,164,245,0.4),_transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950/80 to-slate-950" />

      <div className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-roseGold/40 shadow-soft-glow"
            style={{
              top: `${(p.id * 17) % 100}%`,
              left: `${p.x}%`,
              width: p.size,
              height: p.size
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: [0, 1, 0.2], y: [-20, 20, -10] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              repeatType: "mirror",
              delay: p.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <motion.p
          className="mb-4 text-xs uppercase tracking-[0.35em] text-roseGold/70"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
        >
          somewhere between nightfall & a wish
        </motion.p>

        <motion.h1
          className="mb-6 text-4xl font-light leading-tight text-romanticPink drop-shadow-lg sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
        >
          A quiet universe
          <span className="block text-duskyLavender">where our words learn to glow.</span>
        </motion.h1>

        <motion.p
          className="max-w-xl text-sm leading-relaxed text-slate-200/80 sm:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
        >
          Tonight is not a question and not an answer—only the gentle space between them, quietly waiting
          to be read.
        </motion.p>

        <motion.div
          className="mt-10 flex items-center gap-3 text-xs text-slate-300/70 sm:text-sm"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.3, ease: "easeOut" }}
        >
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-roseGold/80 shadow-soft-glow" />
          <span>scroll gently; the story prefers to arrive in whispers</span>
        </motion.div>
      </div>
    </ScrollScene>
  );
}

