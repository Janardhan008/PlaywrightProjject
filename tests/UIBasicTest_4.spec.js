const  {test,expect}=require('playwright/test');

test('Browser Context Playwright test', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    //css
    await page.locator('#username').type("rahulshetty");
    await page.locator("[type='password']").type("learning");
    await page.locator("#signInBtn").click();

    //Extract and Print the text from the error message
    console.log(await page.locator("[style*='block']").textContent());
    //Assert to checck the error message
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');


});