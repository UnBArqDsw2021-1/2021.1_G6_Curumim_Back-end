import { DataTypes, Model } from "sequelize";

const Model = Sequelize.Model;
class Anotation extends Model { 
  static init(sequelize){
    super.init({
      title: DataTypes.STRING,
      description: DataTypes.STRING,
    },{
      sequelize,
    })
  }
  static associate(models) {
    this.belongsTo(models.Child, { foreignKey: 'fk_idChild' });
    this.belongsTo(models.Professionals, { foreignKey: 'fk_idProfessional' });
  }
}
export default Anotation;
