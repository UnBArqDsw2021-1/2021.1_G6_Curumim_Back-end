'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('presences', { 
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      fk_idChild: {
        type: Sequelize.INTEGER,
        references: { model: 'children', key: 'id'},
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE',
      },
      fk_idClass: {
        type: Sequelize.INTEGER,
        references: { model: 'classes', key: 'id'},
        onUpdate: 'CASCADE', 
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('presences');
  }
};
