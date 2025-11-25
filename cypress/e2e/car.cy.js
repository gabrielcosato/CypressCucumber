describe('Carrinho', () => {

    it('Adicionar item ao carrinho com sucesso', () =>{
        
        cy.login();
        
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click() 

        cy.get('[data-test="shopping-cart-badge"]')
            .should('be.visible')
            .and('have.text', '1')


         cy.get('[data-test="shopping-cart-link"]').click()

        cy.contains('Sauce Labs Backpack').should('be.visible')
    })
})