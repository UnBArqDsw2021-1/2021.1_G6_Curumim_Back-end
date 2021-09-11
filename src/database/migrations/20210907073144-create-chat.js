'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('chat', { 
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      fk_idGuardian: {
        type: Sequelize.INTEGER,
        references: { model: 'guardian', key: 'id'},
        onUpdate: 'CASCADE', 
        onDelete: 'SET NULL',
      },
      fk_idProfessional: {
        type: Sequelize.INTEGER,
        references: { model: 'professional', key: 'id'},
        onUpdate: 'CASCADE', 
        onDelete: 'SET NULL',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('chat');
  }
};
