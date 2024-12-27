import { test, expect } from '@playwright/test';
import { Search, Filter } from '../pages/home.pages';

test.describe('Search component', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Cheking displaying of searched products', async ({ page }) => {
        const search = new Search(page);
        const availableProduct = "Saw";

        await search.searchInput.fill(availableProduct);
        await search.searchSubmit.click();
        await page.waitForTimeout(1000);

        const expectedProduct = await search.expectedProducts.allTextContents();

        expectedProduct.forEach(product => {
            expect(product).toContain(availableProduct)
        });

    })

    test('Searching for not-available product', async ({ page }) => {
        const search = new Search(page);
        const notAvailableProduct = "chomik";

        await search.searchInput.fill(notAvailableProduct);
        await search.searchSubmit.click();
        await page.waitForTimeout(1000);

        const expectedProduct = await search.searchTerm.textContent();

        expect(expectedProduct).toBe(notAvailableProduct);
        await expect(search.notAvaialbleProductsMessage).toBeVisible();
    });

    test('Veryfing amount of displayed elements with API response', async ({ page }) => {
        const search = new Search(page);
        const availableProduct = "saw";
        const availableProductApiEndPoint = 'https://api.practicesoftwaretesting.com/products/search?q=saw';

        await search.searchInput.fill(availableProduct);
        await search.searchSubmit.click();
        await page.waitForTimeout(1000);

        const response = await page.request.get(availableProductApiEndPoint);
        const products = await response.json();

        const apiProductCount = products.data.length;
        const productElements = page.locator(".col-md-9").getByRole("link");
        await expect(productElements).toHaveCount(apiProductCount);
    });

});


test.describe('Filter component', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });


    test('Checking displayed products after filtering', async ({ page }) => {
        const filter = new Filter(page);
        const productName = "Drill";

        await page.goto('https://practicesoftwaretesting.com/');
        await filter.filterProductCheckbox.click()
        await page.waitForTimeout(1000);

        const expectedProduct = await filter.expectedProduct.allTextContents();

        expectedProduct.forEach(product => {
            (expect(product).toContain(productName));
        });

    });

})