import { test, expect } from "@playwright/test";

test("user can successfully log in with valid credentials", async ({
  page,
}) => {
  await page.goto("/login/index.html");

  await page.fill('input[name="email"]', process.env.E2E_EMAIL);
  await page.fill('input[name="password"]', process.env.E2E_PASSWORD);

  await page.click('button[type="submit"]');

  await page.waitForURL("**/");
  await expect(page).toHaveURL(/\/$/);
});

test("user sees error message with invalid credentials", async ({ page }) => {
  await page.goto("/login/index.html");

  await page.fill('input[name="email"]', "fake@example.com");
  await page.fill('input[name="password"]', "invalidpassword");

  await page.click('button[type="submit"]');

  await expect(page.locator("#message-container")).not.toBeEmpty();
});
