const { Cohort } = require('../models');
const { Course } = require('../models');
const { Student } = require('../models');
const { Teacher } = require('../models');

const createCohort = async (cohort) => {
  try {
    const enrolledStudent = await Cohort.create(cohort);
    return enrolledStudent;
  } catch (error) {
    console.log(error);
    throw new Error('Error crear la cohort');
  }
};

const getAllCohorts = async () => {
  try {
    const cohorts = await Cohort.findAll({
      include: [
        {
          model: Teacher,
        },
        {
          model: Course,
        },
        {
          model: Student,
        },
      ],
    });
    return cohorts;
  } catch (error) {
    throw new Error('Error al obtener las cohortes');
  }
};

const getCohortById = async (cohortId) => {
  try {
    const cohort = await Cohort.findByPk(cohortId, {
      include: [
        {
          model: Teacher,
        },
        {
          model: Course,
        },
        {
          model: Student,
        },
      ],
    });

    if (cohort === null) {
      throw new Error('Cohort no encontrada');
    }
    return cohort;
  } catch (error) {
    throw new Error('Error al obtener la cohorte');
  }
};

const updateCohort = async (cohortId, cohortData) => {
  try {
    const updatedCohortCount = await Cohort.update(cohortData, {
      where: {
        id: cohortId,
      },
    });
    if (updatedCohortCount === 0) {
      throw new Error('Cohort no encontrada');
    }
    return updatedCohortCount;
  } catch (error) {
    throw new Error('Error al actualizar la cohorte');
  }
};

const deleteCohort = async (cohortId) => {
  try {
    const deletedCohortCount = await Cohort.destroy({
      where: {
        id: cohortId,
      },
    });
    if (deletedCohortCount === 0) {
      throw new Error('Cohort no encontrada');
    }
    return deletedCohortCount;
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
