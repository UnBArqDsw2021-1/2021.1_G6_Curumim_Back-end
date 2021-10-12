import { Model, Sequelize } from 'sequelize';

class GuardianChild extends Model {
  static init(sequelize) {
    super.init({
      guardian_cpf: Sequelize.STRING,
      fk_idGuardian: Sequelize.INTEGER,
      fk_idChild: Sequelize.INTEGER,
    }, {
      sequelize,
    });
  }
}

export default GuardianChild;
