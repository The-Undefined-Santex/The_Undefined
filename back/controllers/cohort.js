const { cohortService } = require('../services');

const createCohort = async (req, res) => {
  const dataCohort = req.body;

  try {
    const cohort = await cohortService.createCohort(dataCohort);
    return res.status(201).json({ message: 'Cohort creada satisfactioriamente', cohort });
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear la cohort', error: error.message });
  }
};

const getAllCohorts = async (req, res) => {
  try {
    const cohorts = await cohortService.getAllCohorts();
    return res.status(200).json(cohorts);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener las cohortes' });
  }
};

const getCohortById = async (req, res) => {
  const cohortId = req.params.id;
  try {
    const cohort = await cohortService.getCohortById(cohortId);
    return res.status(200).json(cohort);
  } catch (error) {
    return res.status(404).json({ error: 'Cohorte no encontrada' });
  }
};

const updateCohort = async (req, res) => {
  const cohortId = req.params.id;
  const dataCohort = req.body;
  try {
    const cohort = await cohortService.updateCohort(cohortId, dataCohort);
    return res.status(200).json(cohort);
  } catch (error) {
    return res.status(404).json({ error: 'Cohorte no encontrada' });
  }
};

const deleteCohort = async (req, res) => {
  const cohortId = req.params.id;
  try {
    const cohort = await cohortService.deleteCohort(cohortId);
    return res.status(200).json(cohort);
  } catch (error) {
    return res.status(404).json({ error: 'Cohorte no encontrada' });
  }
};

module.exports = {
  createCohort,
  getAllCohorts,
  getCohortById,
  updateCohort,
  deleteCohort,
};
