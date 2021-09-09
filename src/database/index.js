import Sequelize from 'sequelize'
import Adm from '../app/models/Adm';
import EC from '../app/models/EC';
import dbConfig from '../config/database'


const models = [EC];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models.map(model => model.init(this.connection))
  }
}

export default new Database();