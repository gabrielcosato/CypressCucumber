describe('Checkout', () => {

    it('Realizar checkout com sucesso', () =>{
        
        cy.car()

        cy.get('[data-test="checkout"]').click()

        cy.contains('Checkout: Your Information').should('be.visible')

        cy.get('[data-test="firstName"]').type('Fulano')

        cy.get('[data-test="lastName"]').type('De Tal')
        
        cy.get('[data-test="postalCode"]').type('123')

        cy.get('[data-test="continue"]').click()
        
        cy.contains('Checkout: Overview').should('be.visible')

        cy.get('[data-test="finish"]').click()
        
        cy.contains('Thank you for your order!').should('be.visible')
    })
})