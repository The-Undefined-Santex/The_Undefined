'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('CohortStudents', [
      {
       cohortId: 1,
       studentId: 1,
       createdAt: new Date(),
       updatedAt: new Date(),
      },
      {
        cohortId: 1,
        studentId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        cohortId: 1,
        studentId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        cohortId: 2,
        studentId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        cohortId: 2,
        studentId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        cohortId: 3,
        studentId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
       },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CohortStudents', null, {});
  },
};
