module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ecs', [{
      name: 'Centro Educacional Curumin',
      adress: 'Rua 4 lote 10',
      description: 'Lorem Ipsum',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ecs', null, {});
  },
};
