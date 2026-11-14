import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";
import { digitalConfig } from "../app/config/proposal";

// Replication of seeded PRNG used in Scene06QuietEnding.tsx for test verification
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function generateStardust(count: number) {
  const dust = [];
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

describe("Hardening & Security Tests", () => {
  it("should generate 100% deterministic stardust coordinates across independent runs", () => {
    const runA = generateStardust(55);
    const runB = generateStardust(55);

    expect(runA).toEqual(runB);
    expect(JSON.stringify(runA)).toBe(JSON.stringify(runB));

    // Verify all coordinates stay safely within 400x400 SVG bounds
    runA.forEach((particle) => {
      expect(particle.cx).toBeGreaterThanOrEqual(10);
      expect(particle.cx).toBeLessThanOrEqual(390);
      expect(particle.cy).toBeGreaterThanOrEqual(10);
      expect(particle.cy).toBeLessThanOrEqual(390);
      expect(Number.isNaN(particle.cx)).toBe(false);
      expect(Number.isNaN(particle.cy)).toBe(false);
    });
  });

  it("should ensure all local public media assets exist on disk and are non-empty", () => {
    const publicDir = path.resolve(__dirname, "../public");
    const swirlVideo = path.join(publicDir, "videos/heart-swirl.mp4");
    const tunnelVideo = path.join(publicDir, "videos/heart-tunnel.mp4");

    expect(fs.existsSync(swirlVideo)).toBe(true);
    expect(fs.statSync(swirlVideo).size).toBeGreaterThan(100000); // > 100KB

    expect(fs.existsSync(tunnelVideo)).toBe(true);
    expect(fs.statSync(tunnelVideo).size).toBeGreaterThan(100000); // > 100KB
  });

  it("should verify that text content contains no unescaped HTML injection vectors", () => {
    const allTexts: string[] = [
      digitalConfig.entrance.titleLine1,
      digitalConfig.entrance.titleLine2,
      digitalConfig.entrance.introParagraph,
      ...digitalConfig.conversations.map((c) => c.text),
      digitalConfig.connection.description,
      ...digitalConfig.whispers.map((w) => w.text),
      digitalConfig.celestialWish.heading,
      digitalConfig.celestialWish.letterParagraph1
    ];

    allTexts.forEach((text) => {
      expect(text).not.toMatch(/<script\b/i);
      expect(text).not.toMatch(/javascript:/i);
      expect(text).not.toMatch(/onerror=/i);
      expect(text).not.toMatch(/onload=/i);
    });
  });

  it("should ensure no personal proposal names exist in configuration", () => {
    const serialized = JSON.stringify(digitalConfig).toLowerCase();
    expect(serialized).not.toContain("koushik");
    expect(serialized).not.toContain("will you marry me");
  });
});
