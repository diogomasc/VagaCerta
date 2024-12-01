# API - App VagaCerta

Unidade 10 - ResTIC36 - Desenvolvimento do Back-End, API, para o App VagaCerta com Node, Express e Sequelize

## Descrição do Projeto

API RESTful desenvolvida para gerenciar vagas de emprego e usuários. O sistema permite o cadastro de usuários e a publicação, atualização e busca de vagas de emprego, com funcionalidades para controlar o status das vagas (abertas/fechadas).

## Funcionalidades Principais

- Gerenciamento completo de usuários (CRUD)
- Publicação e gerenciamento de vagas de emprego
- Filtro de vagas por status (abertas/fechadas)
- Sistema de autenticação de usuários
- Persistência de dados em SQLite

## Estrutura dos Dados

### Usuários

```json
{
  "id": "Integer (Auto-incremento)",
  "name": "String (Nome do usuário)",
  "email": "String (Email único)",
  "password": "String (Senha do usuário)"
}
```

### Vagas de Emprego

```json
{
  "id": "Integer (Auto-incremento)",
  "title": "String (Título da vaga)",
  "description": "Text (Descrição detalhada)",
  "registrationDate": "Date (Data de registro)",
  "phone": "String (Telefone para contato)",
  "company": "String (Nome da empresa)",
  "status": "Boolean (true = aberta, false = fechada)"
}
```

## Bibliotecas Utilizadas

- **express**: Framework web para Node.js
- **sequelize**: ORM para banco de dados
- **sqlite3**: Banco de dados SQL leve
- **cors**: Middleware para habilitar CORS
- **nodemon**: Utilitário para desenvolvimento

## Estrutura do Projeto

```
backend/
├── config/
│ ├── database.js # Configuração do banco de dados
│ └── index.js # Exportação das configurações
├── models/
│ ├── user.js # Modelo de usuário
│ └── jobVacancy.js # Modelo de vaga
├── repository/
│ ├── user.js # Repositório de usuários
│ └── jobVacancy.js # Repositório de vagas
├── routes/
│ ├── users.js # Rotas de usuários
│ └── jobVacancies.js # Rotas de vagas
├── seed.js # Script para popular o banco de dados
└── server.js # Arquivo principal do servidor
```

## Banco de Dados

O projeto utiliza SQLite como banco de dados, com o arquivo `database.sqlite` criado automaticamente na pasta `backend/` quando o servidor é iniciado pela primeira vez.

## Executando o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/diogomasc/API-VagaCerta.git
cd API-VagaCerta
```

2. Instale as dependências:

```bash
cd backend
npm install
```

ou

```bash
cd backend
yarn install
```

3. Inicie o servidor:

```bash
npm run dev
```

ou

```bash
yarn dev
```

O servidor estará disponível em http://localhost:3000

## Executando e Testando o Backend

### Rotas de Usuários

#### 1. Criar Usuário (POST /users)

**Descrição**: Cadastra um novo usuário no sistema.

**Request Body**:

```json
{
  "name": "Diogo Mascarenhas",
  "email": "dmasc@dm.com",
  "password": "123"
}
```

**Como testar no Postman**:

- Método: POST
- URL: http://localhost:3000/users
- Body → raw → JSON
- Cole o JSON acima

#### 2. Buscar Todos os Usuários (GET /users)

**Descrição**: Retorna a lista de todos os usuários cadastrados.

**Como testar no Postman**:

- Método: GET
- URL: http://localhost:3000/users

#### 3. Buscar Usuário por ID (GET /users/:id)

**Descrição**: Retorna os dados de um usuário específico.

**Como testar no Postman**:

- Método: GET
- URL: http://localhost:3000/users/1 (onde 1 é o ID do usuário)

#### 4. Atualizar Usuário (PUT /users/:id)

**Descrição**: Atualiza os dados de um usuário existente. Permite atualização parcial ou total dos campos.

**Características**:

- Pode atualizar um ou mais campos simultaneamente
- Verifica unicidade de email
- Retorna erro se usuário não for encontrado
- Impede email duplicado

**Request Body** (Exemplos):

##### 1. Atualização completa:

```json
{
  "name": "Diogo Mascarenhas Ferreira Santos",
  "email": "dmasc@dm.com",
  "password": "123"
}
```

##### 2. Atualização parcial (apenas senha):

```json
{
  "password": "novaSenha123"
}
```

##### 3. Atualização parcial (nome e email):

```json
{
  "name": "Diogo Santos",
  "email": "diego.santos@example.com"
}
```

**Como testar no Postman**:

- Método: PUT
- URL: http://localhost:3000/users/:id
- Body → raw → JSON
- Cole o JSON do exemplo desejado

#### 5. Deletar Usuário (DELETE /users/:id)

**Descrição**: Remove um usuário do sistema.

**Como testar no Postman**:

- Método: DELETE
- URL: http://localhost:3000/users/1 (onde 1 é o ID do usuário)

### Rotas de Vagas de Emprego

#### 1. Criar Vaga (POST /jobs)

**Descrição**: Publica uma nova vaga de emprego.

**Request Body**:

```json
{
  "title": "Desenvolvedor Front-end",
  "description": "Desenvolvimento de interfaces web utilizando React.",
  "registrationDate": "2024-06-30",
  "phone": "1234-5678",
  "company": "Tech Solutions",
  "status": true
}
```

**Como testar no Postman**:

- Método: POST
- URL: http://localhost:3000/jobs
- Body → raw → JSON
- Cole o JSON acima

#### 2. Buscar Todas as Vagas (GET /jobs)

**Descrição**: Retorna todas as vagas cadastradas.

**Como testar no Postman**:

- Método: GET
- URL: http://localhost:3000/jobs

#### 3. Buscar Vaga por ID (GET /jobs/:id)

**Descrição**: Retorna os dados de uma vaga específica.

**Como testar no Postman**:

- Método: GET
- URL: http://localhost:3000/jobs/1 (onde 1 é o ID da vaga)

#### 4. Atualizar Vaga (PUT /jobs/:id)

**Descrição**: Atualiza os dados de uma vaga existente.

**Request Body**:

```json
{
  "title": "Desenvolvedor Front-end Senior",
  "description": "Desenvolvimento de interfaces web utilizando React.",
  "registrationDate": "2024-06-30",
  "phone": "1234-5678",
  "company": "Tech Solutions",
  "status": true
}
```

**Como testar no Postman**:

- Método: PUT
- URL: http://localhost:3000/jobs/1 (onde 1 é o ID da vaga)
- Body → raw → JSON
- Cole o JSON acima

#### 5. Deletar Vaga (DELETE /jobs/:id)

**Descrição**: Remove uma vaga do sistema.

**Como testar no Postman**:

- Método: DELETE
- URL: http://localhost:3000/jobs/1 (onde 1 é o ID da vaga)

#### 6. Filtrar Vagas por Status (GET /jobs/status/:status)

**Descrição**: Retorna vagas filtradas por status (abertas ou fechadas).

**Como testar no Postman**:

- Para vagas abertas:
  - Método: GET
  - URL: http://localhost:3000/jobs/status/true
- Para vagas fechadas:
  - Método: GET
  - URL: http://localhost:3000/jobs/status/false
