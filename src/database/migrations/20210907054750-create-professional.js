'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('professional', { 
      id: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        allowNull: false,
        references: { model: 'user', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      fk_idEc: {
        type: Sequelize.INTEGER,
        references: { model: 'ec', key: 'id'},
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
    await queryInterface.dropTable('professional');
  }
};
