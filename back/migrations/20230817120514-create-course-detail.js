'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('courseDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      paragraph1: {
        type: Sequelize.STRING
      },
      paragraph2: {
        type: Sequelize.STRING
      },
      image1url: {
        type: Sequelize.STRING
      },
      image2url: {
        type: Sequelize.STRING
      },
      courseId: { 
        type: Sequelize.INTEGER,
        references: {
          model: 'Courses', 
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('courseDetails');
  }
};