 class LoginPage {
    enterUrl() {
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    }

    enterUserNameAndPasswords() {
        cy.get('#input-email').type("test@test.com");
        cy.get('#input-password').type("testing");
    }

    clickSubmitButton() {
        cy.get('input[type="submit"]').click();
    }

    verifyPageTitle() {
        //return cy.title().contains('required');
        return cy.title().should('eq', 'Search - ');
    }
 }

 const login = new LoginPage();
 export default login;