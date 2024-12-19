import { Locator, Page } from '@playwright/test';

export class LoginPage {
    loginInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    errorData: Locator;
    errorLogin: Locator;
    errorPassword: Locator;

    constructor(private page: Page) {
        this.loginInput = this.page.locator('[data-test="email"]');
        this.passwordInput = this.page.locator('[data-test="password"]');
        this.loginButton = this.page.locator('[data-test="login-submit"]');
        this.errorData = this.page.locator('[data-test="login-error"]');
        this.errorLogin = this.page.locator('[data-test="email-error"]');
        this.errorPassword = page.locator('[data-test="password-error"]');

    }
}
