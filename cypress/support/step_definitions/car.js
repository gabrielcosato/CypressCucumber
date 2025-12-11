import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'



When("Adiciono um item ao carrinho", ()=>{
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click() 

        cy.get('[data-test="shopping-cart-badge"]')
            .should('be.visible')
            .and('have.text', '1')


         cy.get('[data-test="shopping-cart-link"]').click()
})




Then("O item deve aparecer no carrinho", () =>{
     cy.contains('Sauce Labs Backpack').should('be.visible')
})