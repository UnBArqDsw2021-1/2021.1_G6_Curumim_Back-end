/* import { Sequelize } from "sequelize";

const Model = Sequelize.Model;
class Anotation extends Model { }
Anotation.init({
  // attributes
  idAnotation: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUIDV4
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'anotation'
  // options
});

Anotation.belongTo(Teacher, {as: 'fk_IdTeacher'});
Anotation.belongTo(Child, {as: 'fk_IdChild'});

export default Anotation; */