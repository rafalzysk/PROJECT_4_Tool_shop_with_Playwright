import { Locator, Page } from '@playwright/test';
import { registeredUserData, userData } from '../test_data/user.data';

export class LoginPage {
    loginInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    errorData: Locator;
    errorLogin: Locator;
    errorPassword: Locator;
    loginForm: Locator;

    constructor(private page: Page) {
        this.loginInput = this.page.locator('[data-test="email"]');
        this.passwordInput = this.page.locator('[data-test="password"]');
        this.loginButton = this.page.locator('[data-test="login-submit"]');
        this.errorData = this.page.locator('[data-test="login-error"]');
        this.errorLogin = this.page.locator('[data-test="email-error"]');
        this.errorPassword = page.locator('[data-test="password-error"]');
        this.loginForm = this.page.locator('[class="col-lg-6 auth-form"]');

    }

    async login_regsitered_user() {
        await this.loginInput.fill(registeredUserData.userLogin);
        await this.passwordInput.fill(registeredUserData.userPassword);
        await this.loginButton.click();
    }

    async login(login: string, password: string) {
        await this.loginInput.fill(login);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
