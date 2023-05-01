# README

Este é um projeto desenvolvido com Node.js e o framework Express.js para gerenciamento de filmes.

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```
npm install
```

## Configuração

Antes de executar o projeto, você precisará configurar algumas variáveis de ambiente em um arquivo `.env`. Para isso, renomeie o arquivo `.env.example` para `.env` na raiz do projeto e adicione as seguintes variáveis:

```
DB_USER=
DB_PASS=
```

Altere os valores acima para o seu usuário e sua senha do MongoDB

Altera a porta no arquivo default.ts que está na pasta /config

```
port: 3000
```
Altere o valor de `PORT` para a porta que deseja utilizar para executar o servidor. 

## Execução

Para executar o projeto, execute o seguinte comando:

```
npm run dev
```

O servidor será iniciado na porta configurada na variável de ambiente `PORT`.

## Rotas

As rotas disponíveis são:

- `POST /movie`: cadastra um novo filme. O corpo da requisição deve conter os campos `title`, `rating`, `description`, `director`, `stars` e `poster`.
- `GET /movie/:id`: busca um filme pelo seu ID.
- `GET /movies`: lista todos os filmes cadastrados.
- `DELETE /movie/:id`: exclui um filme existente pelo seu ID.
- `PUT /movie/:id`: atualiza um filme existente pelo seu ID. O corpo da requisição deve conter os campos que deseja atualizar.