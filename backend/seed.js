const User = require("./models/user");
const JobVacancy = require("./models/jobVacancy");

async function seedDatabase() {
  try {
    // Inserir usuários
    await User.bulkCreate([
      {
        name: "João Silva",
        email: "joao.silva@example.com",
        password: "senha123",
      },
      {
        name: "Maria Oliveira",
        email: "maria.oliveira@example.com",
        password: "senha456",
      },
      {
        name: "Carlos Pereira",
        email: "carlos.pereira@example.com",
        password: "senha789",
      },
      { name: "Administrador", email: "admin@admin.com", password: "123" },
    ]);

    // Inserir vagas de emprego
    await JobVacancy.bulkCreate([
      {
        title: "Desenvolvedor Front-end",
        description: "Desenvolvimento de interfaces web utilizando React.",
        registrationDate: new Date("2024-06-30T00:00:00.000Z"),
        phone: "1234-5678",
        company: "Tech Solutions",
        status: true,
      },
      {
        title: "Desenvolvedor Back-end",
        description: "Desenvolvimento de APIs RESTful utilizando Node.js.",
        registrationDate: new Date("2024-06-28T00:00:00.000Z"),
        phone: "8765-4321",
        company: "Innovative Tech",
        status: false,
      },
      {
        title: "Analista de Sistemas",
        description: "Análise e levantamento de requisitos de sistemas.",
        registrationDate: new Date("2024-06-25T00:00:00.000Z"),
        phone: "9988-7766",
        company: "System Analysts Inc.",
        status: true,
      },
      {
        title: "Engenheiro de Software",
        description: "Desenvolvimento de software em diversas linguagens.",
        registrationDate: new Date("2024-06-20T00:00:00.000Z"),
        phone: "5544-3322",
        company: "Global Software Solutions",
        status: true,
      },
      {
        title: "Suporte Técnico",
        description: "Atendimento e suporte a clientes.",
        registrationDate: new Date("2024-06-15T00:00:00.000Z"),
        phone: "4433-2211",
        company: "Customer Support Ltd.",
        status: false,
      },
      {
        title: "Gerente de Projetos",
        description: "Gestão e coordenação de projetos de TI.",
        registrationDate: new Date("2024-06-10T00:00:00.000Z"),
        phone: "1122-3344",
        company: "Project Managers Corp.",
        status: false,
      },
      {
        title: "Designer UX/UI",
        description: "Criação de interfaces e experiências de usuário.",
        registrationDate: new Date("2024-06-05T00:00:00.000Z"),
        phone: "6677-8899",
        company: "Creative Designs",
        status: true,
      },
      {
        title: "Analista de Dados",
        description: "Análise e interpretação de dados empresariais.",
        registrationDate: new Date("2024-06-01T00:00:00.000Z"),
        phone: "5566-7788",
        company: "Data Analysts LLC",
        status: true,
      },
    ]);

    console.log("Dados iniciais inseridos com sucesso!");
  } catch (error) {
    console.error("Erro ao inserir dados iniciais:", error);
  }
}

module.exports = seedDatabase;
