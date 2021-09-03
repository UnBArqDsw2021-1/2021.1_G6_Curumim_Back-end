import { Sequelize } from "sequelize";
import Message from './Message.js';
const Model = Sequelize.Model;
class User extends Model { }
User.init({
  // attributes
  iduser: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUIDV4
  },
  usertype: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  cpf: {
    type: Sequelize.STRING(11),
    allowNull: false
  },
  birthday: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(10),
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'user'
  // options
});

User.belongsTo(Message, {as: 'fk_IdUser'});

export default User;