module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('projects', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    fk_id_professional: {
      type: Sequelize.INTEGER,
      references: { model: 'professionals', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    project_type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    date: {
      type: Sequelize.DATE,
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

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('projects'),
};
