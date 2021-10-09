import Sequelize from 'sequelize';
import Child from '../models/Child';
import Professionals from '../models/Professionals';
import User from '../models/User';
import GuardianChild from '../models/GuardianChild';
import UserController from './UserController';
import dbConfig from '../../config/database';

const sequelize = new Sequelize(dbConfig.database, dbConfig.username,
  dbConfig.password, { host: dbConfig.host, dialect: dbConfig.dialect });

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
      return res.status(500).json({ error: err.stack });
    }
  }

  async registerChild(req, res) {
    const t = await sequelize.transaction();
    try {
      const {
        name, birthday, cpf1, cpf2,
      } = req.body;
      const child = await Child.create({ name, birthday }, { transaction: t });
      // cpfs.forEach()
      if (cpf1 !== undefined) {
        const user = await User.findOne({
          where: {
            cpf: cpf1,
          },
        });
        if (user !== null) {
          await GuardianChild.create({ guardian_cpf: cpf1, fk_idChild: child.id, fk_idGuardian: user.id }, { transaction: t });
        } else {
          await GuardianChild.create({ guardian_cpf: cpf1, fk_idChild: child.id, fk_idGuardian: null }, { transaction: t });
        }
      }
      if (cpf2 !== undefined) {
        const user = await User.findOne({
          where: {
            cpf: cpf2,
          },
        });
        if (user !== null) {
          await GuardianChild.create({ guardian_cpf: cpf2, fk_idChild: child.id, fk_idGuardian: user.id }, { transaction: t });
        } else {
          await GuardianChild.create({ guardian_cpf: cpf2, fk_idChild: child.id, fk_idGuardian: null }, { transaction: t });
        }
      }
      await t.commit();
      return res.status(201).json({ message: 'Aluno cadastrado!', child });
    } catch (err) {
      t.rollback();
      return res.status(500).json({ error: err.message, stack: err.stack });
    }
  }

  async registerGuardianChild(req, res) {
    const t = await sequelize.transaction();
    try {
      const { id, cpf } = req.body;

      const child = await Child.findByPk(id);
      if (child === null) {
        return res.status(404).json({ message: 'Criança não foi encontrada.' });
      }

      const guardian_child_validate = await GuardianChild.findOne({
        where: {
          guardian_cpf: cpf,
          fk_idChild: id,
        },
      });
      if (guardian_child_validate !== null) {
        return res.status(201).json({ message: 'Responsável já está cadastrado.' });
      }

      const user = await User.findOne({
        where: {
          cpf,
        },
      });
      if (user !== null) {
        await GuardianChild.create({ guardian_cpf: cpf, fk_idChild: id, fk_idGuardian: user.id }, { transaction: t });
      } else {
        await GuardianChild.create({ guardian_cpf: cpf, fk_idChild: id, fk_idGuardian: null }, { transaction: t });
      }

      await t.commit();
      return res.status(201).json({ message: 'Responsável cadastrado!' });
    } catch (err) {
      t.rollback();
      return res.status(500).json({ error: err.message, stack: err.stack });
    }
  }

  async registerClass(req, res) {
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
