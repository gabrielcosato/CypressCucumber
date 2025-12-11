import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

// 1. Variável global do arquivo para guardar qual campo estamos testando agora
let campoEmTeste = "";

Given ("Estou logado no sistema", () =>{
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
})

And("Estou na tela inicial", () =>{
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
})



And("Adiciono um item ao carrinho", () =>{
     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click() 

        cy.get('[data-test="shopping-cart-badge"]')
            .should('be.visible')
            .and('have.text', '1')


         cy.get('[data-test="shopping-cart-link"]').click()

         cy.contains('Sauce Labs Backpack').should('be.visible')
})

When("Clico no botão Checkout", () =>{
    cy.get('[data-test="checkout"]').click()
})

// Step Genérico para preencher UM campo específico (vazio ou não)
When(/^Preencho o campo "([^"]*)" com o valor "([^"]*)"$/, (field, value) => {
    
    // 2. SALVAMOS O NOME DO CAMPO NA VARIÁVEL GLOBAL
    campoEmTeste = field; 
    console.log(`Debug - Campo Atual: ${campoEmTeste}, Valor: ${value}`);

    const fieldMap = {
        "First Name": '[data-test="firstName"]',
        "Last Name": '[data-test="lastName"]',
        "Postal Code": '[data-test="postalCode"]',
    };

    const selector = fieldMap[field];

    if (!selector) {
        throw new Error(`Campo desconhecido: ${field}`);
    }

    // Limpa o campo sempre
    cy.get(selector).clear();

    // Se for a flag [VAZIO], paramos aqui e não digitamos nada
    if (value === '[VAZIO]') {
        cy.log(`Deixando o campo ${field} vazio propositalmente.`);
        return; 
    }

    // Se tiver valor, digita
    cy.get(selector).type(value);
});

// Step Inteligente: Preenche o RESTO, ignorando o campo atual
And("Preencho os outros campos com dados corretos", () => {
    
    cy.contains('Checkout: Your Information').should('be.visible');

    // A lógica aqui agora funciona porque 'campoEmTeste' tem valor!

    if (campoEmTeste !== "First Name") {
        cy.get('[data-test="firstName"]').clear().type("John");
    }

    if (campoEmTeste !== "Last Name") {
        cy.get('[data-test="lastName"]').clear().type("Doe");
    }

    if (campoEmTeste !== "Postal Code") {
        cy.get('[data-test="postalCode"]').clear().type("12345");
    }
});

And("Clico no botão Continue", () =>{

        cy.get('[data-test="continue"]').click()
})

And("Preencho as informações obrigatórias", () =>{
    cy.contains('Checkout: Your Information').should('be.visible')

        cy.get('[data-test="firstName"]').type('Fulano')

        cy.get('[data-test="lastName"]').type('De Tal')
        
        cy.get('[data-test="postalCode"]').type('123')

        cy.get('[data-test="continue"]').click()
})

And("Verifico a revisão do checkout", () =>{
   cy.contains('Checkout: Overview').should('be.visible')
})

Then("Finalizo o meu checkout", () =>{
   cy.get('[data-test="finish"]').click()
        
    cy.contains('Thank you for your order!').should('be.visible')
})

Then(/^Será exibida a mensagem de erro "([^"]*)"$/, (expectedMessage) => {
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain.text", expectedMessage);
});