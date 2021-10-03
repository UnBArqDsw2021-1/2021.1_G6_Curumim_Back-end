import { Model, DataTypes } from 'sequelize';
import Class from './Class';
import Professionals from './Professionals';

class Project extends Model {
  static init(sequelize) {
    super.init({
      project_type: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      date: DataTypes.DATE,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.Professionals, { foreignKey: 'fk_idProfessional', as: 'Professional' });
    this.belongsToMany(models.Class, { as: 'Class', through: 'ClassProject', foreignKey: 'fk_idProject' });
  }
}

export default Project;
