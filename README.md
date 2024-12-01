# Aplicativo VagaCerta

## Visão Geral

O projeto VagaCerta foi desenvolvido como parte da Unidade 10 do curso ResTIC36, focado na comunicação entre backend e frontend. Trata-se de uma aplicação full-stack destinada ao gerenciamento de vagas de emprego. A API backend, crucial para o funcionamento do sistema, foi construída utilizando Node.js, Express, e Sequelize, garantindo um ambiente robusto e eficiente para a manipulação dos dados e interações do aplicativo.

## Tecnologias Utilizadas

### Backend

- **Node.js**: Ambiente de execução JavaScript
- **Express**: Framework web para Node.js
- **Sequelize**: ORM para gerenciamento de banco de dados
- **SQLite**: Banco de dados SQL leve
- **CORS**: Middleware para habilitar CORS
- **Nodemon**: Utilitário para reinício automático do servidor durante o desenvolvimento

### Frontend

- **React Native**: Framework para construir aplicativos nativos usando React
- **Expo**: Plataforma para aplicativos universais em React
- **TypeScript**: Superconjunto tipado de JavaScript

## Principais Funcionalidades

- Gerenciamento de usuários (operações CRUD)
- Gerenciamento de vagas de trabalho
- Filtragem de vagas por status (aberta/fechada)
- Autenticação de usuários
- Persistência de dados com SQLite

## Estrutura do Projeto

- **backend/**: Contém o código e configurações da API
- **frontend/**: Contém o código da aplicação React Native

## Como Testar o Aplicativo

### Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado em sua máquina.
- **Expo CLI**: Instale globalmente através do comando: `npm install -g expo-cli`
- **Git**: Necessário para clonar o repositório.
- **Yarn**: Se ainda não tiver o Yarn instalado, você pode instalá-lo globalmente com o comando: `npm install -g yarn`

### Passos para Testar

1. **Clone o repositório:**

```sh
git clone https://github.com/diogomasc/VagaCerta.git
cd VagaCerta
```

2. **Configure o Backend:**

   - Acesse a pasta do backend:

     ```sh
     cd backend
     ```

   - Instale as dependências:

     ```sh
     npm install
     ```

   - Inicie o servidor:
     ```sh
     npm start
     ```

3. **Configure o Frontend:**

   - Acesse a pasta do frontend:

     ```sh
     cd ../frontend
     ```

   - Instale as dependências:

     ```sh
     npm install
     ```

   - Inicie o servidor de desenvolvimento:
     ```sh
     npm start
     ```

### Executando e Testando o Aplicativo

#### Usando o Expo para Ler o QR Code:

- O Expo CLI gerará um QR Code.
- Abra o aplicativo Expo Go no seu dispositivo móvel.
- Escaneie o QR Code exibido no terminal ou na página web que abrir.
- O aplicativo será carregado automaticamente no seu dispositivo.

#### Usando o Emulador Android:

- Certifique-se de que o Android Studio esteja instalado e configurado.
- No Android Studio, abra o AVD Manager e inicie um dispositivo virtual (emulador).
- Com o emulador em execução, execute o comando `adb devices` para verificar se o emulador foi detectado corretamente.
- Inicie o aplicativo no emulador com o comando: `npx expo start --android` ou digite `A` no terminal.
- O aplicativo será compilado e executado no emulador Android.

#### Parar a Execução:

- Pressione `Ctrl + C` no terminal.
