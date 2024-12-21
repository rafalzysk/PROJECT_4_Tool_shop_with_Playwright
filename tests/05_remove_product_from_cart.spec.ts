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
    await page.locator('[data-test="nav-cart"]').click();
    await page.locator('[class="btn btn-danger"]').click();
    await page.waitForTimeout(1000);

    const cartTotalPriceValue = await checkoutPage.cartTotalPrice.textContent()

    //Assert
    await expect(checkoutPage.deleteProductFromCartMessage).toBeVisible();
    expect(cartTotalPriceValue).toBe("$0.00")


});