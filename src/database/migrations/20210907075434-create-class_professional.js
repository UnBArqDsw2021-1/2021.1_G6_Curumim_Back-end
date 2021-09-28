module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('class_professional', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    fk_idClass: {
      type: Sequelize.INTEGER,
      references: { model: 'classes', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    fk_idProfessional: {
      type: Sequelize.INTEGER,
      references: { model: 'professionals', key: 'id' },
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
  }),

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('class_professional'),
};
