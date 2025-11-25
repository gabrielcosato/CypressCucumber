// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
});

Cypress.Commands.add('car', () => {

    cy.login()
    
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click() 

    cy.get('[data-test="shopping-cart-badge"]')
        .should('be.visible')
        .and('have.text', '1')


    cy.get('[data-test="shopping-cart-link"]').click()

    cy.contains('Sauce Labs Backpack').should('be.visible')

})