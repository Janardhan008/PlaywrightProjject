class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.termsCheckbox = page.locator('#terms');
    this.signInButton = page.locator('#signInBtn');
    this.errorMessage = page.locator('.alert-danger');
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

  async isCheckboxSelected() {
    return await this.termsCheckbox.isChecked();
  }

  async selectRole(roleName) {
    await this.page.locator(`input[value="${roleName.toLowerCase()}"]`).click();
  }

  async clickSignIn() {
    await this.signInButton.click();
  }

  async getErrorMessage() {
    await this.errorMessage.waitFor({ state: 'visible' });
    return (await this.errorMessage.textContent()).trim();
  }
}

export { LoginPage };