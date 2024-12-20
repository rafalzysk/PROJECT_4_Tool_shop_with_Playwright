import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.pages';
import { userData } from '../test_data/user.data';
import { ProductPage } from '../pages/product.pages';

test('test', async ({ page }) => {
    //Arrange 
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    //Act
    await page.goto('https://practicesoftwaretesting.com/');
    await page.locator('[data-test="nav-sign-in"]').click();

    await loginPage.loginInput.fill(userData.userLogin);
    await loginPage.passwordInput.fill(userData.userPassword);
    await loginPage.loginButton.click();
    await page.waitForTimeout(500);
    await page.getByRole('link', { name: 'Practice Software Testing -' }).click();
    await productPage.productElement.click()
    await productPage.increaseQuantityButton.click();
    await productPage.addToCartButton.click();


    //Assert
    await expect(productPage.quantityCounter).toHaveValue('2');
    await expect(page.locator('[data-test="cart-quantity"]')).toHaveText('2');
    await expect(productPage.productAddedMessage).toBeVisible();

    await expect(productPage.imageElement).toBeVisible();
    await expect(productPage.productNameElement).toBeVisible();
    await expect(productPage.productDescriptionElement).toBeVisible();
    await expect(productPage.decreaseQuantityButton).toBeVisible();
    await expect(productPage.increaseQuantityButton).toBeVisible();
    await expect(productPage.quantityCounter).toBeVisible();
    await expect(productPage.addToCartButton).toBeVisible();
    await expect(productPage.addToFavouritesButton).toBeVisible();
    await expect(productPage.priceElement).toBeVisible();

});