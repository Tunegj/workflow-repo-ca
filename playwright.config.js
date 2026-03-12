import { defineConfig } from "playwright/test";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  testDir: "./tests/e2e",
  use: {
    baseURL: "http://172.26.224.1:5500/",
    headless: true,
  },
});
