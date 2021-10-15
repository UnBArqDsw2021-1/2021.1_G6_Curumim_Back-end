import { Model, DataTypes } from 'sequelize';

class Ec extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      adress: DataTypes.STRING,
      description: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.hasMany(models.Class, { foreignKey: 'fk_idEc', as: 'Classes' });
    this.hasMany(models.Professional, { foreignKey: 'fk_idEc', as: 'professionals' });
  }
}

export default Ec;
