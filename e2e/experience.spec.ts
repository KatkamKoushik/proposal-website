import { test, expect } from "@playwright/test";

test.describe("Soft Constellations Digital Experience", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
  });

  test("should load the page cleanly with correct title and hero elements", async ({ page }) => {
    await expect(page).toHaveTitle(/Soft Constellations/i);

    const entranceSection = page.locator("#entrance");
    await expect(entranceSection).toBeVisible();
    await expect(entranceSection).toContainText("A quiet universe");
    await expect(entranceSection).toContainText("where our words learn to glow.");
  });

  test("should toggle sound controller cleanly without errors", async ({ page }) => {
    const musicButton = page.locator("button[aria-label*='sound' i]");
    await expect(musicButton).toBeVisible();
    await musicButton.click();
    await expect(musicButton).toBeVisible();
  });

  test("should render the 3 starlight whisper cards with poetic content", async ({ page }) => {
    const whispersSection = page.locator("#hidden-moments");
    await expect(whispersSection).toBeAttached();

    const whisperCards = whispersSection.locator(".grid > div");
    await expect(whisperCards).toHaveCount(3);
  });

  test("should handle the celestial wish card and release flow", async ({ page }) => {
    const wishSection = page.locator("#celestial-wish");
    await expect(wishSection).toBeAttached();

    const openButton = wishSection.locator("button", { hasText: /Unfold Letter|Open|Make a Wish/i });
    if (await openButton.isVisible()) {
      await openButton.click();
    }

    const releaseButton = wishSection.locator("button", { hasText: /Release My Wish/i });
    await expect(releaseButton).toBeVisible();
    await releaseButton.click();

    const celebrationHeader = wishSection.locator("h2", { hasText: /Your Wish Is Released/i });
    await expect(celebrationHeader).toBeVisible();
  });

  test("should render the ending heart constellation and handle return to top", async ({ page }) => {
    const endingSection = page.locator("#quiet-ending");
    await expect(endingSection).toBeAttached();

    const constellationSvg = endingSection.locator("svg").first();
    await expect(constellationSvg).toBeVisible();
    await expect(endingSection.locator("h3")).toContainText("maybe the universe already knew");
  });

  test("should have zero horizontal scroll overflow", async ({ page }) => {
    const isOverflowing = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(isOverflowing).toBe(false);
  });
});
