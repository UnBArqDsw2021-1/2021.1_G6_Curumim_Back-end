/* import { Sequelize } from "sequelize";
import User from './User.js';
import Event from './Event.js';
import Report from './Report.js';

const Model = Sequelize.Model;
class Adm extends Model { }
Adm.init({
  // attributes
  idamd: {
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
  modelName: 'adm'
  // options
});

Adm.hasOne(User, {as: 'idAdm'});
Adm.hasMany(Event);
Adm.hasMany(Report);
export default Adm; */