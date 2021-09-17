/* import { Sequelize } from "sequelize";

const Model = Sequelize.Model;
class Presence extends Model { }
Presence.init({
  // attributes
  idPresence: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUIDV4
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'presence'
  // options
});

export default Presence; */