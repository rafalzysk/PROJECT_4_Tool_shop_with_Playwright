import { Locator, Page } from '@playwright/test';

export class ContactPage {
    NameInput: Locator;
    LastNameInput: Locator;
    EmailInput: Locator;
    subjectInput: Locator;
    messageInput: Locator;
    attachmentElement: Locator;
    submitButton: Locator;
    textElement: Locator;


    constructor(private page: Page) {
        this.NameInput = this.page.locator('[data-test="first-name"]');
        this.LastNameInput = this.page.locator('[data-test="last-name"]');
        this.EmailInput = this.page.locator('[data-test="email"]');
        this.subjectInput = this.page.locator('[data-test="subject"]');
        this.messageInput = this.page.locator('[data-test="message"]');
        this.attachmentElement = this.page.locator('[data-test="attachment"]');
        this.submitButton = this.page.locator('[data-test="contact-submit"]');
        this.textElement = this.page.locator('[class="alert alert-success mt-3"]')

    }
}