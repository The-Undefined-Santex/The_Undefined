'use strict';
const { hashPassword } = require('../middleware/password')
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const passwordHash = await bcrypt.hash('password123', 10); // Cambiar a la contraseña deseada

    await queryInterface.bulkInsert('Users', [
      {
        userName: 'alumno1@gmail.com',
        password: await hashPassword('123456789'),
        rol: "Student",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'alumno2@gmail.com',
        rol: "Student",
        password: await hashPassword('987654321'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'alumno3@gmail.com',
        password: await hashPassword('456789123'),
        rol: "Student",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'admin@gmail.com',
        password: await hashPassword('66666666'),
        rol: "Admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'teacher1@gmail.com',
        password: await hashPassword('123456789'),
        rol: "Teacher",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'teacher2@gmail.com',
        password: await hashPassword('987654321'),
        rol: "Teacher",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'teacher3@gmail.com',
        password: await hashPassword('456789123'),
        rol: "Teacher",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
