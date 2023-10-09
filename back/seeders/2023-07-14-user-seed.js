'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const passwordHash = await bcrypt.hash('password123', 10); // Cambiar a la contraseña deseada

    await queryInterface.bulkInsert('Users', [
      {
        userName: 'alumno1@gmail.com',
        password: passwordHash,
        rol: "STUDENT",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'alumno2@gmail.com',
        rol: "STUDENT",
        password: passwordHash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'alumno3@gmail.com',
        password: passwordHash,
        rol: "STUDENT",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'alumno4@gmail.com',
        password: passwordHash,
        rol: "STUDENT",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'alumno5@gmail.com',
        password: passwordHash,
        rol: "STUDENT",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'alumno6@gmail.com',
        password: passwordHash,
        rol: "STUDENT",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'alumno7@gmail.com',
        password: passwordHash,
        rol: "STUDENT",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'alumno8@gmail.com',
        password: passwordHash,
        rol: "STUDENT",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'alumno9@gmail.com',
        password: passwordHash,
        rol: "STUDENT",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'admin@gmail.com',
        password: passwordHash,
        rol: "ADMI",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'teacher1@gmail.com',
        password: passwordHash,
        rol: "TEACHER",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'teacher2@gmail.com',
        password: passwordHash,
        rol: "TEACHER",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'teacher3@gmail.com',
        password: passwordHash,
        rol: "TEACHER",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
