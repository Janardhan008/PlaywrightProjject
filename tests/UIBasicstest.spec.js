const {test} = require('@playwright/test');

test('Page Playwright test', async ({page}) => {
    await page.goto("https://google.com");
    //
});



// test.only('Page Playwright test', async ({page}) => {
//     await page.goto("https://google.com");
//     //
// });

// Quick summary of the anatomy:

// Import test (and expect if asserting)
// Call test('name', async ({ page }) => { ... })
// Inside, use page.* methods with await for each browser action
// Optionally add expect(...) assertions to verify behavior
// Optionally wrap related tests in test.describe() for organization