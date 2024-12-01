const express = require("express");
const router = express.Router();
const JobVacancyRepository = require("../repository/jobVacancy");

// Obter todas as vagas de emprego
router.get("/", async (_, res) => {
  try {
    const jobVacancies = await JobVacancyRepository.findAll();
    res.json(jobVacancies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obter vaga de emprego pelo ID
router.get("/:id", async (req, res) => {
  try {
    const jobVacancy = await JobVacancyRepository.findById(req.params.id);
    if (!jobVacancy) {
      return res.status(404).json({ error: "Vaga de emprego não encontrada" });
    }
    res.json(jobVacancy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obter vagas de emprego pelo status
router.get("/status/:status", async (req, res) => {
  try {
    const status = req.params.status === "true";
    const jobVacancies = await JobVacancyRepository.findByStatus(status);
    res.json(jobVacancies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Criar uma nova vaga de emprego
router.post("/", async (req, res) => {
  try {
    const jobVacancy = await JobVacancyRepository.create(
      req.body.title,
      req.body.description,
      new Date(req.body.registrationDate),
      req.body.phone,
      req.body.company,
      req.body.status
    );
    res.status(201).json(jobVacancy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Atualizar uma vaga de emprego
router.put("/:id", async (req, res) => {
  try {
    const jobVacancy = await JobVacancyRepository.update(
      req.params.id,
      req.body.title,
      req.body.description,
      new Date(req.body.registrationDate),
      req.body.phone,
      req.body.company,
      req.body.status
    );
    res.json(jobVacancy);
  } catch (error) {
    if (error.message === "Vaga de emprego não encontrada") {
      return res.status(404).json({ error: error.message });
    }
    res.status(500).json({ error: error.message });
  }
});

// Deletar uma vaga de emprego
router.delete("/:id", async (req, res) => {
  try {
    await JobVacancyRepository.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    if (error.message === "Vaga de emprego não encontrada") {
      return res.status(404).json({ error: error.message });
    }
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
