"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollScene from "./ScrollScene";

type OrbConfig = {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
  text: string;
};

const orbs: OrbConfig[] = [
  {
    id: 1,
    top: 24,
    left: 20,
    size: 52,
    delay: 0.2,
    text: "sometimes silence says what words cannot"
  },
  {
    id: 2,
    top: 40,
    left: 68,
    size: 46,
    delay: 0.5,
    text: "some connections take time to reveal themselves"
  },
  {
    id: 3,
    top: 62,
    left: 32,
    size: 48,
    delay: 0.8,
    text: "not every feeling needs to be named"
  }
];

function HiddenOrb({ config }: { config: OrbConfig }) {
  const [active, setActive] = useState(false);

  return (
    <motion.button
      type="button"
      aria-label="Reveal a hidden thought"
      className="group absolute -translate-x-1/2 -translate-y-1/2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-romanticPink/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      style={{
        top: `${config.top}%`,
        left: `${config.left}%`,
        width: config.size,
        height: config.size
      }}
      initial={{ opacity: 0, scale: 0.6, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ amount: 0.3, once: false }}
      animate={{
        y: [0, -6, 4, 0]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: config.delay
      }}
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      onTap={() => setActive((prev) => !prev)}
    >
      <div className="pointer-events-none absolute inset-0 rounded-full bg-roseGold/30 blur-md" />
      <div className="pointer-events-none absolute inset-[18%] rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_transparent_65%)] mix-blend-screen" />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-[120%] w-[220px] -translate-x-1/2 text-left text-xs text-slate-100/90 sm:text-sm"
        initial={{ opacity: 0, y: 6 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="rounded-2xl border border-roseGold/35 bg-slate-950/70 px-3 py-2 shadow-soft-glow backdrop-blur-md">
          <p className="leading-relaxed">{config.text}</p>
        </div>
      </motion.div>
    </motion.button>
  );
}

export default function Scene04HiddenMoments() {
  return (
    <ScrollScene
      id="hidden-moments"
      className="bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,198,212,0.18),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(185,164,245,0.18),_transparent_55%)]" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center px-6">
        <div className="mb-10 text-center">
          <motion.p
            className="mb-2 text-[0.65rem] uppercase tracking-[0.35em] text-slate-300/70 sm:text-xs"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3, once: false }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            hidden moments
          </motion.p>

          <motion.p
            className="text-sm text-slate-200/85 sm:text-base"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4, once: false }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          >
            hover or tap the faint stars—some feelings prefer to arrive in whispers.
          </motion.p>
        </div>

        <div className="relative h-[320px] w-full max-w-3xl sm:h-[360px] md:h-[420px]">
          {orbs.map((orb) => (
            <HiddenOrb key={orb.id} config={orb} />
          ))}
        </div>
      </div>
    </ScrollScene>
  );
}

