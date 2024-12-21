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
        this.decreaseQuantityButton = this.page.locator('[data-test="decrease-quantity"]');
        this.priceElement = this.page.getByText('$');
        this.quantityCounter = this.page.locator('[data-test="quantity"]');
        this.addToCartButton = this.page.locator('[data-test="add-to-cart"]')
        this.imageElement = this.page.locator('div').filter({ hasText: 'Photo by Helinton Fantin on' }).nth(2);
        this.productNameElement = this.page.locator('[data-test="product-name"]');
        this.productDescriptionElement = this.page.locator('[data-test="product-description"]')
        this.addToFavouritesButton = this.page.locator('[data-test="add-to-favorites"]');
        this.productAddedMessage = this.page.getByLabel('Product added to shopping');
    }
}
