import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { ShopPage } from '../pages/ShopPage.js';

test('Login to practise page and verify iPhone X is visible', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await loginPage.enterUsername('rahulshettyacademy');
  await loginPage.enterPassword('Learning@830$3mK2');
  await loginPage.selectCheckbox();
  await loginPage.clickSignIn();

  await page.waitForURL('**/angularpractice/shop');

  const shopPage = new ShopPage(page);
  expect(await shopPage.isProductVisible('iPhone X')).toBeTruthy();
});