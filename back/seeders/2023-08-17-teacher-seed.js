'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Teachers', [
      {
        firstName: 'John',
        lastName: 'Doe',
        document_number: 987654321,
        id_contact_information: 1,
        id_user: 1,
        specialty: 'Computer Science',
        birthDate: '1990-05-15',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        document_number: 987654321,
        id_contact_information: 2,
        id_user: 2,
        specialty: 'Mathematics',
        birthDate: '1985-08-22',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Michael',
        lastName: 'Johnson',
        document_number: 987654321,
        id_contact_information: 3,
        id_user: 3,
        specialty: 'Physics',
        birthDate: '1988-02-10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Teachers', null, {});
  }
};
