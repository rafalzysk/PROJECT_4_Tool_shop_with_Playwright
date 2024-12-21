import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.pages';
import { userData } from '../test_data/user.data';
import { ProductPage } from '../pages/product.pages';
import { CheckoutPage } from '../pages/checkout.pages';
import exp from 'constants';

test('test', async ({ page }) => {
    //Arrange 
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const checkoutPage = new CheckoutPage(page);



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

    //get productQuantityValue
    const productQuantityValue = await productPage.quantityCounter.textContent();
    const productPriceValue = await productPage.priceElement.textContent();

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

    /// CHECKOUT PART

    //Act
    await page.locator('[data-test="nav-cart"]').click();

    //Arrange
    const cartProductQuantityValue = await checkoutPage.cartProductQuantity.textContent();
    const cartProductPriceValue = await checkoutPage.cartProductPrice.textContent();

    //Assert
    expect(productQuantityValue).toBe(cartProductQuantityValue);
    expect(productPriceValue).toContain(cartProductPriceValue);



});