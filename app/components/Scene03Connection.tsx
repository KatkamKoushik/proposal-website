"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollScene from "./ScrollScene";

const particles = Array.from({ length: 32 }).map((_, index) => ({
  id: index,
  top: (index * 31) % 100,
  left: (index * 53) % 100,
  size: 3 + ((index * 7) % 6),
  delay: (index % 8) * 0.7,
  duration: 12 + (index % 5) * 2
}));

export default function Scene03Connection() {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"]
  });

  const particleOffsetY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const haloOffsetY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const squareScrollScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <ScrollScene
      id="connection"
      className="bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,198,212,0.22),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(185,164,245,0.2),_transparent_55%)]" />

      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ y: particleOffsetY }}
      >
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-roseGold/35"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: p.size,
              height: p.size
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: [0, 0.8, 0.2],
              y: [-12, 4, -8]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              repeatType: "mirror",
              delay: p.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      <div
        ref={sceneRef}
        className="relative z-10 mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          className="relative mb-10 flex h-40 w-40 items-center justify-center rounded-full bg-roseGold/15 shadow-soft-glow sm:h-48 sm:w-48"
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ amount: 0.45, once: false }}
          style={{ y: haloOffsetY }}
          animate={{
            boxShadow: [
              "0 0 40px rgba(248, 210, 224, 0.45)",
              "0 0 72px rgba(185, 164, 245, 0.5)",
              "0 0 52px rgba(248, 210, 224, 0.45)"
            ],
            scale: [1, 1.04, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="relative h-24 w-24 rotate-12 bg-gradient-to-br from-romanticPink/80 via-roseGold/80 to-duskyLavender/80 blur-[2px] sm:h-28 sm:w-28"
            style={{ scale: squareScrollScale }}
            animate={{
              y: [0, -4, 4, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.55),_transparent_65%)] mix-blend-screen" />
        </motion.div>

        <motion.div style={{ opacity: textOpacity }}>
          <motion.p
            className="mb-3 text-sm uppercase tracking-[0.32em] text-slate-300/70 sm:text-xs"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.35, once: false }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            connection
          </motion.p>

          <motion.p
            className="mb-2 text-lg font-light text-romanticPink sm:text-xl md:text-2xl"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.45, once: false }}
            transition={{ duration: 1.1, delay: 0.1, ease: "easeOut" }}
          >
            some connections begin softly
          </motion.p>

          <motion.p
            className="max-w-xl text-sm leading-relaxed text-slate-200/85 sm:text-base"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5, once: false }}
            transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
          >
            not with answers... but with a feeling, lingering like light on the edge of a closing door.
          </motion.p>
        </motion.div>
      </div>
    </ScrollScene>
  );
}
