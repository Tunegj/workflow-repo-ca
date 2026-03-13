import { test, expect } from "@playwright/test";

test("navigates from home page to venue details", async ({ page }) => {
  await page.goto("/");

  const firstVenueLink = page.locator(`a[href*="/venue/?id="]`).first();

  await expect(firstVenueLink).toBeVisible();

  await firstVenueLink.click();

  await expect(
    page.getByRole("heading", { name: /venue details/i }),
  ).toBeVisible();
});
