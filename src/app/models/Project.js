import { Model, DataTypes } from 'sequelize';
import Class from './Class';
import Professionals from './Professionals';

class Project extends Model {
  static init(sequelize) {
    super.init({
      projectType: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      date: DataTypes.DATE,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.Professionals, { foreignKey: 'id', through: 'fk_IdProfessional' });
    // Project.belongsToMany(Class, {through: 'ClassActivity'});
  }
}

export default Project;
