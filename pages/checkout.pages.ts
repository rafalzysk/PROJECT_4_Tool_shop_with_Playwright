import { Locator, Page } from '@playwright/test';

export class CheckoutPage {
    cartProductPrice: Locator;
    cartProductTitle: Locator;
    cartProductQuantity: Locator;
    deleteProductFromCartMessage: Locator;
    cartTotalPrice: Locator;

    constructor(private page: Page) {

        this.cartProductPrice = this.page.locator('[data-test="product-price"]');
        this.cartProductTitle = this.page.locator('[data-test="product-title"]');
        this.cartProductQuantity = this.page.locator('[data-test="product-quantity"]')
        this.deleteProductFromCartMessage = this.page.getByLabel('Product deleted.')
        this.cartTotalPrice = this.page.locator('[data-test="cart-total"]')

    }
}