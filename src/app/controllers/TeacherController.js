import Sequelize from 'sequelize';
import UserController from './UserController';
import Professionals from '../models/Professionals';
import User from '../models/User';
import dbConfig from '../../config/database';
import Project from '../models/Project';
import Class from '../models/Class';
import ClassProfessional from '../models/ClassProfessional';

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
      return res.status(201).json({
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

  async listMyClasses(req, res) {
    try {
      const list = [];

      const relations = await ClassProfessional.findAll({
        where: {
          fk_idProfessional: req.userId
        }
      });

      console.log(relations);

      for (const relation of relations){
        const class_obj = await Class.findByPk(relation.dataValues.fk_idClass);
        list.push(class_obj.dataValues);
      }

      return res.json({list});
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }
}

export default new TeacherController();
