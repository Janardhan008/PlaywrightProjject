const {test, expect, request} = require('@playwright/test');
const loginPayLoad = {userEmail:"janardhanp008@gmail.com",userPassword:"Pass@1234"};

test.beforeAll( async ()=>
{
   const apiContext = await request.newContext();
  const loginResponse =  await apiContext.post("https://rahulshettyacademy.com/client/#/auth/login",
   {
       data:loginPayLoad
   });
    expect(loginResponse.ok()).toBeTruthy();
   const loginResponseJson = await loginResponse.json();
   const token =loginResponseJson.token;
   console.log(token);


}); 

test('Client App login', async ({page})=>
{

    page.addInitScript(value => {

        window.localStorage.setItem('token',value);
    }, token );
    const email = "";
    const productName = 'Zara Coat 4';
    await page.goto("https://rahulshettyacademy.com/client/");
    const products = page.locator(".card-body");
    const titles= await page.locator(".card-body b").allTextContents();
    console.log(titles)
});