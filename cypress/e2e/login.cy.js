describe('Login', () => {

    it('Realizar login com sucesso', () =>{
        
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user')

        cy.get('[data-test="password"]').type('secret_sauce')

        cy.get('[data-test="login-button"]').click()

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it('Realizar login com credenciais invalidas', () => {
        
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('incorreto')

        cy.get('[data-test="password"]').type('123')

        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
            .should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    })
})