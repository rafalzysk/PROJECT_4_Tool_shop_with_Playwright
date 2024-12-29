import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/register.pages';


test.describe('User registration', () => {
    test.beforeEach(async ({ page }) => {
        const registerURL = '/auth/register';
        await page.goto(registerURL);
    });

    test('Registration with valid data', async ({ page }) => {
        //Arrange
        const loginURL = '/auth/login';
        const registerPage = new RegisterPage(page);

        //Act
        await registerPage.regsiter_new_user();

        //Assert 
        await expect(page).toHaveURL(loginURL);
    });


    test('Registration with already used email', async ({ page }) => {
        //Arrange
        const registerURL = '/auth/register';
        const registerPage = new RegisterPage(page);
        const alreadyUsedEmailMessage = "A customer with this email address already exists.";

        //Act
        await page.goto(registerURL);
        await registerPage.regsiter_with_already_used_email();

        //Assert 
        await expect(registerPage.registerErrorMessage).toHaveText(alreadyUsedEmailMessage);
    });

    test('Registration form visual test', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await expect(registerPage.registrationForm).toHaveScreenshot();
    });
});