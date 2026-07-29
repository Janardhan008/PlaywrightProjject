const {test,expect} = require('@playwright/test');

test('Browser Context Playwright test', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    //css
    const username = page.locator('#username');
    const password = page.locator("[type='password']");
    const signIn = page.locator("#signInBtn");
    await username.type("rahul");
    await password.type("Learning@830$3mK2");
    await signIn.click();

    //Extract and Print the text from the error message
    console.log(await page.locator("[style*='block']").textContent());
    //Assert to check the error message
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    //fill
    await username.fill("");
    await username.type("rahulshettyacademy"); 
    await signIn.click();

    //Acccesing multiple elements - using nth() method
    await signIn.click();
console.log(await page.locator(".card-body a").first().textContent());
console.log(await page.locator(".card-body a").nth(1).textContent());
const titles = await page.locator(".card-body a").allTextContents();
console.log(titles);
});