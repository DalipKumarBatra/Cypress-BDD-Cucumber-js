import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import login from '../pages/LoginPage';

let testData = null;

before(() => {
    cy.fixture('userINfo').then((userDetails) => {
        testData = userDetails;
    });
});

Given('Navigate to User registration page', () => {
    login.enterUrl();
});

When('Enter Valid Registrateion form', (datatable) => {
    datatable.hashes().forEach(element => {
        login.enterUserNameAndPasswords(element.email, element.password);
    });
});

And('Click Continue Registration button', (datatable) => {
    datatable.hashes().forEach(element => {
        login.enterUserNameAndPasswords(element.email, element.password);
    });
});

Then('New user registred successfully', () => {
    login.verifyPageTitle();
});