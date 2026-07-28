const {test,expect} = require('@playwright/test');

test('Page Playwright test', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    //get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Let's shop");
   
   
    //
});

test('Page Playwright test1', async ({page}) => {
    await page.goto("https://google.com");
    //get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");

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