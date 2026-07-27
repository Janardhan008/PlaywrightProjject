# PlaywrightProjject

A hands-on starter project using [Playwright](https://playwright.dev/) for end-to-end testing with JavaScript.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm

## Setup

```bash
npm install
npx playwright install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode (visible browser):

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/UIBasicstest.spec.js
```

Run tests with a specific project/browser:

```bash
npx playwright test --project=chromium
```

## Viewing Reports

After running tests, open the HTML report:

```bash
npx playwright show-report
```

## Project Structure

```
├── tests/                  # Test files
│   ├── UIBasicstest.spec.js
│   └── UIBasictest2.spec.js
├── playwright.config.js    # Playwright configuration
├── package.json
└── playwright-report/      # Generated test reports
```

## Configuration

- **Test directory:** `./tests`
- **Timeout:** 40 seconds per test
- **Reporter:** HTML
- **Browser:** Chromium (default)

See [playwright.config.js](./playwright.config.js) for full configuration details.
