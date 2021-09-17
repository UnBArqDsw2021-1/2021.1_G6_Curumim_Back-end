'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('chats', { 
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
        onDelete: 'SET NULL',
      },
      fk_idProfessional: {
        type: Sequelize.INTEGER,
        references: { model: 'professionals', key: 'id'},
        onUpdate: 'CASCADE', 
        onDelete: 'SET NULL',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('chats');
  }
};
