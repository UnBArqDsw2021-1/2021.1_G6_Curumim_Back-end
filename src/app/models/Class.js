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
    /*  this.belongsTo(models.Ec, { ForeingKey: 'fk_idEc' }); */
    /* this.hasMany(models.Teacher, { through: 'class_professional', as: 'professionals' }); */
    this.hasMany(models.Child, { foreingKey: 'fk_classId', as: 'childs' });
    this.hasMany(models.Project, { through: 'class_project', as: 'projects' });
  }
}

export default Class;
