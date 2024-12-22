import { Locator, Page } from '@playwright/test';

export class Navigation {
    loginInput: Locator;
    logoButton: Locator;
    homeButton: Locator;
    categoriesButton: Locator;
    categoriesHandToolsButton: Locator;
    categoriesPowerToolsButton: Locator;
    categoriesOtherButton: Locator;
    categoriesSpecialToolButton: Locator;
    contactButton: Locator;
    signInButton: Locator;
    languageButton: Locator;
    cartButton: Locator;
    cartButtonCounter: Locator;


    constructor(private page: Page) {
        this.logoButton = this.page.getByRole('link', { name: 'Practice Software Testing -' });
        this.homeButton = this.page.locator('[data-test="nav-home"]');
        this.categoriesButton = this.page.locator('[data-test="nav-categories"]');
        this.categoriesHandToolsButton = this.page.locator('[data-test="nav-hand-tools"]');
        this.categoriesPowerToolsButton = this.page.locator('[data-test="nav-power-tools"]');
        this.categoriesOtherButton = this.page.locator('[data-test="nav-other"]');
        this.categoriesSpecialToolButton = this.page.locator('[data-test="nav-special-tools"]');
        this.contactButton = this.page.locator('[data-test="nav-contact"]');
        this.signInButton = this.page.locator('[data-test="nav-sign-in"]');
        this.languageButton = this.page.locator('[data-test="language"]');
        this.cartButton = this.page.locator('[data-test="nav-cart"]');
        this.cartButtonCounter = page.locator('[data-test="cart-quantity"]');
    }
}
