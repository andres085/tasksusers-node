'use strict';
const models = require('../models');
const User = models.User;

module.exports = {
  
  async up (queryInterface, Sequelize) {
    const users = await User.findAll();
     return queryInterface.bulkInsert('Tasks', [{
      title: 'Task1',
      userId: users[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'Task2',
      userId: users[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'Task3',
      userId: users[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'Task4',
      userId: users[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
