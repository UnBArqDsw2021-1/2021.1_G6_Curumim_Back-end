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

  static associate(models) {
    // this.belongsTo(models.Ec, { ForeingKey: 'fk_idEc', as: 'Ec' });
    // this.hasMany(models.Activity, { through: 'class_project' });
    // this.hasMany(models.Event, { through: 'class_project' });
    // this.hasMany(models.Teacher, { through: 'class_professional' });
    this.belongsToMany(models.Professionals, { as: 'Teacher', through: 'ClassProfessional', foreignKey: 'fk_idClass' });
    this.hasMany(models.Child, { foreignKey: 'fk_idClass', as: 'Children' });
    this.belongsToMany(models.Project, { as: 'Project', through: 'ClassProject', foreignKey: 'fk_idClass' });
  }
}

export default Class;
