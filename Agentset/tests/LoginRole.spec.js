import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test('Login as Admin role and verify redirect to shop page', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await loginPage.selectRole('Admin');
  await loginPage.enterUsername('rahulshettyacademy');
  await loginPage.enterPassword('Learning@830$3mK2');
  await loginPage.selectCheckbox();
  await loginPage.clickSignIn();

  await page.waitForURL('**/angularpractice/shop');
});