import Sequelize from 'sequelize';
import Child from '../models/Child';
import Professionals from '../models/Professionals';
import User from '../models/User';
import UserController from './UserController';
import dbConfig from '../../config/database';

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, { host: dbConfig.host, dialect: dbConfig.dialect });

class AdmController extends UserController {
  async register(req, res) {
    const t = await sequelize.transaction();
    try {
      const usertype = 2;
      const {
        name, cpf, birthday, email, password, registration,
      } = req.body;
      const { id } = await User.create({
        usertype, name, cpf, birthday, email, password,
      }, { transaction: t });
      await Professionals.create({ id, professionalType: 'adm', registration }, { transaction: t });
      await t.commit();
      return res.json({
        usertype,
        name,
        cpf,
        birthday,
        email,
      });
    } catch (err) {
      t.rollback();
      console.log(err.error);
      return res.status(500).json({ error: err.stack });
    }
  }

  async registerChild(req, res) {
    try {
      const { name, registration, birthday } = req.body;
      await Child.create({ name, registration, birthday });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }

    return res.status(201).json({ message: 'Aluno cadastrado!' });
  }
}

export default new AdmController();
