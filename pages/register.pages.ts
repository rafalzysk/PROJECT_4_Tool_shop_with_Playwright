import { Locator, Page } from '@playwright/test';

export class RegisterPage {
    userFirstNameInput: Locator;
    userLastNameInput: Locator;
    userBornDateInput: Locator;
    userAdressInput: Locator;
    userPostInput: Locator;
    userCityInput: Locator;
    userStateInput: Locator;
    userCountryInput: Locator;
    userPhoneInput: Locator;
    userLoginInput: Locator;
    userPasswordInput: Locator;
    registerSubmitButton: Locator;


    constructor(private page: Page) {
        this.userFirstNameInput = this.page.locator('[data-test="first-name"]');
        this.userLastNameInput = this.page.locator('[data-test="last-name"]');
        this.userBornDateInput = this.page.locator('[data-test="dob"]');
        this.userAdressInput = this.page.locator('[data-test="address"]');
        this.userPostInput = this.page.locator('[data-test="postcode"]');
        this.userCityInput = this.page.locator('[data-test="city"]');
        this.userStateInput = this.page.locator('[data-test="state"]');
        this.userCountryInput = this.page.locator('[data-test="country"]');
        this.userPhoneInput = this.page.locator('[data-test="phone"]');
        this.userLoginInput = this.page.locator('[data-test="email"]');
        this.userPasswordInput = this.page.locator('[data-test="password"]')
        this.registerSubmitButton = this.page.locator('[data-test="register-submit"]')


    }
}
