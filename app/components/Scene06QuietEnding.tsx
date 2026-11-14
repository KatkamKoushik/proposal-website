"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { digitalConfig } from "../config/proposal";

// 18 Major Star Vertices for the Astronomical Heart Constellation
const CONSTELLATION_STARS = [
  { id: 0, x: 200, y: 146, isAnchor: true, label: "Cor Caroli" },     // Top cleft
  { id: 1, x: 206, y: 126, isAnchor: false },
  { id: 2, x: 239, y: 93, isAnchor: false },
  { id: 3, x: 296, y: 89, isAnchor: true, label: "Alpha Amor" },      // Right lobe apex
  { id: 4, x: 341, y: 127, isAnchor: false },
  { id: 5, x: 341, y: 184, isAnchor: false },
  { id: 6, x: 296, y: 238, isAnchor: false },
  { id: 7, x: 239, y: 286, isAnchor: false },
  { id: 8, x: 206, y: 324, isAnchor: false },
  { id: 9, x: 200, y: 340, isAnchor: true, label: "Stella Aeterna" },  // Bottom tip
  { id: 10, x: 194, y: 324, isAnchor: false },
  { id: 11, x: 161, y: 286, isAnchor: false },
  { id: 12, x: 104, y: 238, isAnchor: false },
  { id: 13, x: 59, y: 184, isAnchor: false },
  { id: 14, x: 59, y: 127, isAnchor: false },
  { id: 15, x: 104, y: 89, isAnchor: true, label: "Vega Serenitatis" }, // Left lobe apex
  { id: 16, x: 161, y: 93, isAnchor: false },
  { id: 17, x: 194, y: 126, isAnchor: false }
];

// Interior celestial tie lines (authentic star-chart navigation lines)
const INTERIOR_TIES = [
  { from: 0, to: 3 },   // Cleft to Right Apex
  { from: 0, to: 15 },  // Cleft to Left Apex
  { from: 0, to: 9 },   // Cleft to Bottom Tip
  { from: 15, to: 12 }, // Left lobe diagonal
  { from: 3, to: 6 },   // Right lobe diagonal
  { from: 13, to: 5 }   // Mid cross-beam
];

interface Stardust {
  id: number;
  cx: number;
  cy: number;
  r: number;
  color: string;
  delay: number;
  duration: number;
}

// Deterministic pseudo-random generator to guarantee 100% SSR hydration consistency
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function generateStardust(count: number): Stardust[] {
  const dust: Stardust[] = [];
  const colors = ["#FFFFFF", "#F9C6D4", "#B9A4F5", "#FDF4DC", "#FF8CA3"];

  for (let i = 0; i < count; i += 1) {
    const r1 = seededRandom(i * 3 + 1);
    const r2 = seededRandom(i * 3 + 2);
    const r3 = seededRandom(i * 3 + 3);

    const t = r1 * Math.PI * 2;
    const scale = 0.18 + r2 * 0.76;
    const hx = 16 * Math.pow(Math.sin(t), 3);
    const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

    const cx = +(200 + hx * 9.2 * scale + (r3 - 0.5) * 14).toFixed(1);
    const cy = +(190 + hy * 8.8 * scale + (r1 - 0.5) * 14).toFixed(1);

    dust.push({
      id: i,
      cx: Number(cx),
      cy: Number(cy),
      r: +(0.8 + r2 * 1.5).toFixed(1),
      color: colors[i % colors.length],
      delay: +(r1 * 2.8).toFixed(2),
      duration: +(2.6 + r3 * 2.8).toFixed(2)
    });
  }

  return dust;
}

