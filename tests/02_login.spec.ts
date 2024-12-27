import { test, expect } from '@playwright/test';
import { userData } from '../test_data/user.data';
import { LoginPage } from '../pages/login.pages';

test.describe('User login', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/auth/login');
    });

    test('Login with correct credentials', async ({ page }) => {
        //Arrange
        const accountURL = '/account';
        const loginPage = new LoginPage(page);

        //Act
        await loginPage.loginInput.fill(userData.userLogin);
        await loginPage.passwordInput.fill(userData.userPassword);
        await loginPage.loginButton.click();

        //Assert 
        await expect(page).toHaveURL(accountURL);

    });

    test('Login with incorrect credentials', async ({ page }) => {
        //Arrange
        const loginPage = new LoginPage(page);
        const errorDataText = "Invalid email or password";

        //Act
        await loginPage.loginInput.fill(userData.incorrectUserLogin);
        await loginPage.passwordInput.fill(userData.incorrectUserPassword);
        await loginPage.loginButton.click();

        //Assert 
        await expect(loginPage.errorData).toHaveText(errorDataText);

    });

    test('Login without entered credentials', async ({ page }) => {
        //Arrange
        const loginPage = new LoginPage(page);
        const errorLoginText = "Email is required";
        const errorPasswordText = "Password is required";

        //Act
        await loginPage.loginInput.fill('');
        await loginPage.passwordInput.fill('');
        await loginPage.loginButton.click();

        //Assert 
        await expect(loginPage.errorLogin).toHaveText(errorLoginText);
        await expect(loginPage.errorPassword).toHaveText(errorPasswordText);
    })
});