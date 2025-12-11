import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given ("Estou na tela de login", () =>{
    cy.visit('https://www.saucedemo.com/')
})

Given ("Estou logado no sistema", () =>{
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
})

When("Digito um username e password válidos", ()=>{
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
})

When("Digito um username e password inválidos", ()=>{
    cy.get('[data-test="username"]').type('invalido')
    cy.get('[data-test="password"]').type('invalido123')
})

And("Estou na tela inicial", () =>{
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
})

And("Clico no botão login", () =>{
    cy.get('[data-test="login-button"]').click()
})

Then("Realizo login com sucesso", () =>{
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
})

Then("Vejo uma mensagem de erro informando que as credenciais são inválidas", () =>{
      cy.get('[data-test="error"]')
            .should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
})