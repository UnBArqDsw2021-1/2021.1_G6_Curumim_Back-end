/* import { Sequelize } from "sequelize";
import User from './User.js';
const Model = Sequelize.Model;
class Teacher extends Model { }
Teacher.init({
  // attributes
  idteacher: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUIDV4
  },
  registration: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'teacher'
  // options
});

Teacher.hasOne(User);
Teacher.hasMany(Activity);

export default Teacher; */