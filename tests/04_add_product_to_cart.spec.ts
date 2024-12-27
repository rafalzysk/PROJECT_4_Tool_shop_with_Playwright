import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/product.pages';
import { CheckoutPage } from '../pages/checkout.pages';
import { Navigation } from '../pages/navigation.pages';

test('Add product to cart', async ({ page }) => {

    const productPage = new ProductPage(page);
    const checkoutPage = new CheckoutPage(page);
    const navigation = new Navigation(page);
    const productAmountValue = "2";

    await page.goto('/');

    ///--PRODUCT PART --///
    await productPage.productElement.click();
    await productPage.increaseQuantityButton.click();
    await productPage.addToCartButton.click();

    const productQuantityValue = await productPage.quantityCounter.textContent();

    await expect(productPage.quantityCounter).toHaveValue(productAmountValue);
    await expect(navigation.cartButtonCounter).toHaveText(productAmountValue);
    await expect(productPage.productAddedMessage).toBeVisible();

    ///--CHECKOUT PART--///
    await navigation.cartButton.click();

    const cartProductQuantityValue = await checkoutPage.cartProductQuantity.textContent();
    expect(productQuantityValue).toBe(cartProductQuantityValue);
});