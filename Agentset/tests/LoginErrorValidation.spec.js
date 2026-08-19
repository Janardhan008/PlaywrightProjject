import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test('Login with invalid credentials shows error message', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await loginPage.enterUsername('wrongUser');
  await loginPage.enterPassword('wrongPass');
  await loginPage.clickSignIn();

  expect(await loginPage.getErrorMessage()).toContain('Incorrect username/password');
});