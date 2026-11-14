"use client";

import { motion } from "framer-motion";
import { digitalConfig } from "../config/proposal";

export default function SceneMemoryTimeline() {
  const { timeline } = digitalConfig;

  return (
    <section id="journey" className="relative flex w-full flex-col items-center justify-center px-4 py-32 sm:px-6">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center">
        {/* Section Header */}
        <div className="mb-14 text-center sm:mb-20">
          <motion.p
            className="mb-3 text-[0.7rem] uppercase tracking-[0.4em] text-roseGold/90 sm:text-xs"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3, once: false }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            our journey through the stars
          </motion.p>

          <motion.h2
            className="text-2xl font-light text-romanticPink sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.35, once: false }}
            transition={{ duration: 1.1, delay: 0.1, ease: "easeOut" }}
          >
            Moments etched in time
          </motion.h2>

          <motion.p
            className="mx-auto mt-4 max-w-lg text-xs leading-relaxed text-slate-300/80 sm:text-sm md:text-base"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4, once: false }}
            transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
          >
            Every memory carries its own light, guiding travelers through the midnight sky.
          </motion.p>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10">
          {timeline.map((item, index) => (
            <motion.article
              key={item.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-roseGold/25 bg-slate-950/60 p-6 shadow-soft-glow backdrop-blur-xl transition-all duration-500 hover:border-romanticPink/60 hover:shadow-[0_0_45px_rgba(249,198,212,0.3)]"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2, once: false }}
              transition={{
                duration: 0.9,
                delay: index * 0.12,
                ease: "easeOut"
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.3 }
              }}
            >
              {/* Polaroid Photo */}
              {item.image && (
                <div className="relative mb-6 h-52 w-full overflow-hidden rounded-2xl bg-slate-900/80 sm:h-60">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  {item.location && (
                    <span className="absolute bottom-3 left-3 rounded-full bg-slate-950/80 px-3.5 py-1 text-[11px] font-medium tracking-wide text-slate-200 backdrop-blur-md">
                      {item.location}
                    </span>
                  )}
                </div>
              )}

              {/* Card Meta */}
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-widest uppercase text-roseGold">
                      {item.date}
                    </span>
                    <span className="text-xs text-slate-500">0{index + 1}</span>
                  </div>

                  <h3 className="mb-2 text-xl font-light text-slate-100 group-hover:text-romanticPink sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-slate-300/85 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
