import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test('Login with valid credentials without selecting terms checkbox', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await loginPage.enterUsername('rahulshettyacademy');
  await loginPage.enterPassword('Learning@830$3mK2');

  expect(await loginPage.isCheckboxSelected()).toBeFalsy();

  await loginPage.clickSignIn();

  await page.waitForURL('**/angularpractice/shop');
});