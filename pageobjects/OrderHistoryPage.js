class OrdersHistoryPage
{
constructor(page)
{
    this.page = page;
    this.ordersTable = page.locator("tbody");
    this.rows = page.locator("tbody tr");
    this.orderIdDetails = page.locator(".col-text");
}
async searchOrderAndSelect(orderId)
{
    await this.ordersTable.waitFor();
    const rowCount = await this.rows.count();
    for (let i = 0; i < rowCount; i++)
    {
        const row = this.rows.nth(i);
        const rowOrderId = (await row.locator("th").textContent()).trim();
        if (orderId.includes(rowOrderId))
        {
            await row.locator("button").first().click();
            return;
        }
    }
}

async getOrderId()
{
    return (await this.orderIdDetails.textContent()).trim();
}

}
module.exports = {OrdersHistoryPage};
