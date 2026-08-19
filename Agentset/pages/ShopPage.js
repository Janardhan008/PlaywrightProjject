class ShopPage {
  constructor(page) {
    this.page = page;
    this.products = page.locator('app-card');
    this.checkoutNavLink = page.locator('.nav-link.btn.btn-primary');
    this.cartProductNames = page.locator('.media-heading');
  }

  async isProductVisible(productName) {
    await this.products.first().waitFor();
    return this.products.filter({ hasText: productName }).first().isVisible();
  }

  async addProductToCart(productName) {
    const productCard = this.products.filter({ hasText: productName });
    await productCard.first().waitFor();
    await productCard.getByRole('button', { name: 'Add' }).click();
  }

  async isProductInCart(productName) {
    await this.checkoutNavLink.click();
    await this.cartProductNames.first().waitFor();
    return await this.cartProductNames.filter({ hasText: productName }).first().isVisible();
  }
}

export { ShopPage };