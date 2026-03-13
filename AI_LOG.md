# AI Usage Log

## Tool used - ChatGPT

## Date - 10.03.2026

### Purpose

Troubleshoot ESLint configuration and understand how to configure globals used in browser environments and test environments.

### Outcome

Updated the ESLint configuration to support browser globals and test-related globals.

## Date - 10.03.2026

### Purpose

Troubleshoot unit tests that relied on `localStorage`, which is not available in the Node.js environment where Vitest runs.

### Outcome

Added a mock implementation of `localStorage` in the unit tests to allow them to run successfully in the Node.js environment.

## Date - 12.03.2026

### Purpose

Debug the Playwright login test and determine why the successful login test was failing.

### Outcome

AI helped interpret Playwright error messages and identify issues such as

- incorrect assertion usage
- incorrect URL checking after login
  based on this I adjusted my test assertions.

## Date - 13.03.2026

### Purpose

Give AI my code to make sure there is nothing missing.

### Outcome

AI reviewed the code and confirmed that the tests were correctly set up.

## Date - 13.03.2026

### Purpose

Help me write the README and AI log so it sounds more professional. I told AI everything I wanted to say in my own words, and AI helped me structure it and make it sound more formal.

## Verification

All AI suggestions were reviewed and tested by me. AI was used as a learning and debugging tool, and no code was copied directly without understandiing it.
