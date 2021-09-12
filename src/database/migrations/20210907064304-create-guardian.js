'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
    return queryInterface.createTable('guardians', { 
      id: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        allowNull: false,
        references: { model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      adress: { 
        type: Sequelize.STRING,
        allowNull:false, 
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
   return  queryInterface.dropTable('guardians');
  }
};
