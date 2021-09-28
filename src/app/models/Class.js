import { Model, DataTypes } from 'sequelize';

class Class extends Model {
  static init(sequelize) {
    super.init({
      code: DataTypes.STRING,
      capacity: DataTypes.INTEGER,
    }, {
      sequelize,
    });
  }

  /* static associate(models) {
    this.belongsTo(models.Ec, { ForeingKey: 'fk_idEc' });
    this.hasMany(models.Child);
    this.hasMany(models.Activity, { through: 'class_project' });
    this.hasMany(models.Event, { through: 'class_project' });
    this.hasMany(models.Teacher, { through: 'class_professional' });
  } */
}

export default Class;
