import { Model, Sequelize } from 'sequelize';

class ClassProfessional extends Model {
  static init(sequelize) {
    super.init({
      fk_idClass: Sequelize.INTEGER,
      fk_idProfessional: Sequelize.INTEGER,
    }, {
      sequelize,
    });
  }
}

export default ClassProfessional;
