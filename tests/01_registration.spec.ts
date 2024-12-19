import { test, expect } from '@playwright/test';
import { userData } from '../test_data/user.data';

test('Registration happy path', async ({ page }) => {
    //Arrange
    const registerURL = 'https://practicesoftwaretesting.com/auth/register';
    const loginURL = 'https://practicesoftwaretesting.com/auth/login';

    //Act
    await page.goto(registerURL);
    await page.locator('[data-test="first-name"]').fill(userData.userName);
    await page.locator('[data-test="last-name"]').fill(userData.userLastName);
    await page.locator('[data-test="dob"]').fill(userData.userBornDate);
    await page.locator('div').filter({ hasText: 'Customer registrationFirst' }).nth(2).click();
    await page.locator('[data-test="address"]').fill(userData.userAdress);
    await page.locator('[data-test="postcode"]').fill(userData.userPost);
    await page.locator('[data-test="city"]').fill(userData.userCity);
    await page.locator('[data-test="state"]').fill(userData.userCity);
    await page.locator('[data-test="country"]').selectOption(userData.userCountry);
    await page.locator('[data-test="phone"]').fill(userData.userPhone);
    await page.locator('[data-test="email"]').fill(userData.userLogin)
    await page.locator('[data-test="password"]').fill(userData.userPassword);
    await page.locator('[data-test="register-submit"]').click();

    //Assert 
    await expect(page).toHaveURL(loginURL);

});
