import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

test.describe("Login page", () => {
  test("user can log in with valid credentials", async ({ page }) => {
    const email = process.env.E2E_EMAIL;
    const password = process.env.E2E_PASSWORD;

    expect(email, "E2E_EMAIL is missing from .env").toBeTruthy();
    expect(password, "E2E_PASSWORD is missing from .env").toBeTruthy();

    await page.goto("/login/index.html");

    await page.fill('input[name="email"]', email);
    await page.fill('input[name="password"]', password);
    await page.click('button[type="submit"]');

    await expect(page).not.toHaveURL(/\/login\/index\.html$/);

    await expect(page).toHaveURL(/\/$/);
  });

  test("user sees an error with invalid credentials", async ({ page }) => {
    await page.goto("/login/index.html");

    await page.fill(`input[name="email"]`, "wrong@stud.noroff.no");
    await page.fill(`input[name="password"]`, "wrongpassword");
    await page.click(`button[type="submit"]`);

    await expect(page.locator("#message-container")).toContainText(
      /invalid email or password|login failed/i,
    );
  });
});
