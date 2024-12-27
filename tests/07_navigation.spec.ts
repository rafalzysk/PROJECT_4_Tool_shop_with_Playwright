import { test, expect } from '@playwright/test';
import { Navigation } from '../pages/home.pages';

test.describe('Navigation buttons verification', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Logo button', async ({ page }) => {
        const navigation = new Navigation(page);

        await navigation.logoButton.click();
        await expect(page).toHaveURL('/');
    });

    test('Contact button', async ({ page }) => {
        const navigation = new Navigation(page);

        await navigation.contactButton.click();
        await expect(page).toHaveURL('/contact');
    });

    test('Sign in button', async ({ page }) => {
        const navigation = new Navigation(page);

        await navigation.signInButton.click();
        await expect(page).toHaveURL('/auth/login');
    });

    test('Categories button', async ({ page }) => {
        const navigation = new Navigation(page);

        await navigation.categoriesButton.click();
        await expect(navigation.categoriesHandToolsButton).toBeVisible();
        await expect(navigation.categoriesPowerToolsButton).toBeVisible();
        await expect(navigation.categoriesOtherButton).toBeVisible();
        await expect(navigation.categoriesSpecialToolButton).toBeVisible();
        await expect(navigation.categoriesRentalButton).toBeVisible();
    });

    test('Categories - Hand tools button', async ({ page }) => {
        const navigation = new Navigation(page);

        await navigation.categoriesButton.click();
        await navigation.categoriesHandToolsButton.click();
        await expect(page).toHaveURL('/category/hand-tools');
    });

    test('Categories - Power tools button', async ({ page }) => {
        const navigation = new Navigation(page);

        await navigation.categoriesButton.click();
        await navigation.categoriesPowerToolsButton.click();
        await expect(page).toHaveURL('/category/power-tools');
    });

    test('Categories - Other tools button', async ({ page }) => {
        const navigation = new Navigation(page);

        await navigation.categoriesButton.click();
        await navigation.categoriesOtherButton.click();
        await expect(page).toHaveURL('/category/other');
    });

    test('Categories - Rentals tools button', async ({ page }) => {
        const navigation = new Navigation(page);

        await navigation.categoriesButton.click();
        await navigation.categoriesRentalButton.click();
        await expect(page).toHaveURL('/rentals');
    });

});
