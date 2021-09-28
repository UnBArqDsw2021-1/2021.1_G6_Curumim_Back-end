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
}
export default Ec;
