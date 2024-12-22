import { Locator, Page } from '@playwright/test';

export class CheckoutPage {
    cartProductPrice: Locator;
    cartProductTitle: Locator;
    cartProductQuantity: Locator;
    deleteProductFromCartMessage: Locator;
    cartTotalPrice: Locator;
    proceedButton1: Locator;
    proceedButton2: Locator;
    proceedButton3: Locator;
    userAlreadyLoggedInMessage: Locator;
    billingAdressHeader: Locator;
    paymentMethod: Locator;
    bankNameInput: Locator;
    bankAccountInput: Locator;
    bankNumberInput: Locator;
    paymentConfirmButton: Locator;
    successPaymentMessage: Locator;
    orderConfirmation: Locator;

    constructor(private page: Page) {

        this.cartProductPrice = this.page.locator('[data-test="product-price"]');
        this.cartProductTitle = this.page.locator('[data-test="product-title"]');
        this.cartProductQuantity = this.page.locator('[data-test="product-quantity"]');
        this.deleteProductFromCartMessage = this.page.getByLabel('Product deleted.');
        this.cartTotalPrice = this.page.locator('[data-test="cart-total"]');
        this.proceedButton1 = this.page.locator('[data-test="proceed-1"]');
        this.userAlreadyLoggedInMessage = this.page.locator('[class="col-md-6 offset-md-3 login-form-1"]').locator('[class="ng-star-inserted"]');
        this.proceedButton2 = this.page.locator('[data-test="proceed-2"]');
        this.billingAdressHeader = this.page.getByRole('heading', { name: 'Billing Address' });
        this.proceedButton3 = this.page.locator('[data-test="proceed-3"]');
        this.paymentMethod = this.page.locator('[data-test="payment-method"]');
        this.bankNameInput = this.page.locator('[data-test="bank_name"]');
        this.bankAccountInput = this.page.locator('[data-test="account_name"]');
        this.bankNumberInput = this.page.locator('[data-test="account_number"]');
        this.paymentConfirmButton = this.page.locator('[data-test="finish"]');
        this.successPaymentMessage = this.page.getByText('Payment was successful');
        this.orderConfirmation = this.page.locator("#order-confirmation");
    };
};