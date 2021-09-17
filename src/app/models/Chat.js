/* import { Sequelize } from "sequelize";

const Model = Sequelize.Model;
class Chat extends Model { }
Chat.init({
  // attributes
  idChat: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUIDV4
  }
}, {
  sequelize,
  modelName: 'chat'
  // options
});

Chat.hasOne(Guardian, {as: 'fk_idGuardian'});
Chat.hasOne(User, {as: 'fk_idUser'});
Chat.hasMany(Message);
export default Chat; */