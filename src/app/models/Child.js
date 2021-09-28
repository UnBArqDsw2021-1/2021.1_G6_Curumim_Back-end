import { Model, DataTypes } from 'sequelize';

class Child extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      birthday: DataTypes.DATE,
      registration: DataTypes.INTEGER,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.Class, { foreingKey: 'fk_classId', as: 'class' });
    this.belongsToMany(models.Guardian, { through: 'Guardian_Child' });
  }
}

export default Child;
