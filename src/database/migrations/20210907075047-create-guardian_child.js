'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('guardian_child', { 
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      fk_idGuardian: {
        type: Sequelize.INTEGER,
        references: { model: 'guardians', key: 'id'},
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE',
      },
      fk_idChild: {
        type: Sequelize.INTEGER,
        references: { model: 'children', key: 'id'},
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE',
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
    return queryInterface.dropTable('guardian_child');
  }
};
