import Sequelize from 'sequelize';
import UserController from './UserController';
import Professionals from '../models/Professionals';
import User from '../models/User';
import dbConfig from '../../config/database';

const sequelize = new Sequelize(dbConfig.database, dbConfig.username,
  dbConfig.password, { host: dbConfig.host, dialect: dbConfig.dialect });

class TeacherController extends UserController {
  async list(req, res) {
    try {
      const users = await User.findAll();
      const plist = await Professionals.findAll();
      return res.json({ users, professionals: plist });
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }

  async register(req, res) {
    const t = await sequelize.transaction();
    try {
      const usertype = 1;
      const {
        name, cpf, birthday, email, password, registration,
      } = req.body;
      const { id } = await User.create({
        usertype, name, cpf, birthday, email, password,
      }, { transaction: t });
      await Professionals.create({ id, professionalType: 'teacher', registration }, { transaction: t });
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
      return res.status(500).json({ error: err.stack });
    }
  }
}

export default new TeacherController();
