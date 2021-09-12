/* import { Sequelize } from "sequelize";

const Model = Sequelize.Model;
class Message extends Model { }
Message.init({
  // attributes
  idMessage: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUIDV4
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  date: {
    type : Sequelize.DATE,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'message'
  // options
});

export default Message; */