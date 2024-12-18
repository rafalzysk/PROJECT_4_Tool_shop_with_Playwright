import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    //Arrange
    await page.goto('https://practicesoftwaretesting.com/auth/login');
    await page.locator('[data-test="email"]').fill('testmail5@gmail.com');
    await page.locator('[data-test="password"]').fill('TestTest123!!');
    await page.locator('[data-test="login-submit"]').click();

    //Assert 
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');

});