const {test, expect, request} = require('@playwright/test');
const loginPayLoad = {userEmail:"janardhanp008@gmail.com",userPassword:"Pass@1234"}
const orderPayLoad = {orders: [{country:"Cu", productOrderedId:"62023a7616fcf72fe..."}]}
let token;
let orderId;


test.beforeAll( async()=>
{
    //Login API
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/client/#/auth/login",
    {
        data: loginPayLoad
    } ) //200,201,
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token;
    console.log(token);

    //
   const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/user/add-to-cart",
{
  data : orderPayLoad,
  headers:{
      'Authorization' :token,
      'Content-Type' : 'application/json'
  },
})
expect(orderResponse.ok()).toBeTruthy();
const orderResponseJson = await orderResponse.json();
console.log(orderResponseJson);
orderId = orderResponseJson.orders[0];
});

test('Place the order', async ({page})=>
{
    page.addInitScript(value => {
        window.localStorage.setItem('token',value);
    }, token );
 
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");
   
    for(let i =0; i<await rows.count(); ++i)
{
   const rowOrderId =await rows.nth(i).locator("th").textContent();
   if (orderId.includes(rowOrderId))
   {
       await rows.nth(i).locator("button").first().click();
       break;
   }
}
const orderIdDetails =await page.locator(".col-text").textContent();
//await page.pause();
expect(orderId.includes(orderIdDetails)).toBeTruthy();
 
});