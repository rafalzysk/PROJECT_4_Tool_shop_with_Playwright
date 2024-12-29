import { Locator, Page } from '@playwright/test';
import { registeredUserData, userData } from '../test_data/user.data';

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
    registerErrorMessage: Locator;
    registrationForm: Locator;


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
        this.userPasswordInput = this.page.locator('[data-test="password"]');
        this.registerSubmitButton = this.page.locator('[data-test="register-submit"]');
        this.registerErrorMessage = this.page.locator('[class="help-block"]');
        this.registrationForm = this.page.locator('[class="col-lg-8 auth-form"]')
    }

    async regsiter_new_user() {
        await this.userFirstNameInput.fill(userData.userName);
        await this.userLastNameInput.fill(userData.userLastName);
        await this.userBornDateInput.fill(userData.userBornDate);
        await this.userAdressInput.fill(userData.userAdress);
        await this.userPostInput.fill(userData.userPost);
        await this.userCityInput.fill(userData.userCity);
        await this.userStateInput.fill(userData.userState);
        await this.userCountryInput.selectOption(userData.userCountry);
        await this.userPhoneInput.fill(userData.userPhone);
        await this.userLoginInput.fill(userData.userLogin)
        await this.userPasswordInput.fill(userData.userPassword);
        await this.registerSubmitButton.click();
    }

    async regsiter_with_already_used_email() {
        await this.userFirstNameInput.fill(userData.userName);
        await this.userLastNameInput.fill(userData.userLastName);
        await this.userBornDateInput.fill(userData.userBornDate);
        await this.userAdressInput.fill(userData.userAdress);
        await this.userPostInput.fill(userData.userPost);
        await this.userCityInput.fill(userData.userCity);
        await this.userStateInput.fill(userData.userState);
        await this.userCountryInput.selectOption(userData.userCountry);
        await this.userPhoneInput.fill(userData.userPhone);
        await this.userLoginInput.fill(registeredUserData.userLogin)
        await this.userPasswordInput.fill(userData.userPassword);
        await this.registerSubmitButton.click();
    }
}
