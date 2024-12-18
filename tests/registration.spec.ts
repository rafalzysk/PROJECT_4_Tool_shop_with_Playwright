import { test, expect } from '@playwright/test';
import { loginData } from '../test_data/user.data';

test('Registration happy', async ({ page }) => {

  //Arrange
  await page.goto('https://practicesoftwaretesting.com/auth/register');
  await page.locator('[data-test="first-name"]').fill('Testname');
  await page.locator('[data-test="last-name"]').fill('Testlastname');
  await page.locator('[data-test="dob"]').fill('1992-12-12');
  await page.locator('div').filter({ hasText: 'Customer registrationFirst' }).nth(2).click();
  await page.locator('[data-test="address"]').fill('Testadress 1/2');
  await page.locator('[data-test="postcode"]').fill('99-999');
  await page.locator('[data-test="city"]').fill('Testcity');
  await page.locator('[data-test="state"]').fill('Teststate');
  await page.locator('[data-test="country"]').selectOption('AL');
  await page.locator('[data-test="phone"]').fill('555666777');
  await page.locator('[data-test="email"]').fill(loginData.userLogin)
  await page.locator('[data-test="password"]').fill(loginData.userPassword);
  await page.locator('[data-test="register-submit"]').click();

  //Assert 
  await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login');

});
