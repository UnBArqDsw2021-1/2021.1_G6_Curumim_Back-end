import Sequelize, { Model } from 'sequelize';

class Guardian extends Model {
  static init(sequelize) {
    super.init(
      {
        adress: Sequelize.STRING(256),
      },
      {
        sequelize,
        // options
      },
    );
    return this;
  }
}

// Guardian.hasOne(User);
// Guardian.hasMany(Child);

export default Guardian;
