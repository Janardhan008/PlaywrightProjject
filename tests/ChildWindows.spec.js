const test=require('@playwright/test');


test.only('Child Windows', async ({browser}) => {
  test.only('Child windows hadl', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");

    const [newPage] = await Promise.all([

        context.waitForEvent('page'),
        documentLink.click(),
    ])

// //Extracting  the text from child window/page  and passing in parent window/page
// You need to split the text and extract (//We need rahulsheetyacademy.com here)
    const text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain = arrayText[1].split(" ")[0]
    console.log(domain);
    await page.locator("#username").type(domain);
    await page.pause();
    console.log(await page.locator("#username").textContent());







});