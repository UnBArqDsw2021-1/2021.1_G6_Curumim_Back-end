import { Model, DataTypes } from 'sequelize';

class Professionals extends Model {
  static init(sequelize) {
    super.init(
      {
        registration: DataTypes.INTEGER,
        professionalType: DataTypes.STRING,
        fk_idEc: DataTypes.INTEGER,
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Project, { foreignKey: 'fk_idProfessional', as: 'Projects' });
    this.hasMany(models.Anotation, { foreignKey: 'fk_idProfessional' });
    this.belongsTo(models.Ec, { foreignKey: 'fk_idEc', as: 'ec' });
  }
}

export default Professionals;
