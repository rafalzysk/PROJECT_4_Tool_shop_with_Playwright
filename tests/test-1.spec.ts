import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="product-01JFNCWFW0GRB35C8ZAN1GRT6B"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.getByLabel('Product added to shopping').click();
  await page.locator('[data-test="nav-cart"]').click();
  await page.getByRole('row', { name: 'Combination Pliers  Quantity' }).locator('a').click();
  await page.locator('[data-test="cart-total"]').click();
  await page.locator('[data-test="cart-total"]').click();
});