module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('professionals', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    fk_id_ec: {
      type: Sequelize.INTEGER,
      references: { model: 'ecs', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    professional_type: { // adm or teacher
      type: Sequelize.STRING,
      allowNull: false,
    },
    registration: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
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

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('professionals'),
};
