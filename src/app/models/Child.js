import { Model, DataTypes } from 'sequelize';

class Child extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      birthday: DataTypes.DATE,
      registration: DataTypes.INTEGER,
    }, {
      sequelize,
    });
  }

  /* static associate(models) {
    this.belongTo(models.Class);
    this.belongToMany(models.Guardian, { through: 'Guardian_Child' });
  } */
  static associate(models) {
    this.belongsTo(models.Class, { foreignKey: 'fk_idClass', as: 'Class' });
    this.belongsToMany(models.GuardianChild, { as: 'Guardian', through: 'guardian_children', foreignKey: 'fk_idChild' });
    this.hasMany(models.Anotation, { foreignKey: 'fk_idChild'});
  }
}

export default Child;
