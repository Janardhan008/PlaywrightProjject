const playwright = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');
const { Before, After } = require('@cucumber/cucumber')


Before(async function () {

  const browser = await playwright.chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
   this.page = await context.newPage();
  this.poManager = new POManager(this.page);
});

After(async function () {
  console.log("I am last to execute");

  BeforeStep(function () {
  // This hook will be executed before all steps in a scenario with tag @fo...
});

AfterStep(async function ({ result }) {

  if (result.status === Status.FAILED) {
    await this.page.screenshot({path: 'screenshot1.png'});
  }

});
});