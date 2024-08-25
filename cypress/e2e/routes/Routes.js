export class Routes {
    setLoginRoute() {
        cy.intercept({
            method:'GET',
            url: '*/login'
        }).as('loginRequest');       
    };

    setRegistrationRoute() {
        cy.intercept({
            method:'GET',
            url:'*/register'
        }).as('registrationRoute');
    }
}