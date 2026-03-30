# QA Automation CI/CD

Projeto de automação de testes com foco em API utilizando Cypress e integração CI/CD com GitHub Actions.

## Objetivo
Demonstrar uma estrutura simples e organizada de automação de testes, priorizando testes de API para garantir velocidade, estabilidade e fácil manutenção.

## Tecnologias
- Cypress
- Node.js
- GitHub Actions
- JSONPlaceholder

## Cenários cobertos
- Listar usuários
- Buscar usuário por ID
- Criar usuário
- Atualizar usuário
- Deletar usuário

## Variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto com as variáveis:
CYPRESS_BASE_URL=
CYPRESS_API_TOKEN=

## Como instalar
```bash
npm install