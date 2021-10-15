module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('class_projects', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    fk_id_class: {
      type: Sequelize.INTEGER,
      references: { model: 'classes', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    fk_id_project: {
      type: Sequelize.INTEGER,
      references: { model: 'projects', key: 'id' },
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

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('class_project'),
};
