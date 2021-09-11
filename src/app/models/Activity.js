import { Sequelize } from "sequelize";
import Class from "./Class.js";
import Teacher from './Teacher.js';
const Model = Sequelize.Model;
class Activity extends Model { }
Activity.init({
  // attributes
  idActivity: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUIDV4
  },
  title: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  description: {
    type: Sequelize.STRING(256),
    allowNull: true
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'teacher'
  // options
});

Activity.hasOne(Teacher, {as: 'fk_IdTeacher'});
Activity.belongsToMany(Class, {through: 'ClassActivity'});

export default Teacher;