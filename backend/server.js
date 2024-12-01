const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize } = require("./config");
const seedDatabase = require("./seed");

const app = express();

// Middleware para habilitar CORS
app.use(cors());
// Middleware para fazer o parse do corpo do request em JSON
app.use(bodyParser.json());

// Sincronizar banco de dados e popular com dados iniciais
sequelize
  .sync()
  .then(async () => {
    await seedDatabase(); // Popula o banco de dados com dados iniciais
    process.stdout.write("\x1Bc"); // Limpa o console
    console.log("Banco de dados sincronizado com sucesso!");
    console.log("\nBanco de dados populado com sucesso!");
    console.log("\nIndex:\n\nhttp://localhost:3000/");
    console.log("\nEndpoints:\n");
    console.log("http://localhost:3000/users");
    console.log("http://localhost:3000/jobs");
    console.log(
      "\nPara mais informações, acesse a documentação do projeto:\nhttps://github.com/diogomasc/VagaCerta/blob/main/backend/README.md"
    );
    console.log(
      '\nAo iniciar o servidor do Front-End do App VagaCerta na tela de login, use o usuário "Administrador" de e-mail "admin@admin.com" com senha: "123"\n'
    );
  })
  .catch((err) => {
    console.error("Erro ao sincronizar o banco de dados:", err);
  });

// Rotas para usuários e vagas de emprego
const userRouter = require("./routes/users");
const jobRouter = require("./routes/jobVacancies");
app.use("/users", userRouter);
app.use("/jobs", jobRouter);

// Iniciar o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
