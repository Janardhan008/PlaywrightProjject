class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.termsCheckbox = page.locator('#terms');
    this.signInButton = page.locator('#signInBtn');
  }

  async enterUsername(username) {
    await this.username.fill(username);
  }

  async enterPassword(password) {
    await this.password.fill(password);
  }

  async selectCheckbox() {
    await this.termsCheckbox.check();
  }

  async clickSignIn() {
    await this.signInButton.click();
  }
}

export { LoginPage };