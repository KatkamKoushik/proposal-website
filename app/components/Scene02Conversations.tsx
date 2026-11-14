"use client";

import { motion } from "framer-motion";
import { digitalConfig } from "../config/proposal";

export default function Scene02Conversations() {
  const { conversations } = digitalConfig;

  return (
    <section id="conversations" className="relative flex w-full flex-col items-center justify-center px-4 py-28 sm:px-6">
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
        <motion.p
          className="mb-12 text-center text-[0.7rem] uppercase tracking-[0.4em] text-slate-400 sm:text-xs"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          fragments of a conversation the sky overheard
        </motion.p>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {conversations.map((fragment, index) => (
            <motion.div
              key={fragment.id}
              className="relative overflow-hidden rounded-3xl border border-roseGold/25 bg-slate-950/60 p-6 shadow-soft-glow backdrop-blur-xl transition-all duration-500 hover:border-romanticPink/50 hover:shadow-[0_0_35px_rgba(249,198,212,0.3)] sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.25, once: false }}
              transition={{
                duration: 0.9,
                delay: index * 0.12,
                ease: "easeOut"
              }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-romanticPink/10 via-transparent to-duskyLavender/15 opacity-60" />
              <p className="relative z-10 text-sm leading-relaxed text-slate-200 sm:text-base">
                "{fragment.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
