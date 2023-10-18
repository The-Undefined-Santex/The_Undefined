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

const updateCohort = (cohortId, cohortData) => {
  try {
    const updatedCohort = cohortProvider.updateCohort(cohortId, cohortData);
    return updatedCohort;
  } catch (error) {
    throw new Error('Error al actualizar la cohorte');
  }
};

const deleteCohort = (cohortId) => {
  try {
    const deletedCohort = cohortProvider.deleteCohort(cohortId);
    return deletedCohort;
  } catch (error) {
    throw new Error('Error al eliminar la cohorte');
  }
};

module.exports = {
  createCohort,
  getAllCohorts,
  getCohortById,
  updateCohort,
  deleteCohort,
};
