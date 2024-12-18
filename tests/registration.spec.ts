import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
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
  await page.locator('[data-test="email"]').fill('testmail4@gmail.com');
  await page.locator('[data-test="password"]').fill('TestTest123!!');
  await page.locator('[data-test="register-submit"]').click();

  await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login');
});
