"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollScene from "./ScrollScene";

const fragments = [
  {
    id: 1,
    text: "somewhere between our pauses, the night learns our names"
  },
  {
    id: 2,
    text: "half-finished thoughts travel farther in the dark"
  },
  {
    id: 3,
    text: "sometimes silence says more than words"
  },
  {
    id: 4,
    text: "constellations of almost-said things"
  }
];

export default function Scene02Conversations() {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"]
  });

  return (
    <ScrollScene id="conversations" className="bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,198,212,0.18),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(185,164,245,0.18),_transparent_55%)]" />

      <div ref={sceneRef} className="relative z-10 flex h-full w-full items-center justify-center px-4">
        <div className="mx-auto flex h-full max-h-[720px] w-full max-w-5xl flex-col justify-center gap-8 sm:gap-10">
          <motion.p
            className="text-center text-[0.65rem] uppercase tracking-[0.35em] text-slate-300/70 sm:text-xs"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.12], [0, 1]),
              y: useTransform(scrollYProgress, [0, 0.12], [12, 0])
            }}
          >
            fragments of a conversation the sky overheard
          </motion.p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8">
            {fragments.map((fragment, index) => {
              const baseStart = 0.1 + index * 0.12;
              const baseEnd = baseStart + 0.25;

              const opacity = useTransform(scrollYProgress, [baseStart, baseEnd], [0, 1], {
                clamp: true
              });
              const y = useTransform(scrollYProgress, [baseStart, baseEnd], [24, 0], {
                clamp: true
              });

              return (
                <motion.div
                  key={fragment.id}
                  className="relative rounded-3xl border border-roseGold/35 bg-slate-950/40 px-5 py-4 text-sm text-slate-50/90 shadow-soft-glow backdrop-blur-md sm:text-base"
                  style={{ opacity, y }}
                  animate={{
                    y: [0, -6, 6, 0],
                    boxShadow: [
                      "0 0 24px rgba(248, 210, 224, 0.25)",
                      "0 0 42px rgba(185, 164, 245, 0.4)",
                      "0 0 28px rgba(248, 210, 224, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 10 + index * 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                  }}
                >
                  <p className="leading-relaxed">{fragment.text}</p>
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-romanticPink/12 via-transparent to-duskyLavender/14" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </ScrollScene>
  );
}

