'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('children', { 
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      fk_idClass: {
        type: Sequelize.INTEGER,
        references: { model: 'classes', key: 'id'},
        onUpdate: 'CASCADE', 
        onDelete: 'SET NULL',
      },
      birthday: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      registration: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('children');
  }
};
