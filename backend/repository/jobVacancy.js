const JobVacancy = require("../models/jobVacancy");

class JobVacancyRepository {
  async create(
    title,
    description,
    registrationDate,
    phone,
    company,
    status = true
  ) {
    const jobVacancy = await JobVacancy.create({
      title,
      description,
      registrationDate,
      phone,
      company,
      status,
    });
    return jobVacancy;
  }

  async findById(id) {
    const jobVacancy = await JobVacancy.findByPk(id);
    return jobVacancy;
  }

  async findAll() {
    const jobVacancies = await JobVacancy.findAll();
    return jobVacancies;
  }

  async update(
    id,
    title,
    description,
    registrationDate,
    phone,
    company,
    status
  ) {
    const jobVacancy = await this.findById(id);
    if (!jobVacancy) {
      throw new Error("Vaga de emprego não encontrada");
    }
    await jobVacancy.update({
      title,
      description,
      registrationDate,
      phone,
      company,
      status,
    });
    return jobVacancy;
  }

  async delete(id) {
    const jobVacancy = await this.findById(id);
    if (!jobVacancy) {
      throw new Error("Vaga de emprego não encontrada");
    }
    await jobVacancy.destroy();
  }

  async findByStatus(status) {
    const jobVacancies = await JobVacancy.findAll({
      where: { status },
    });
    return jobVacancies;
  }
}

module.exports = new JobVacancyRepository();
