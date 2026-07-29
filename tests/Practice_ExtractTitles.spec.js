
const {test,expect} = require('@playwright/test');
test.only('Browser Context-Validating Error login', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("janardhanp008@gmail.com");
    await page.locator("#userPassword").type("Pass@1234");
    await page.locator("[value='Login']").click();
 
        //Acccesing first  element - using nth() method
 const firstElement=await page.locator(".card-body b").first().textContent()
 console.log(firstElement);
 await expect(firstElement).toEqual("ADIDAS ORIGINALS");
});

