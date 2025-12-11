Feature: Checkout

Scenario: Realizar o checkout com sucesso

Given Estou logado no sistema
And Estou na tela inicial
And Adiciono um item ao carrinho
When Clico no botão Checkout
And Preencho as informações obrigatórias
And Verifico a revisão do checkout
Then Finalizo o meu checkout

Scenario Outline: Tentativa de realizar checkout com informações incompletas
  Given Estou logado no sistema
  And Estou na tela inicial
  And Adiciono um item ao carrinho
  When Clico no botão Checkout
  And Preencho o campo "<field>" com o valor "<value>"
  And Preencho os outros campos com dados corretos
  And Clico no botão Continue
  Then Será exibida a mensagem de erro "<error_message>"

  Examples:
      | field       | value   | error_message                  |
      | First Name  | [VAZIO] | Error: First Name is required  |
      | Last Name   | [VAZIO] | Error: Last Name is required   |
      | Postal Code | [VAZIO] | Error: Postal Code is required |