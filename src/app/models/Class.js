import { Sequelize } from "sequelize";
import Teacher from './Teacher.js';
import Child from './Child.js';
import Activity from './Activity.js';
import EC from './EC.js';
const Model = Sequelize.Model;
class Class extends Model { }
Class.init({
  // attributes
  idClass: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUIDV4
  },
  code: {
    type: Sequelize.STRING(2),
    allowNull: false
  },
  capacity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'class'
  // options
});

Class.hasMany(Child);
Class.hasMany(Teacher);
Class.hasMany(Activity);
Class.hasOne(EC);
export default Class;