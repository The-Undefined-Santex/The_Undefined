'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Teachers', [
      {
        dni: 123456789,
        firstName: 'John',
        lastName: 'Doe',
        birth_date: '2000-01-01',
        contactInformationId: 4,
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dni: 987654321,
        firstName: 'Jane',
        lastName: 'Smith',
        birth_date: '2000-01-01',
        contactInformationId: 5,
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dni: 456789123,
        firstName: 'Michael',
        lastName: 'Johnson',
        birth_date: '2000-01-01',
        contactInformationId: 6,
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // ... Agregar más datos aquí ...
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Teachers', null, {});
  }
};
