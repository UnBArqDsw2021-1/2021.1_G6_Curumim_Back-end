import Sequelize from 'sequelize'
import dbConfig from '../config/database'
import Ec from '../app/models/Ec.js'

const connection = new Sequelize(dbConfig);

Ec.init(connection);

export default connection;
