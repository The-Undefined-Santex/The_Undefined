const { cohortProvider } = require('../providers');

const createCohort = (cohortData) => {
  try {
    const enrolledStudent = cohortProvider.createCohort(cohortData);
    return enrolledStudent;
  } catch (error) {
    throw new Error('Error al crear la cohort');
  }
};

const getAllCohorts = () => {
  try {
    const cohorts = cohortProvider.getAllCohorts();
    return cohorts;
  } catch (error) {
    throw new Error('Error al obtener las cohortes ser');
  }
};

const getCohortById = (cohortId) => {
  try {
    const cohort = cohortProvider.getCohortById(cohortId);
    return cohort;
  } catch (error) {
    throw new Error('Error al obtener la cohorte');
  }
};

module.exports = {
  createCohort,
  getAllCohorts,
  getCohortById,
};
