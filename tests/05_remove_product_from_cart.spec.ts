import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/product.pages';
import { CheckoutPage } from '../pages/checkout.pages';
import { Navigation } from '../pages/navigation.pages';


test('test', async ({ page }) => {

    const productPage = new ProductPage(page);
    const checkoutPage = new CheckoutPage(page);
    const navigation = new Navigation(page);
    const epmtyCartTotalValue = "$0.00";

    await page.goto('/');

    ///--PRODUCT PART --///
    await productPage.productElement.click()
    await productPage.increaseQuantityButton.click();
    await productPage.addToCartButton.click();

    ///--CHECKOUT PART--///     
    await navigation.cartButton.click();
    await checkoutPage.deleteProductButton.click();
    await page.waitForTimeout(1000);

    const cartTotalPriceValue = await checkoutPage.cartTotalPrice.textContent()

    await expect(checkoutPage.deleteProductFromCartMessage).toBeVisible();
    expect(cartTotalPriceValue).toBe(epmtyCartTotalValue);
});