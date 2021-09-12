'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('anotations', { 
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      fk_idProfessional: {
        type: Sequelize.INTEGER,
        references: { model: 'professionals', key: 'id'},
        onUpdate: 'CASCADE', 
        onDelete: 'SET NULL',
      },
      fk_idChild: {
        type: Sequelize.INTEGER,
        references: { model: 'children', key: 'id'},
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE',
      },
      title: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('anotations');
  }
};
