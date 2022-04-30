// login.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('test login screen', () => {
    it('click login button', () => {
        cy.visit('http://localhost:3000');
        cy.get('a').contains('Login').click();
    })

    it('check login input fields', () => {
        cy.get('input').should('have.length', 2);
        cy.get('div').contains('Login');
    })

    it('check invalid username field', () => {
        cy.get('input').first().type('I am not a valid username')
        cy.get('input').eq(1).type('password');
        cy.get('div').contains('Login').click();
        cy.get('div').contains('We don’t recognize that username and password. Please try again.');
        cy.get('input').first().clear();
        cy.get('input').eq(1).clear();
    })

    it('login with invalid password', () => {
        cy.get('input').first().type('test_username_cypress');
        cy.get('input').eq(1).type('WRONG PASSWORD');
        cy.get('div').contains('Login').click();
        cy.get('div').contains('We don’t recognize that username and password. Please try again.');
        cy.get('input').first().clear();
        cy.get('input').eq(1).clear();
    })

    it('login with valid credentials and logout', () => {
        cy.get('input').first().type('test_username_cypress');
        cy.get('input').eq(1).type('test_password_cypress');
        cy.get('div').contains('Login').click();
        cy.get('div').contains('test_username_cypress');
        cy.get('div').contains('Logout').click();
        cy.get('input').should('have.length', 2);
        cy.get('div').contains('Login');
    })

    // it('logout', () => {
    //     cy.wait(3000);
    //     cy.get('div').contains('Logout').click();
    //     // cy.get('input').should('have.length', 2);
    //     // cy.get('div').contains('Login');
    // })
})