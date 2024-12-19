import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="nav-contact"]').click();
  await page.locator('[data-test="first-name"]').click();
  await page.locator('[data-test="first-name"]').fill('testnasdasd');
  await page.locator('[data-test="last-name"]').click();
  await page.locator('[data-test="last-name"]').fill('testnaneee');
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill('test@test.com');
  await page.locator('[data-test="subject"]').selectOption('return');
  await page.locator('[data-test="message"]').click();
  await page.locator('[data-test="message"]').fill('asdasdasdasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss');
  await page.locator('[data-test="attachment"]').click();
  await page.locator('[data-test="attachment"]').setInputFiles('test.txt');
  await page.locator('[data-test="contact-submit"]').click();
  await page.getByText('Thanks for your message! We').click();
  await page.locator('[data-test="nav-contact"]').click();
  await page.locator('[data-test="nav-contact"]').click();
  await page.getByRole('link', { name: 'Practice Software Testing -' }).click();
});