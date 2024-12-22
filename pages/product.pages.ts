import { Locator, Page } from '@playwright/test';

export class ProductPage {
    productElement: Locator;
    increaseQuantityButton: Locator;
    decreaseQuantityButton: Locator;
    quantityCounter: Locator;
    addToCartButton: Locator;
    imageElement: Locator;
    productNameElement: Locator;
    addToFavouritesButton: Locator;
    priceElement: Locator;
    productDescriptionElement: Locator;
    productAddedMessage: Locator;

    constructor(private page: Page) {
        this.productElement = this.page.locator('a').filter({ hasText: 'Combination Pliers' });
        this.increaseQuantityButton = this.page.locator('[data-test="increase-quantity"]');
        this.priceElement = this.page.getByText('$');
        this.quantityCounter = this.page.locator('[data-test="quantity"]');
        this.addToCartButton = this.page.locator('[data-test="add-to-cart"]')
        this.productAddedMessage = this.page.getByLabel('Product added to shopping');
    }
}
