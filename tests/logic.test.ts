import { describe, it, expect } from "vitest";
import { digitalConfig } from "../app/config/proposal";

describe("Digital Experience Configuration & Logic", () => {
  it("should have complete and valid experience metadata", () => {
    expect(digitalConfig.experience.title).toBe("Soft Constellations");
    expect(digitalConfig.experience.universeDate).toBeDefined();
    expect(typeof digitalConfig.experience.title).toBe("string");
  });

  it("should have a valid secure audio configuration", () => {
    expect(digitalConfig.audio.src).toMatch(/^https:\/\//);
    expect(digitalConfig.audio.title).toBeTruthy();
  });

  it("should have valid conversations data", () => {
    expect(digitalConfig.conversations.length).toBeGreaterThanOrEqual(3);
    digitalConfig.conversations.forEach((conv) => {
      expect(conv.id).toBeDefined();
      expect(conv.text.length).toBeGreaterThan(10);
    });
  });

  it("should have valid timeline milestones with proper images and descriptions", () => {
    expect(digitalConfig.timeline.length).toBe(4);
    digitalConfig.timeline.forEach((item) => {
      expect(item.id).toBeGreaterThan(0);
      expect(item.title).toBeTruthy();
      expect(item.description).toBeTruthy();
      expect(item.image).toMatch(/^https:\/\//);
    });
  });

  it("should have valid whispers data", () => {
    expect(digitalConfig.whispers.length).toBe(3);
    digitalConfig.whispers.forEach((whisper) => {
      expect(whisper.id).toBeDefined();
      expect(whisper.text.length).toBeGreaterThan(5);
    });
  });

  it("should have celestial wish config with all action strings", () => {
    const { celestialWish } = digitalConfig;
    expect(celestialWish.heading).toBeTruthy();
    expect(celestialWish.wishButtonText).toBeTruthy();
    expect(celestialWish.ponderButtonText).toBeTruthy();
    expect(celestialWish.celebrationTitle).toBeTruthy();
  });
});
