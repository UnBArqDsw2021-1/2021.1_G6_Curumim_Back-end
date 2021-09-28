module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('children', 'name', {
    type: Sequelize.DataTypes.STRING,
  }),

  down: async (queryInterface, Sequelize) => queryInterface.removeColumn('children', 'name'),
};
