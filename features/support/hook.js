Before(function () {

  const browser = await playwright.chromium.launch({
    headless: false
  });

  const context = await browser.newContext();
  const page = await context.newPage();
  this.poManager = new POManager(page);
});