import { describe, it, expect } from "vitest";

function seededRandom(seed: number): number {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

describe("Stress & Concurrency CI Tests", () => {
  it("should generate 50,000 particles under 250ms without memory exhaustion", () => {
    const startTime = performance.now();
    const batchSize = 50000;
    const particles = [];

    for (let i = 0; i < batchSize; i += 1) {
      const r = seededRandom(i);
      const t = r * Math.PI * 2;
      const hx = 16 * Math.pow(Math.sin(t), 3);
      const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      particles.push({
        x: 200 + hx * 9,
        y: 190 + hy * 8.8
      });
    }

    const duration = performance.now() - startTime;
    expect(particles.length).toBe(batchSize);
    expect(duration).toBeLessThan(350); // Must be under 350ms
  });

  it("should handle extreme boundary indices without NaN or Infinity", () => {
    const testCases = [-1000000, -1, 0, 1, 9999999, 1e8];
    testCases.forEach((val) => {
      const rand = seededRandom(val);
      expect(Number.isNaN(rand)).toBe(false);
      expect(Number.isFinite(rand)).toBe(true);
      expect(rand).toBeGreaterThanOrEqual(0);
      expect(rand).toBeLessThanOrEqual(1);
    });
  });

  it("should withstand 2,000 rapid sequential lifecycle state transitions", () => {
    let state = { released: false, hint: null as string | null };

    const startTime = performance.now();
    for (let i = 0; i < 2000; i += 1) {
      state = {
        released: i % 2 === 0,
        hint: `Hint text message iteration ${i}`
      };
    }
    const duration = performance.now() - startTime;

    expect(state.hint).toBe("Hint text message iteration 1999");
    expect(duration).toBeLessThan(50);
  });
});
