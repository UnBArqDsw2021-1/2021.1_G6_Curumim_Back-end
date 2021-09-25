import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';
import { password } from '../../config/database';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        usertype: Sequelize.INTEGER,
        name: Sequelize.STRING,
        cpf: Sequelize.STRING,
        birthday: Sequelize.DATE,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
      },
      {
        sequelize,
      },
    );
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }

  checkPassword(passwd) {
    return bcrypt.compare(passwd, this.password_hash);
  }
}

export default User;
