const {LoginPage} = require('./LoginPage');
const {LoginPagePractise} = require('./LoginPagePractise');
const {ShopPage} = require('./ShopPage');
const {DashboardPage} = require('./DashboardPage');
const {OrdersHistoryPage} = require('./OrdersHistoryPage');
const {OrdersReviewPage} = require('./OrdersReviewPage');
const {CartPage} = require('./CartPage');
class POManager
{
constructor(page)
{
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.loginPagePractise = new LoginPagePractise(this.page);
    this.shopPage = new ShopPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.ordersHistoryPage = new OrdersHistoryPage(this.page);
    this.ordersReviewPage = new OrdersReviewPage(this.page);
    this.cartPage = new CartPage(this.page);


}

getLoginPage()
{
    return this.loginPage;
}

getLoginPagePractise()
{
    return this.loginPagePractise;
}

getShopPage()
{
    return this.shopPage;
}

getCartPage()
{
    return this.cartPage;
}

getDashboardPage()
{
    return this.dashboardPage;
}
getOrdersHistoryPage()
{
    return this.ordersHistoryPage;
}

getOrdersReviewPage()
{
    return this.ordersReviewPage;
}
}
module.exports = {POManager};