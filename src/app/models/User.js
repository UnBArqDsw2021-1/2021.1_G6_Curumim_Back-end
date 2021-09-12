import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize){
    super.init(
      {
        usertype: Sequelize.INTEGER,
        name: Sequelize.STRING,
        cpf: Sequelize.STRING,
        birthday: Sequelize.DATE,
        email: Sequelize.STRING,
        password: Sequelize.STRING,

      },
      {
        sequelize,
      }
      );
      return this;
  }
}

export default User;