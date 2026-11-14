"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
  twinkleSpeed: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  life: number;
  maxLife: number;
}

const STAR_COLORS = [
  "rgba(255, 255, 255, ",
  "rgba(249, 198, 212, ", // romanticPink
  "rgba(185, 164, 245, ", // duskyLavender
  "rgba(253, 244, 220, "  // starlightGold
];

export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Generate stars
    const starCount = Math.floor((width * height) / 8000);
    const stars: Star[] = Array.from({ length: Math.min(starCount, 120) }, () => {
      const baseAlpha = 0.2 + Math.random() * 0.7;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.6 + Math.random() * 1.4,
        alpha: baseAlpha,
        baseAlpha,
        twinkleSpeed: 0.008 + Math.random() * 0.02,
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)]
      };
    });

    const shootingStars: ShootingStar[] = [];

    function triggerShootingStar() {
      if (prefersReducedMotion) return;
      if (Math.random() > 0.02 || shootingStars.length >= 2) return;

      const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.2; // approx 45 degrees
      shootingStars.push({
        x: Math.random() * width * 0.8,
        y: Math.random() * (height * 0.4),
        length: 80 + Math.random() * 70,
        speed: 8 + Math.random() * 6,
        angle,
        opacity: 0.9,
        life: 0,
        maxLife: 50 + Math.random() * 30
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    let tick = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render ambient twinkling stars
      tick += 1;
      for (let i = 0; i < stars.length; i += 1) {
        const star = stars[i];
        if (!prefersReducedMotion) {
          star.alpha =
            star.baseAlpha + Math.sin(tick * star.twinkleSpeed + i) * 0.25;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${Math.max(0.1, Math.min(1, star.alpha))})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "rgba(249, 198, 212, 0.4)";
        ctx.fill();
      }

      // Render & update shooting stars
      triggerShootingStar();

      for (let i = shootingStars.length - 1; i >= 0; i -= 1) {
        const s = shootingStars[i];
        s.life += 1;
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;

        const tailX = s.x - Math.cos(s.angle) * s.length;
        const tailY = s.y - Math.sin(s.angle) * s.length;

        const gradient = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        gradient.addColorStop(0, "rgba(249, 198, 212, 0)");
        gradient.addColorStop(0.7, `rgba(255, 255, 255, ${s.opacity * 0.6})`);
        gradient.addColorStop(1, `rgba(253, 244, 220, ${s.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.6;
        ctx.stroke();

        if (s.life >= s.maxLife || s.x > width || s.y > height) {
          shootingStars.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
