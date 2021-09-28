/* import { Sequelize } from "sequelize";

const Model = Sequelize.Model;
class Event extends Model { }
Event.init({
  // attributes
  idEvent: {
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
  },
  date: {
    type : Sequelize.DATE,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'event'
  // options
});

export default Event; */
