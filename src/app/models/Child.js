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

  associate(models) {
    this.belongTo(models.Class);
    this.belongToMany(models.Guardian, { through: 'Guardian_Child' });
  }
}

export default Child;
