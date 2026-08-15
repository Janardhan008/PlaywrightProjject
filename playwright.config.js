// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 1,
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless: true,
    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,
    screenshot: 'on',
    trace: 'on'
  }
});

// // @ts-check
// import { defineConfig, devices } from '@playwright/test';
// export default defineConfig({
//   testDir: './tests',
//   retries: 1,
//   reporter: 'html',
//   use: {
//     browserName: 'chromium',
//     headless: true

// /**
//  * @see https://playwright.dev/docs/test-configuration
//  */
// const config = ({
//  testDir: './tests',
//   timeout: 60 * 1000,
//   expect: {
//     timeout: 50 * 1000,
//   },
//   reporter: 'html',

//   use: {
//   actionTimeout: 10 * 1000,     // 10 seconds max per action (click, fill, etc.)
//   navigationTimeout: 30 * 1000, // 30 seconds max per navigation (page.goto, etc.)
//   browserName: 'chromium',      // run tests in Chromium by default
//   headless: false,              // run browser with a visible UI window
//   screenshot: 'on',             // capture a screenshot for every test
//   trace: 'on',                  // off,on — record a full trace for every test
// },
// });
// module.exports = config;