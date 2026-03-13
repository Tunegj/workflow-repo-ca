import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    // Apply to all JavaScript files
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      // Define global variables for browser and testing environments
      globals: {
        ...globals.browser,
        // Testing globals
        describe: "true",
        test: "true",
        it: "true",
        expect: "true",
        beforeEach: "true",
        afterEach: "true",
        beforeAll: "true",
        afterAll: "true",
        require: "true",
        module: "true",
        process: "true",
      },
    },
  },
]);
