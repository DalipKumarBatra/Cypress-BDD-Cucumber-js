import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps';
import login from '../pages/LoginPage';

Given('I navigate to Login page', () => {
    login.enterUrl();
});

When('I entered valid credentials', (datatable) => {
    datatable.hashes().forEach(element => {
        login.enterUserNameAndPasswords(element.email, element.password);
    });
});

And('Click the signin button', () => {
    login.clickSubmitButton();
});

Then('User logged in successfully', () => {
    login.verifyPageTitle();
});