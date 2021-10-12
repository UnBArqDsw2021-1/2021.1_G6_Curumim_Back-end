import { Model, Sequelize } from 'sequelize';

class ClassProject extends Model {
  static init(sequelize) {
    super.init({
      fk_idClass: Sequelize.INTEGER,
      fk_idProject: Sequelize.INTEGER,
    }, {
      sequelize,
    });
  }
}

export default ClassProject;
