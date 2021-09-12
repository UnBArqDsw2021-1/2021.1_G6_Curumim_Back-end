'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('professionals', { 
      id: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        allowNull: false,
        references: { model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      fk_idEc: {
        type: Sequelize.INTEGER,
        references: { model: 'ecs', key: 'id'},
        onUpdate: 'CASCADE', 
        onDelete: 'SET NULL',
      },
      professionalType: { //adm or teacher
        type: Sequelize.STRING,
        allowNull:false, 
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
    return queryInterface.dropTable('professionals');
  }
};
