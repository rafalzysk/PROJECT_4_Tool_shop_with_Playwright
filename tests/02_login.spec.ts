import { test, expect } from '@playwright/test';
import { registeredUserData, userData } from '../test_data/user.data';
import { LoginPage } from '../pages/login.pages';
import { Navigation } from '../pages/home.pages';

test.describe('User login', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/auth/login');
    });

    test('Login with correct credentials', async ({ page }) => {
        //Arrange
        const accountURL = '/account';
        const loginPage = new LoginPage(page);
        const navigation = new Navigation(page)
        const userButtonText = ` ${registeredUserData.userName} ${registeredUserData.userLastName}`

        //Act
        await loginPage.login(registeredUserData.userLogin, registeredUserData.userPassword);

        //Assert 
        await expect(page).toHaveURL(accountURL);
        await expect(navigation.userNavMenu).toHaveText(userButtonText);
    });

    test('Login with incorrect credentials', async ({ page }) => {
        //Arrange
        const loginPage = new LoginPage(page);
        const errorDataText = "Invalid email or password";

        //Act
        await loginPage.login(userData.incorrectUserLogin, userData.incorrectUserPassword);

        //Assert 
        await expect(loginPage.errorData).toHaveText(errorDataText);
    });

    test('Login without entered credentials', async ({ page }) => {
        //Arrange
        const loginPage = new LoginPage(page);
        const errorLoginText = "Email is required";
        const errorPasswordText = "Password is required";

        //Act
        await loginPage.login('', '');

        //Assert 
        await expect(loginPage.errorLogin).toHaveText(errorLoginText);
        await expect(loginPage.errorPassword).toHaveText(errorPasswordText);
    })

    test('Log out', async ({ page }) => {
        const accountURL = '/account';
        const loginURL = '/auth/login';
        const loginPage = new LoginPage(page);
        const navigation = new Navigation(page);

        await loginPage.login_regsitered_user();

        await expect(page).toHaveURL(accountURL);

        await navigation.userNavMenu.click();
        await navigation.signOutButton.click();

        await expect(page).toHaveURL(loginURL);
        await expect(navigation.signInButton).toBeVisible();
    });
});