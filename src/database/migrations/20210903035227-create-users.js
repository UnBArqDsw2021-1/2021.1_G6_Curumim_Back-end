'use strict';

import User from '../../app/models/User.js';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', User);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
