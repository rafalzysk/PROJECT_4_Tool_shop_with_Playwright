import { test, expect } from '@playwright/test';
import { userData } from '../test_data/user.data';
import { RegisterPage } from '../pages/register.pages';

test('Registration happy path', async ({ page }) => {
    //Arrange
    const registerURL = '/auth/register';
    const loginURL = '/auth/login';
    const registerPage = new RegisterPage(page);

    //Act
    await page.goto(registerURL);
    await registerPage.userFirstNameInput.fill(userData.userName);
    await registerPage.userLastNameInput.fill(userData.userLastName);
    await registerPage.userBornDateInput.fill(userData.userBornDate);
    await registerPage.userAdressInput.fill(userData.userAdress);
    await registerPage.userPostInput.fill(userData.userPost);
    await registerPage.userCityInput.fill(userData.userCity);
    await registerPage.userStateInput.fill(userData.userState);
    await registerPage.userCountryInput.selectOption(userData.userCountry);
    await registerPage.userPhoneInput.fill(userData.userPhone);
    await registerPage.userLoginInput.fill(userData.userLogin)
    await registerPage.userPasswordInput.fill(userData.userPassword);
    await registerPage.registerSubmitButton.click();

    //Assert 
    await expect(page).toHaveURL(loginURL);

});
