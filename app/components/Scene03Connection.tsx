"use client";

import { motion } from "framer-motion";
import { digitalConfig } from "../config/proposal";

export default function Scene03Connection() {
  const { connection } = digitalConfig;

  return (
    <section id="connection" className="relative flex w-full flex-col items-center justify-center px-6 py-32 text-center overflow-hidden">
      {/* Soft background ambient starlight aura */}
      <div className="pointer-events-none absolute h-[380px] w-[380px] rounded-full bg-radial-gradient from-romanticPink/10 via-duskyLavender/5 to-transparent blur-3xl opacity-60" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
        {/* Subtle, poetic celestial nexus emblem */}
        <motion.div
          className="relative mb-10 flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.4, once: false }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Gentle pulsing starlight glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-romanticPink/20 via-roseGold/20 to-duskyLavender/20 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Intertwining delicate celestial orbital rings */}
          <svg
            className="relative h-20 w-20 text-romanticPink sm:h-24 sm:w-24"
            viewBox="0 0 100 100"
            fill="none"
            aria-hidden="true"
          >
            {/* First orbit */}
            <motion.ellipse
              cx="50"
              cy="50"
              rx="40"
              ry="18"
              stroke="url(#ring-grad-1)"
              strokeWidth="1.2"
              strokeDasharray="4 3"
              transform="rotate(-25 50 50)"
              animate={{ rotate: 335 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            {/* Second orbit */}
            <motion.ellipse
              cx="50"
              cy="50"
              rx="40"
              ry="18"
              stroke="url(#ring-grad-2)"
              strokeWidth="1.2"
              strokeDasharray="4 3"
              transform="rotate(35 50 50)"
              animate={{ rotate: 395 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            />
            {/* Central sparkling star */}
            <circle cx="50" cy="50" r="3.5" fill="#FFF" className="shadow-soft-glow" />
            <path
              d="M50 38 L50 62 M38 50 L62 50"
              stroke="#FFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.8"
            />

            <defs>
              <linearGradient id="ring-grad-1" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#F9C6D4" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#B9A4F5" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#E8A598" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="ring-grad-2" x1="100" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FF8CA3" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FDF4DC" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#B9A4F5" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.p
          className="mb-3 text-[0.7rem] uppercase tracking-[0.4em] text-roseGold/90 sm:text-xs"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4, once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {connection.subtitle}
        </motion.p>

        <motion.h2
          className="mb-5 text-2xl font-light text-romanticPink sm:text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.45, once: false }}
          transition={{ duration: 1.1, delay: 0.1, ease: "easeOut" }}
        >
          {connection.title}
        </motion.h2>

        <motion.p
          className="max-w-xl text-sm leading-relaxed text-slate-300/90 sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5, once: false }}
          transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
        >
          {connection.description}
        </motion.p>
      </div>
    </section>
  );
}
