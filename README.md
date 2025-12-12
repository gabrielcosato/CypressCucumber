# Projeto de Testes com Cypress e Cucumber

Este projeto demonstra como configurar e executar testes automatizados utilizando Cypress com Cucumber para BDD (Behavior-Driven Development).

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte software instalado em sua máquina:

*   [Node.js](https://nodejs.org/) (versão 16 ou superior)
*   [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

## Instalação

1.  Clone este repositório para sua máquina local.
2.  Navegue até o diretório raiz do projeto.
3.  Execute o seguinte comando para instalar as dependências do projeto:

    ```bash
    npm install
    ```

## Configuração

O arquivo de configuração principal do Cypress é o `cypress.config.js`. Neste projeto, ele está configurado para:

*   Reconhecer arquivos `.feature` como arquivos de especificação de teste.
*   Utilizar o pré-processador do Cucumber para interpretar os arquivos `.feature`.

```javascript
const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
```

O arquivo `jsconfig.json` está configurado para auxiliar o VSCode a reconhecer os comandos do Cypress e o autocomplete.

```json
{
    "include": ["./node_modules/cypress", "cypress/**/*.js"]
}
```

## Executando os Testes

Para executar os testes, você pode usar o seguinte comando, que abrirá a interface do Cypress Test Runner:

```bash
npx cypress open
```

Dentro do Test Runner, você pode selecionar o navegador e o arquivo `.feature` que deseja executar.

Para executar os testes em modo headless (sem interface gráfica), utilize o comando:

```bash
npx cypress run
```

## Estrutura do Projeto

A estrutura de pastas do projeto está organizada da seguinte forma:

```
/cypress
|-- /e2e
|   |-- /features       # Arquivos .feature com os cenários de teste
|       |-- car.feature
|       |-- checkout.feature
|       |-- login.feature
|-- /fixtures           # Dados de massa para os testes
|   |-- example.json
|-- /support
|   |-- /step_definitions # Arquivos .js com a implementação dos steps do Cucumber
|   |   |-- car.js
|   |   |-- checkout.js
|   |   |-- login.js
|   |-- commands.js       # Comandos customizados do Cypress
|   |-- e2e.js            # Configurações de suporte para os testes e2e
/cypress.config.js      # Arquivo de configuração do Cypress
/package.json           # Dependências e scripts do projeto
/README.md              # Este arquivo
```
