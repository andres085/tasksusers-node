'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    
    return queryInterface.bulkInsert('Users', [{
      userName: 'user1',
      password: 'asd123456',
      email: 'user1@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userName: 'user2',
      password: 'asd123456',
      email: 'user2@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userName: 'user3',
      password: 'asd123456',
      email: 'user3@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userName: 'user4',
      password: 'asd123456',
      email: 'user4@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
