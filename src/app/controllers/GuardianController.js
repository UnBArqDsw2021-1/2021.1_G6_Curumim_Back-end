import Sequelize from 'sequelize';
import UserController from './UserController';
import User from '../models/User';
import Guardian from '../models/Guardian';
import dbConfig from '../../config/database';
import Project from '../models/Project';

const sequelize = new Sequelize(dbConfig.database, dbConfig.username,
  dbConfig.password, { host: dbConfig.host, dialect: dbConfig.dialect });

class GuardianController extends UserController {
  async list(req, res) {
    try {
      const users = await User.findAll();
      const glist = await Guardian.findAll();
      return res.json({ users, guardians: glist });
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }

  async register(req, res) {
    const t = await sequelize.transaction();
    try {
      const usertype = 0;
      const {
        name, cpf, birthday, email, password, adress,
      } = req.body;
      const { id } = await User.create({
        usertype, name, cpf, birthday, email, password,
      }, { transaction: t });
      await Guardian.create({ id, adress }, { transaction: t });
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

  async getActivityDetails(req, res) {
    try {
      const { id } = req.query;
      const project = await Project.findByPk(id);

      // TODO: Validar se a atividade é do filho

      return res.json(project);
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }
}

export default new GuardianController();
