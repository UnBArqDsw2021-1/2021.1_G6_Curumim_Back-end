import { Model, DataTypes } from 'sequelize';

class Anotation extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      description: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

/*   associate(models) {
    this.belongTo(models.Teacher, { foreingKey: 'fk_IdTeacher' });
    this.belongTo(models.Child, { foreingKey: 'fk_IdChild' });
  } */
}

export default Anotation;
