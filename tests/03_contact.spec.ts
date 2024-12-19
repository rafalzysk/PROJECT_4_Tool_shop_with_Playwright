import { test, expect } from '@playwright/test';
import { userData } from '../test_data/user.data';
import { ContactPage } from '../pages/contact.pages';

test('test', async ({ page }) => {
    //Arrange
    const attachmentPath = './test_data/test.txt';
    const successText = "Thanks for your message! We will contact you shortly."
    const subjectOption = 'return';
    const contactPage = new ContactPage(page);

    //Act
    await page.goto('https://practicesoftwaretesting.com/');
    await page.locator('[data-test="nav-contact"]').click();
    await contactPage.NameInput.fill(userData.userName);
    await contactPage.LastNameInput.fill(userData.userLastName);
    await contactPage.EmailInput.fill(userData.userLogin);
    await contactPage.subjectInput.selectOption(subjectOption);
    await contactPage.messageInput.fill(userData.userMessage);
    await contactPage.attachmentElement.setInputFiles(attachmentPath);
    await contactPage.submitButton.click();
    await expect(contactPage.textElement).toHaveText(successText);
});


