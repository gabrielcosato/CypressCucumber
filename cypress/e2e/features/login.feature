Feature: Login

Scenario: Login com sucesso

Given Estou na tela de login
When Digito um username e password válidos 
And Clico no botão login
Then Realizo login com sucesso

Scenario: Login com credenciais inválidas

Given Estou na tela de login
When Digito um username e password inválidos
And Clico no botão login
Then Vejo uma mensagem de erro informando que as credenciais são inválidas