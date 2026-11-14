"use client";

import { motion } from "framer-motion";
import { digitalConfig } from "../config/proposal";

function WhisperIcon({ index }: { index: number }) {
  const iconIndex = index % 3;
  if (iconIndex === 0) {
    return (
      <svg className="h-5 w-5 text-romanticPink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3m14.5-6.5L6.5 17.5m11 0L6.5 5.5" />
      </svg>
    );
  }
  if (iconIndex === 1) {
    return (
      <svg className="h-5 w-5 text-duskyLavender" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    );
  }
  return (
    <svg className="h-5 w-5 text-roseGold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

const WHISPER_TAGS = ["Starlight Whisper", "Midnight Thought", "Quiet Constellation"];

export default function Scene04HiddenMoments() {
  const { whispers } = digitalConfig;

  return (
    <section id="hidden-moments" className="relative flex w-full flex-col items-center justify-center px-4 py-32 sm:px-6">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute h-[450px] w-[450px] rounded-full bg-radial-gradient from-duskyLavender/10 via-romanticPink/5 to-transparent blur-3xl opacity-60" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <motion.p
            className="mb-3 text-[0.7rem] uppercase tracking-[0.4em] text-roseGold/90 sm:text-xs"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3, once: false }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            hidden whispers
          </motion.p>

          <motion.h2
            className="mb-4 text-2xl font-light text-romanticPink sm:text-3xl md:text-4xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.35, once: false }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          >
            Words Written in the Stillness
          </motion.h2>

          <motion.p
            className="max-w-md text-xs text-slate-300/80 sm:text-sm"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4, once: false }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Some feelings never ask for applause; they simply arrive in quiet moments under open skies.
          </motion.p>
        </div>

        {/* 3 Delicate Starlight Cards */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whispers.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-roseGold/25 bg-slate-950/60 p-7 shadow-soft-glow backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-romanticPink/60 hover:bg-slate-950/80 hover:shadow-[0_0_35px_rgba(249,198,212,0.25)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.25, once: false }}
              transition={{
                duration: 0.8,
                delay: index * 0.18,
                ease: "easeOut"
              }}
            >
              {/* Subtle top ambient shimmer */}
              <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-romanticPink/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-40" />

              <div>
                {/* Header Badge */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-roseGold/30 bg-romanticPink/5 shadow-soft-glow transition-transform duration-300 group-hover:scale-110">
                    <WhisperIcon index={index} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400 group-hover:text-roseGold transition-colors">
                    {WHISPER_TAGS[index % WHISPER_TAGS.length]}
                  </span>
                </div>

                {/* Poetic Whisper Text */}
                <p className="text-sm font-light leading-relaxed text-slate-200/95 sm:text-base italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-8 flex items-center gap-2 text-[11px] text-slate-400 group-hover:text-romanticPink/90 transition-colors">
                <span className="h-1 w-1 rounded-full bg-romanticPink animate-pulse" />
                <span className="tracking-wider">Stardust Memory</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
