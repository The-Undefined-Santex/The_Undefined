'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ContactInformations', [
      {
        phone_number: '123456789',
        country: 'Country 1',
        state: 'State 1',
        address: 'Address 1',
        email: 'email1@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        phone_number: '987654321',
        country: 'Country 2',
        state: 'State 2',
        address: 'Address 2',
        email: 'email2@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
       {
        phone_number: '237654321',
        country: 'Country 3',
        state: 'State 3',
        address: 'Address 3',
        email: 'email2@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        phone_number: '417654321',
        country: 'Country 4',
        state: 'State 4',
        address: 'Address 4',
        email: 'email4@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        phone_number: '567654321',
        country: 'Country 5',
        state: 'State 5',
        address: 'Address 5',
        email: 'email5@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        phone_number: '767654321',
        country: 'Country 6',
        state: 'State 6',
        address: 'Address 6',
        email: 'email6@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        phone_number: '167654321',
        country: 'Country 7',
        state: 'State 7',
        address: 'Address 7',
        email: 'email7@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        phone_number: '267654321',
        country: 'Country 8',
        state: 'State 8',
        address: 'Address 8',
        email: 'email8@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        phone_number: '367654321',
        country: 'Country 9',
        state: 'State 9',
        address: 'Address 9',
        email: 'email9@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ContactInformations', null, {});
  }
};
