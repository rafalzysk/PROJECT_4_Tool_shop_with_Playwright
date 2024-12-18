import { test, expect } from '@playwright/test';
import { loginData } from '../test_data/user.data';

test('Login with correct credentials', async ({ page }) => {

    //Arrange
    await page.goto('https://practicesoftwaretesting.com/auth/login');
    await page.locator('[data-test="email"]').fill(loginData.userLogin);
    await page.locator('[data-test="password"]').fill(loginData.userPassword);
    await page.locator('[data-test="login-submit"]').click();

    //Assert 
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');

});

test('Login with incorrect credentials', async ({ page }) => {

    //Arrange
    await page.goto('https://practicesoftwaretesting.com/auth/login');
    await page.locator('[data-test="email"]').fill(loginData.incorrectUserLogin);
    await page.locator('[data-test="password"]').fill(loginData.incorrectUserPassword);
    await page.locator('[data-test="login-submit"]').click();

    //Assert 
    await expect(page.locator('[data-test="login-error"]')).toHaveText("Invalid email or password");

});

test('Login without entered credentials', async ({ page }) => {

    //Arrange
    await page.goto('https://practicesoftwaretesting.com/auth/login');
    await page.locator('[data-test="email"]').fill('');
    await page.locator('[data-test="password"]').fill('');
    await page.locator('[data-test="login-submit"]').click();

    //Assert 
    await expect(page.locator('[data-test="email-error"]')).toHaveText("Email is required");
    await expect(page.locator('[data-test="password-error"]')).toHaveText("Password is required");
});