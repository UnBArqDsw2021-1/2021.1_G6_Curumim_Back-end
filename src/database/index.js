import Sequelize from 'sequelize';
import User from '../app/models/User';
import dbConfig from '../config/database';
import Ec from '../app/models/Ec.js';
import Professionals from '../app/models/Professionals';

const models = [User, Professionals];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
