'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
   return queryInterface.createTable('class_project', { 
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
        onDelete: 'CASCADE',
      },
      fk_idProject: {
        type: Sequelize.INTEGER,
        references: { model: 'projects', key: 'id'},
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
   return queryInterface.dropTable('class_project');
  }
};
