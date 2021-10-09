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

  static associate(models) {
    this.belongsToMany(models.GuardianChild, { as: 'Child', through: 'guardian_children', foreignKey: 'fk_idGuardian' });
  }
}

// Guardian.hasOne(User);
// Guardian.hasMany(Child);

export default Guardian;
