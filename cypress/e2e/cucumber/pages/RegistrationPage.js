import Routes from '../../routes/Routes';

class RegistrationPage {
    enterUrl() {
        cy.visit(Routes.setRegistrationRoute());
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

const Register = new RegistrationPage();
export default RegistrationPage;