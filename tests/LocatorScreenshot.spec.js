   const {test,expect} = require('@playwright/test')

test.only("Screenshot & Visual comparision", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    // 1. Confirm the text element is visible
    await expect(page.locator("#displayed-text")).toBeVisible();

    // 2. NEW: Screenshot just that one element, while it's still visible
    await page.locator('#displayed-text').screenshot({path: 'partialScreenshot1.png'});

    // 3. Click the button that hides it
    await page.locator("#hide-textbox").click();

    // 4. Full-page screenshot, taken AFTER hiding
    await page.screenshot({path: 'screenshot.png'});

    // 5. Confirm it's now hidden
    await expect(page.locator("#displayed-text")).toBeHidden();
});