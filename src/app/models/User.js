import Sequelize, { Model } from 'sequelize';
import bcrypt from "bcryptjs";
import { password } from '../../config/database';

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
        password_hash: Sequelize.STRING,
      
      },
      {
        sequelize,
      }
      );
      return this;
  }
  checkPassword(password){
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;