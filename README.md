# Projeto Koin - Testes de API com Cypress
Este projeto foi criado para automatizar testes de API utilizando o Cypress, com foco nos endpoints do JSONPlaceholder. O objetivo é cobrir operações de criação, atualização e consulta de dados, além de gerar relatórios detalhados dos resultados dos testes.

## Índice
* Instalação
* Estrutura do Projeto
* Scripts Disponíveis
* Executando os Testes
    * Localmente
    * Na Pipeline do GitHub Actions
* Gerando Relatórios
* Configuração do GitHub Actions

## Instalação
Antes de iniciar, certifique-se de ter o Node.js e o pnpm instalados.

1. Clone o repositório:
````
git clone https://github.com/seu-usuario/projeto-koin.git
cd projeto-koin
````

2. Instale as dependências:
````
pnpm install
````

## Estrutura do Projeto

Abaixo está uma visão geral da estrutura do projeto:

````
projeto_koin/
├── .github/
│   └── workflows/
│       └── cypress-tests.yml         # Configuração do GitHub Actions para CI/CD
├── cypress/
│   ├── e2e/
│   │   └── apiTests.cy.js            # Testes de API
│   ├── fixtures/
│   │   └── data.json                 # Dados de exemplo para os testes
│   ├── reports/                      # Relatórios de teste gerados pelo Mochawesome
│   └── support/
│       └── commands.js               # Comandos customizados do Cypress
├── cypress.config.js                 # Configuração do Cypress
├── package.json                      # Configuração do npm/pnpm
└── README.md                         # Documentação do projeto
````

## Scripts Disponíveis
No arquivo package.json, foram configurados scripts para facilitar a execução dos testes e geração dos relatórios.

* ```pnpm run test:``` Executa todos os testes em modo headless.
* ```pnpm run test:open:``` Abre a interface gráfica do Cypress para execução interativa dos testes.
* ```pnpm run test:ci:``` Executa os testes em modo headless, ideal para pipelines CI/CD.
* ```pnpm run report:merge:``` Mescla todos os relatórios .json gerados pelo Mochawesome em um único report.json.
* ```pnpm run report:generate:``` Gera um relatório consolidado em HTML a partir do report.json.

## Executando os Testes

### Executando os Testes Localmente
1. Para rodar os testes em modo headless (sem interface gráfica):
````
pnpm run test
````

2. Para abrir a interface do Cypress e rodar os testes de forma interativa:
````
pnpm run test:open
````

3. Para rodar os testes simulando um ambiente de CI/CD:
````
pnpm run test:ci
````

### Executando os Testes na Pipeline do GitHub Actions
A pipeline de CI/CD no GitHub Actions está configurada para rodar automaticamente os testes em cada push ou pull request na branch main. O workflow executa os testes em modo headless e gera um relatório consolidado que é salvo como artefato no GitHub.

## Gerando Relatórios
Após rodar os testes, você pode gerar um relatório consolidado em HTML para visualizar os resultados.

1. Mesclar os relatórios (caso existam múltiplos arquivos .json):
````
pnpm run report:merge
````

2. Gerar o relatório final em HTML:
````
pnpm run report:generate
````

O relatório HTML final estará disponível em cypress/reports/report.html. Para abrir no navegador:
````
open cypress/reports/report.html
````


## Configuração do GitHub Actions
O GitHub Actions está configurado no arquivo .github/workflows/cypress-tests.yml. Ele executa os seguintes passos:

1. Faz o checkout do repositório.
2. Instala o Node.js e pnpm.
3. Instala as dependências do projeto.
4. Executa os testes em modo headless com pnpm run test:ci.
5. Mescla os relatórios e gera o arquivo final em HTML.
6. Faz upload do relatório HTML como um artefato, permitindo que você visualize os resultados diretamente na interface do GitHub.

## Acessando o Relatório no GitHub
Após a execução da pipeline, o relatório será disponibilizado como um artefato na aba de Actions do GitHub. Você pode fazer o download e visualizar o relatório HTML dos testes.