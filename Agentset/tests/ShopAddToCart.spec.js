import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { ShopPage } from '../pages/ShopPage.js';

test('Add iPhone X to cart and verify it appears in cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const shopPage = new ShopPage(page);

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await loginPage.enterUsername('rahulshettyacademy');
  await loginPage.enterPassword('Learning@830$3mK2');
  await loginPage.selectCheckbox();
  await loginPage.clickSignIn();

  await page.waitForURL('**/angularpractice/shop');

  await shopPage.addProductToCart('iPhone X');
  expect(await shopPage.isProductInCart('iPhone X')).toBeTruthy();
});