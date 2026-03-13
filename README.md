# Workflow repo for the CA

This project is an existing venue listing web application.
The assignment focused on setting up development tools and adding automated testing.

## Features

- ESLint for code linting
- Prettier for code formatting
- Husky and lint-staged for pre-commit hooks
- Vitest for unit testing
- Playwright for end-to-end testing

## Pre-requisites

- Node.js (v20+)
- npm

## Setup

Install dependencies:

```bash
npm install
```

## Scripts

Running the project:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run the production build locally:

```bash
npm run start
```

Run unit tests (Vitest):

```bash
npm test
```

Run end-to-end tests (Playwright):

```bash
npm run test:e2e
```

Run Playwright UI mode:

```bash
npm run test:e2e:ui
```

## Environment Variables

Create a `.env` file in the root of the project with the following content:

```env
E2E_EMAIL=
E2E_PASSWORD=
```

Use a valid Noroff test account, using @stud.noroff.no, for the Playwright login test.

## Technologies Used

- HTML
- CSS
- JavaScript
- ESLint
- Prettier
- Husky
- lint-staged
- Vitest
- Playwright

## Test Coverage

Unit tests verify individual utility functions.
End-to-end tests verify core user flows such as authentication and navigation from the home page to the venue details page.

## Author

Tone Gjerde

[GitHub](https://github.com/Tunegj/workflow-repo-ca)
