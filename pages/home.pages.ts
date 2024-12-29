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
    categoriesRentalButton: Locator;
    userNavMenu: Locator;
    signOutButton: Locator;
    navBar: Locator;


    constructor(private page: Page) {
        this.logoButton = this.page.getByRole('link', { name: 'Practice Software Testing -' });
        this.homeButton = this.page.locator('[data-test="nav-home"]');
        this.categoriesButton = this.page.locator('[data-test="nav-categories"]');
        this.categoriesHandToolsButton = this.page.locator('[data-test="nav-hand-tools"]');
        this.categoriesPowerToolsButton = this.page.locator('[data-test="nav-power-tools"]');
        this.categoriesOtherButton = this.page.locator('[data-test="nav-other"]');
        this.categoriesSpecialToolButton = this.page.locator('[data-test="nav-special-tools"]');
        this.categoriesRentalButton = this.page.locator('[data-test="nav-rentals"]');
        this.contactButton = this.page.locator('[data-test="nav-contact"]');
        this.signInButton = this.page.locator('[data-test="nav-sign-in"]');
        this.languageButton = this.page.locator('[data-test="language"]');
        this.cartButton = this.page.locator('[data-test="nav-cart"]');
        this.cartButtonCounter = this.page.locator('[data-test="cart-quantity"]');
        this.userNavMenu = this.page.locator('[data-test="nav-menu"]');
        this.signOutButton = this.page.locator('[data-test="nav-sign-out"]');
        this.navBar = this.page.locator('[class="navbar navbar-expand-lg navbar-light bg-light"]');

    }
}


export class Search {
    searchInput: Locator;
    searchSubmit: Locator;
    expectedProducts: Locator;
    searchTerm: Locator;
    notAvaialbleProductsMessage: Locator;
    filterProductCHeckbox: Locator;
    allExpectedProducts: Locator;


    constructor(private page: Page) {
        this.searchInput = this.page.locator('[data-test="search-query"]')
        this.searchSubmit = this.page.locator('[data-test="search-submit"]')
        this.expectedProducts = this.page.locator('[class="card-body"]')
        this.searchTerm = this.page.locator('[data-test="search-term"]')
        this.notAvaialbleProductsMessage = this.page.locator('[data-test="no-results"]')
        this.allExpectedProducts = page.locator(".col-md-9").getByRole("link")

    }
}

export class Filter {
    filterProductCheckbox: Locator;
    expectedProduct: Locator;


    constructor(private page: Page) {
        this.filterProductCheckbox = this.page.getByRole('checkbox', { name: " Drill " })
        this.expectedProduct = this.page.locator('[class="card-body"]')
    }
}
