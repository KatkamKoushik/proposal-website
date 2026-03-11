"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import ScrollScene from "./ScrollScene";

type Particle = {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  size: number;
  delay: number;
};

function generateParticles(count: number): Particle[] {
  const particles: Particle[] = [];

  for (let i = 0; i < count; i += 1) {
    const angle = (i / count) * Math.PI * 2;
    const radius = 40 + (i % 8) * 4;

    const startX = (Math.random() - 0.5) * 160;
    const startY = (Math.random() - 0.5) * 160;

    // Approximate heart shape in normalized coordinates
    const t = angle;
    const heartX = 16 * Math.pow(Math.sin(t), 3);
    const heartY =
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t);

    const endX = (heartX / 18) * radius * 0.9;
    const endY = -(heartY / 18) * radius * 0.9;

    particles.push({
      id: i,
      startX,
      startY,
      endX,
      endY,
      size: 3 + (i % 4),
      delay: (i % 10) * 0.15
    });
  }

  return particles;
}

export default function Scene05FinalMoment() {
  const particles = useMemo(() => generateParticles(70), []);

  return (
    <ScrollScene
      id="final-moment"
      className="bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,198,212,0.22),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(185,164,245,0.2),_transparent_55%)]"
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-center px-6 pb-16 pt-10 text-center">
        <div className="relative mb-14 h-64 w-64 sm:h-72 sm:w-72">
          {particles.map((p) => (
            <motion.span
              key={p.id}
              className="absolute left-1/2 top-1/2 rounded-full bg-romanticPink/70 shadow-soft-glow"
              style={{
                width: p.size,
                height: p.size
              }}
              initial={{
                x: p.startX,
                y: p.startY,
                opacity: 0
              }}
              animate={{
                x: [p.startX, p.endX + 4, p.endX],
                y: [p.startY, p.endY - 4, p.endY],
                opacity: [0, 1, 0.65]
              }}
              transition={{
                delay: 0.6 + p.delay * 0.4,
                duration: 6.5,
                ease: "easeInOut"
              }}
            />
          ))}

          <motion.div
            className="pointer-events-none absolute inset-[18%] rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.85),_transparent_70%)] mix-blend-screen"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(14px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ amount: 0.5, once: false }}
            animate={{
              opacity: [0.75, 1, 0.8],
              scale: [0.98, 1.04, 0.98]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
          />
        </div>

        <motion.p
          className="mb-3 text-sm uppercase tracking-[0.32em] text-slate-300/70 sm:text-xs"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4, once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          final moment
        </motion.p>

        <motion.p
          className="mb-5 max-w-xl text-lg font-light text-romanticPink sm:text-xl md:text-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5, once: false }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        >
          sometimes the answer was already written in the quiet moments between us
        </motion.p>

        <motion.p
          className="max-w-xl text-sm leading-relaxed text-slate-200/85 sm:text-base"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6, once: false }}
          transition={{ duration: 1.1, delay: 0.35, ease: "easeOut" }}
        >
          some stories never needed to be asked… only felt.
        </motion.p>
      </div>
    </ScrollScene>
  );
}

