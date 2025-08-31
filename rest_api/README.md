# API de Transferências

Esta API permite registro, login, consulta de usuários e transferências de valores entre usuários. O objetivo é servir de base para estudos de testes e automação de APIs.

## Tecnologias
- Node.js
- Express
- Swagger (documentação)

## Instalação

1. Clone o repositório ou copie os arquivos para seu ambiente.
2. Instale as dependências:
   ```
npm install express swagger-ui-express
   ```

## Como rodar

1. Inicie o servidor:
   ```
node server.js
   ```
2. Acesse a documentação Swagger em: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Endpoints principais

- `POST /api/users/register` — Registro de usuário
- `POST /api/users/login` — Login de usuário
- `GET /api/users` — Listar usuários
- `POST /api/transfers` — Transferir valores

## Regras de negócio
- Login exige usuário e senha.
- Não é permitido registrar usuários duplicados.
- Transferências acima de R$ 5.000,00 só são permitidas para favorecidos.
- Banco de dados em memória (os dados são perdidos ao reiniciar o servidor).

## Estrutura de diretórios
- `controller/` — Rotas e controllers
- `service/` — Lógica de negócio
- `repository/` — Acesso a dados em memória
- `app.js` — Configuração do app Express
- `server.js` — Inicialização do servidor
- `swagger.json` — Documentação Swagger

## Testes
A API foi estruturada para facilitar testes automatizados (ex: Supertest), importando o `app.js` sem o método `listen()`.
