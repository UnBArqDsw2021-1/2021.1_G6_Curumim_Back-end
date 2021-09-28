/* import { Sequelize } from "sequelize";
import User from './User.js';
import Child from './Child.js';
const Model = Sequelize.Model;
class Guardian extends Model { }
Guardian.init({
  // attributes
  idguardian: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUIDV4
  },
  adress: {
    type: Sequelize.STRING(256),
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'guardian'
  // options
});

Guardian.hasOne(User);
Guardian.hasMany(Child);

export default Guardian; */
