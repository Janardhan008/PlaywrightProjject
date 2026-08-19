class ShopPage {

constructor(page)
{
    this.page = page;
    this.products = page.locator("app-card");
    this.productTitles = page.locator(".card-body a");
}

async isProductPresent(productName)
{
    await this.products.first().waitFor();
    const titles = await this.productTitles.allTextContents();
    return titles.some(title => title.trim() === productName);
}

}
module.exports = {ShopPage};