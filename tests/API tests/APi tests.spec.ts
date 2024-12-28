import { test, expect } from '@playwright/test';
import { registeredUserData, userData } from '../../test_data/user.data';

test('POST Register new user account', async ({ request }) => {

    const response = await request.post('https://api.practicesoftwaretesting.com/users/register', {
        data: {
            first_name: userData.userName,
            last_name: userData.userLastName,
            address: userData.userAdress,
            city: userData.userCity,
            state: userData.userState,
            country: userData.userCountry,
            postcode: userData.userPost,
            phone: userData.userPhone,
            dob: userData.userBornDate,
            password: userData.userPassword,
            email: userData.userLogin
        },
    });

    expect(response.status()).toBe(201);
    console.log(await response.json());
});


test('POST Login user', async ({ request }) => {

    const response = await request.post('https://api.practicesoftwaretesting.com/users/login', {
        data: {
            email: registeredUserData.userLogin,
            password: registeredUserData.userPassword
        },
    });

    expect(response.status()).toBe(200);
    console.log(await response.json());
});

test('POST Check payment', async ({ request }) => {

    const response = await request.post('https://api.practicesoftwaretesting.com/payment/check', {
        data: {

            payment_method: "Credit Card",
            payment_details: {
                bank_name: userData.userBank,
                account_name: userData.userBankAccountName,
                account_number: userData.userBankAccountNumber

            }
        },
    });

    const responseBody = await response.json();
    expect(responseBody.message).toBe('Payment was successful');
    expect(response.status()).toBe(200);
    console.log(await response.json());
});

test('GET All categories', async ({ request }) => {

    const response = await request.get('https://api.practicesoftwaretesting.com/categories');

    expect(response.status()).toBe(200);
    console.log(await response.json());
});
