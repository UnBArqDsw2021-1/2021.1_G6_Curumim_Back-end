module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('guardian_children', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    fk_id_guardian: {
      type: Sequelize.INTEGER,
      references: { model: 'guardians', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: true,
    },
    fk_id_child: {
      type: Sequelize.INTEGER,
      references: { model: 'children', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    guardian_cpf: {
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
  }),

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('guardian_children'),
};
