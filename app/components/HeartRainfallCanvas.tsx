"use client";

import { useEffect, useRef } from "react";

interface FallingHeart {
  x: number;
  y: number;
  size: number;
  speedY: number;
  swayAmplitude: number;
  swaySpeed: number;
  swayOffset: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  opacity: number;
}

const HEART_COLORS = [
  "#F9C6D4", // romanticPink
  "#B76E79", // roseGold
  "#B9A4F5", // duskyLavender
  "#E8A598"  // coralRose
];

export default function HeartRainfallCanvas({ count = 12 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const HEART_PATH = new Path2D(
      "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    );

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const createHeart = (initialY = false): FallingHeart => ({
      x: Math.random() * width,
      y: initialY ? Math.random() * height : -20 - Math.random() * 60,
      size: 10 + Math.random() * 10,
      speedY: 0.35 + Math.random() * 0.55, // Gentle, slow, peaceful float
      swayAmplitude: 0.5 + Math.random() * 0.8,
      swaySpeed: 0.012 + Math.random() * 0.015,
      swayOffset: Math.random() * Math.PI * 2,
      rotation: (Math.random() - 0.5) * 0.3,
      rotationSpeed: (Math.random() - 0.5) * 0.008,
      color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)],
      opacity: 0.2 + Math.random() * 0.35
    });

    const hearts: FallingHeart[] = Array.from({ length: count }, () =>
      createHeart(true)
    );

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    let tick = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick += 1;

      for (let i = 0; i < hearts.length; i += 1) {
        const h = hearts[i];

        if (!prefersReducedMotion) {
          h.y += h.speedY;
          h.x += Math.sin(tick * h.swaySpeed + h.swayOffset) * h.swayAmplitude;
          h.rotation += h.rotationSpeed;
        }

        ctx.save();
        ctx.translate(h.x, h.y);
        ctx.rotate(h.rotation);
        const scale = h.size / 24;
        ctx.scale(scale, scale);
        ctx.translate(-12, -12);
        ctx.globalAlpha = h.opacity;
        ctx.fillStyle = h.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = h.color;
        ctx.fill(HEART_PATH);
        ctx.restore();

        if (h.y > height + 24) {
          hearts[i] = createHeart(false);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
