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

function generateHeartParticles(count: number): Particle[] {
  const particles: Particle[] = [];

  for (let i = 0; i < count; i += 1) {
    const angle = (i / count) * Math.PI * 2;
    const radius = 36 + (i % 6) * 3;

    const startX = (Math.random() - 0.5) * 180;
    const startY = (Math.random() - 0.5) * 180;

    const t = angle;
    const heartX = 16 * Math.pow(Math.sin(t), 3);
    const heartY =
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t);

    const endX = (heartX / 18) * radius;
    const endY = -(heartY / 18) * radius;

    particles.push({
      id: i,
      startX,
      startY,
      endX,
      endY,
      size: 2 + (i % 3),
      delay: (i % 12) * 0.18
    });
  }

  return particles;
}

export default function Scene06QuietEnding() {
  const particles = useMemo(() => generateHeartParticles(60), []);

  return (
    <ScrollScene
      id="quiet-ending"
      className="bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,198,212,0.2),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(185,164,245,0.18),_transparent_55%)]"
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{
          duration: 16,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      >
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute left-1/2 top-1/2 rounded-full bg-romanticPink/65 shadow-soft-glow"
            style={{
              width: p.size,
              height: p.size
            }}
            initial={{
              x: p.startX,
              y: p.startY,
              opacity: 0
            }}
            whileInView={{
              x: p.endX,
              y: p.endY,
              opacity: [0, 1, 0.7]
            }}
            viewport={{ amount: 0.5, once: false }}
            transition={{
              delay: 0.8 + p.delay * 0.45,
              duration: 7.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-center px-6 pb-24 pt-12 text-center">
        <motion.div
          className="relative mb-10 h-56 w-56 sm:h-64 sm:w-64"
          initial={{ opacity: 0, scale: 0.9, filter: "blur(14px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ amount: 0.5, once: false }}
          animate={{
            opacity: [0.9, 1, 0.9],
            scale: [0.98, 1.02, 0.98]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
        >
          <div className="pointer-events-none absolute inset-[18%] rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_transparent_70%)] mix-blend-screen" />
        </motion.div>

        <motion.p
          className="max-w-xl text-sm font-light text-slate-200/90 sm:text-base"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6, once: false }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          maybe the universe already knew
        </motion.p>
      </div>
    </ScrollScene>
  );
}

