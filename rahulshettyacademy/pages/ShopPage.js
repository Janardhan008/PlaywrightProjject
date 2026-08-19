class ShopPage {
  constructor(page) {
    this.page = page;
    this.products = page.locator('app-card');
  }

  async isProductVisible(productName) {
    await this.products.first().waitFor();
    return this.products.filter({ hasText: productName }).first().isVisible();
  }
}

export { ShopPage };