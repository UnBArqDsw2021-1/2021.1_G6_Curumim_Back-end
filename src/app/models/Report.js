import { Sequelize } from "sequelize";

const Model = Sequelize.Model;
class Report extends Model { }
Report.init({
  // attributes
  idReport: {
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
  }
}, {
  sequelize,
  modelName: 'report'
  // options
});

export default Report;