'use strict';
const bcrypt = require('bcrypt');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {
      User.hasMany(models.Task, {
        foreignKey: "userId",
        as: "tasks",
      });
    }
  }
  User.init({
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeSave(async (user, options) => {
       const hashedPassword = await bcrypt.hash(user.password, 10);
       user.password = hashedPassword;
  });

  return User;
};

