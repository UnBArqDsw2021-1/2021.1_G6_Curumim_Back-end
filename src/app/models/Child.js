import { Sequelize } from "sequelize";
import Class from './Class.js';
import Guardian from './Guardian.js';
const Model = Sequelize.Model;
class Child extends Model { }
Child.init({
  // attributes
  idChild: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUIDV4
  },
  name : {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  birthday : {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  registration: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'child'
  // options
});

Child.belongsTo(Class);
Child.belongToMany(Guardian, {through: 'Guardian_Child'});

export default Child;