Feature: Carrinho

Scenario: Adicionar item ao carrinho com sucesso

Given Estou logado no sistema
And Estou na tela inicial
When Adiciono um item ao carrinho
Then O item deve aparecer no carrinho