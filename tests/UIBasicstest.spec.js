const {test} = require('@playwright/test');


test('First Playwright test', async () =>
{
//playwright code-
//step1 -open brower
//step2 - enter u/p 2seconds

//step3 - click

});

const { test, expect } = require('@playwright/test');

test('test description here', async ({ page }) => {
    // your test steps go here
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example/);
});

// Quick summary of the anatomy:

// Import test (and expect if asserting)
// Call test('name', async ({ page }) => { ... })
// Inside, use page.* methods with await for each browser action
// Optionally add expect(...) assertions to verify behavior
// Optionally wrap related tests in test.describe() for organization