import { Model, DataTypes } from 'sequelize';

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

  /*  associate(models) {
    this.belongsTo(models.Professional, {as: 'fk_idProfessional'})
  } */
}

export default Project;
