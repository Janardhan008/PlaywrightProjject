const {test, expect} = require('@playwright/test');
const {POManager} = require('../pageobjects/POManager');

test('@Webs Login on practise page and verify iphone X on shop', async ({page})=>
{
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPagePractise();
    await loginPage.goTo();
    await loginPage.validLogin("rahulshettyacademy","Learning@830$3mK2");

    const shopPage = poManager.getShopPage();
    expect(await shopPage.isProductPresent("iphone X")).toBeTruthy();
});