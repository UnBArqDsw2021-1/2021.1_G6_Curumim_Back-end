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

/*  associate(models) {
    this.hasMany(models.Class);
    this.hasMany(models.Adm);
    this.hasMany(models.Teacher);
  } */
}

export default Ec;
