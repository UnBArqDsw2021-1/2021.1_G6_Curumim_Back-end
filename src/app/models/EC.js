import { Sequelize } from "sequelize";
import Teacher from './Teacher.js';
import Class from './Class.js';
import Adm from './Adm.js';
const Model = Sequelize.Model;
class EC extends Model { }
EC.init({
  // attributes
  idEc: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  adress: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'EC'
  // options
});

EC.hasMany(Adm);
EC.hasMany(Teacher);
EC.hasMany(Class);
export default EC;