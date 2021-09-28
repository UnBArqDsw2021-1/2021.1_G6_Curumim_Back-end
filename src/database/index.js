import Sequelize from 'sequelize';
import User from '../app/models/User';
import dbConfig from '../config/database';
import Professionals from '../app/models/Professionals';
import Ec from '../app/models/Ec';
import Class from '../app/models/Class';
import Child from '../app/models/Child';

const models = [User, Ec, Class, Child, Professionals];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

       models.map((model) => model.init(this.connection));
    /* models.map((model) => model.associate(this.connection.model)); */
  }
}

export default new Database();