export default function Scene06QuietEnding() {
  const { experience } = digitalConfig;
  const stardust = useMemo(() => generateStardust(55), []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="quiet-ending" className="relative flex w-full flex-col items-center justify-center px-6 py-32 text-center overflow-hidden">
      {/* Central Nebula Backdrop Glow */}
      <div className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-radial-gradient from-romanticPink/15 via-duskyLavender/10 to-transparent blur-3xl opacity-70" />

      {/* The Majestic Celestial Heart Constellation */}
      <motion.div
        className="group relative mb-12 flex h-[340px] w-[340px] items-center justify-center sm:h-[400px] sm:w-[400px] cursor-pointer"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.35, once: false }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <motion.svg
          className="h-full w-full select-none"
          viewBox="0 0 400 400"
          fill="none"
          animate={{
            scale: [1, 1.035, 1],
            filter: [
              "drop-shadow(0 0 16px rgba(249,198,212,0.35))",
              "drop-shadow(0 0 32px rgba(249,198,212,0.65))",
              "drop-shadow(0 0 16px rgba(249,198,212,0.35))"
            ]
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <defs>
            {/* Luminous Constellation Line Gradient */}
            <linearGradient id="constellation-glow" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F9C6D4" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#FF8CA3" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#B9A4F5" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FDF4DC" stopOpacity="0.9" />
            </linearGradient>

            {/* Faint Interior Tie Line Gradient */}
            <linearGradient id="interior-tie" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F9C6D4" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#B9A4F5" stopOpacity="0.3" />
            </linearGradient>

            {/* Radiant Star Halo Filter */}
            <filter id="star-halo" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 1. Interior Guide / Chart Lines */}
          {INTERIOR_TIES.map((tie, idx) => {
            const start = CONSTELLATION_STARS[tie.from];
            const end = CONSTELLATION_STARS[tie.to];
            return (
              <line
                key={`tie-${idx}`}
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="url(#interior-tie)"
                strokeWidth="0.8"
                strokeDasharray="3 4"
                className="opacity-60"
              />
            );
          })}

          {/* 2. Perimeter Constellation Silhouette Lines */}
          {CONSTELLATION_STARS.map((star, i) => {
            const next = CONSTELLATION_STARS[(i + 1) % CONSTELLATION_STARS.length];
            return (
              <line
                key={`line-${star.id}`}
                x1={star.x}
                y1={star.y}
                x2={next.x}
                y2={next.y}
                stroke="url(#constellation-glow)"
                strokeWidth="1.6"
                strokeLinecap="round"
                className="transition-all duration-300 group-hover:stroke-width-2"
              />
            );
          })}

          {/* 3. Ambient Stardust Twinkles */}
          {stardust.map((dust) => (
            <motion.circle
              key={`dust-${dust.id}`}
              cx={dust.cx}
              cy={dust.cy}
              r={dust.r}
              fill={dust.color}
              style={{ willChange: "opacity, transform" }}
              animate={{
                opacity: [0.2, 0.95, 0.2],
                scale: [0.8, 1.3, 0.8]
              }}
              transition={{
                duration: dust.duration,
                delay: dust.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* 4. Major Star Vertices & Radiant Diffraction Glints */}
          {CONSTELLATION_STARS.map((star) => (
            <g key={`star-${star.id}`}>
              {/* Outer soft halo */}
              <circle
                cx={star.x}
                cy={star.y}
                r={star.isAnchor ? 7 : 4.5}
                fill={star.isAnchor ? "#FF8CA3" : "#F9C6D4"}
                opacity="0.35"
                filter="url(#star-halo)"
              />

              {/* Core bright star point */}
              <circle
                cx={star.x}
                cy={star.y}
                r={star.isAnchor ? 3.2 : 2.2}
                fill="#FFFFFF"
                className="shadow-[0_0_8px_#FFF]"
              />

              {/* 4-point sparkle diffraction spikes on Anchor Stars */}
              {star.isAnchor && (
                <g transform={`translate(${star.x}, ${star.y})`}>
                  <motion.path
                    d="M 0 -12 Q 0 0 12 0 Q 0 0 0 12 Q 0 0 -12 0 Z"
                    fill="#FFFFFF"
                    opacity="0.85"
                    style={{ transformOrigin: "0px 0px" }}
                    animate={{
                      rotate: [0, 90, 180, 270, 360],
                      scale: [0.85, 1.15, 0.85]
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </g>
              )}
            </g>
          ))}
        </motion.svg>
      </motion.div>

      {/* Poetic Closing Typography */}
      <motion.h3
        className="mb-3 text-2xl font-light text-romanticPink drop-shadow-[0_2px_16px_rgba(0,0,0,0.8)] sm:text-3xl md:text-4xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: false }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        maybe the universe already knew
      </motion.h3>

      <motion.p
        className="mb-8 max-w-md text-xs font-light text-slate-300/85 sm:text-sm"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6, once: false }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
      >
        {experience.title} — {experience.universeDate}
      </motion.p>

      {/* Return to the Beginning Button */}
      <motion.button
        type="button"
        onClick={handleScrollToTop}
        aria-label="Replay experience from beginning"
        className="group flex min-h-[44px] items-center gap-2 rounded-full border border-roseGold/30 bg-slate-950/70 px-6 py-2.5 text-xs text-slate-300 shadow-soft-glow backdrop-blur-md transition-all duration-300 hover:border-romanticPink/70 hover:text-slate-100 hover:shadow-[0_0_25px_rgba(249,198,212,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-romanticPink"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6, once: false }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      >
        <svg
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
        <span>Return to the Beginning</span>
      </motion.button>
    </section>
  );
}