import Sequelize from 'sequelize';
import Child from '../models/Child';
import Professionals from '../models/Professionals';
import User from '../models/User';
import GuardianChild from '../models/GuardianChild';
import UserController from './UserController';
import dbConfig from '../../config/database';
import Class from '../models/Class';
import ClassProfessional from '../models/ClassProfessional';
import Ec from './EcController';

const sequelize = new Sequelize(dbConfig.database, dbConfig.username,
  dbConfig.password, { host: dbConfig.host, dialect: dbConfig.dialect });

class AdmController extends UserController {
  async register(req, res) {
    const { id: fk_idEc } = await new Ec();
    const t = await sequelize.transaction();
    try {
      const usertype = 2;
      const {
        name, cpf, birthday, email, password, registration,
      } = req.body;
      const { id } = await User.create({
        usertype, name, cpf, birthday, email, password,
      }, { transaction: t });
      await Professionals.create({
        id, professionalType: 'adm', registration, fk_idEc,
      }, { transaction: t });
      await t.commit();
      return res.json({
        usertype,
        name,
        cpf,
        birthday,
        email,
        fk_idEc,
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

  async deleteGuardianChild(req, res) {
    try {
      const { id, cpf } = req.body;

      const guardian_children = await GuardianChild.findOne({
        where: {
          fk_id_child: id,
          guardian_cpf: cpf,
        },
      });
      if (guardian_children === null) {
        return res.status(404).json({ message: 'Responsável não encontrado para essa criança.' });
      }

      await guardian_children.destroy();

      return res.status(200).json({ message: 'Responsável deletado!' });
    } catch (err) {
      return res.status(500).json({ error: err.message, stack: err.stack });
    }
  }

  async registerClass(req, res) {
    try {
      const { code, capacity } = req.body;

      // const {fk_idEc} = await Professionals.findByPk(req.userId);
      // TODO: adicionar id EC na hora de criar a classe
      const class_ver = await Class.findOne({
        where: {
          code,
        },
      });
      if (class_ver !== null) {
        return res.status(409).json({ message: 'Já existe uma turma com esse código.', class: class_ver });
      }

      const class_obj = await Class.create({
        code,
        capacity,
      });

      const children = await Child.findAll({
        limit: capacity,
      });

      children.map((child) => {
        child.update({
          fk_idClass: class_obj.id,
        });
      });

      await class_obj.reload();

      await class_obj.update({ capacity: capacity - children.length });
      const clss = await Class.findByPk(class_obj.id, {
        include: { association: 'Children' },
      });

      return res.status(201).json({ message: 'Turma Cadastrada!', clss });
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }

  async listClasses(req, res) {
    try {
      const classes = await Class.findAll();

      return res.status(200).json({ classes });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async registerChildClass(req, res) {
    try {
      const { class_id, child_id } = req.body;

      const child = await Child.findByPk(child_id);
      child.update({
        fk_idClass: class_id,
      });

      return res.status(200).json({ msg: 'Aluno cadastrado na turma!' });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async removeChildClass(req, res) {
    try {
      const { child_id } = req.body;

      const child = await Child.findByPk(child_id);
      child.update({
        fk_idClass: null,
      });

      return res.status(200).json({ msg: 'Aluno removido da turma!' });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async registerTeacherClass(req, res) {
    try{
      const { teacher_id, class_id } = req.body;

      const { usertype } = await User.findByPk(teacher_id);
      if (usertype !== 1){
        return res.status(403).json({ message: 'O usuário não é um professor.' });
      }

      const TeacherClass = await ClassProfessional.findOne({
        where: {
          fk_idClass: class_id,
          fk_idProfessional: teacher_id,
        }
      });
      if (TeacherClass !== null) {
        return res.status(201).json({ message: 'Professional já está cadastrado na turma.' });
      }

      await ClassProfessional.create({ fk_idClass: class_id, fk_idProfessional: teacher_id, });

      return res.status(200).json({ msg: 'Professor adicionado à turma.' });
    }catch(err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async deleteTeacherClass(req, res) {
    try{
      const { teacher_id, class_id } = req.query;
      console.log(req);

      const TeacherClass = await ClassProfessional.findOne({
        where: {
          fk_idClass: class_id,
          fk_idProfessional: teacher_id,
        }
      });
      if (TeacherClass === null) {
        return res.status(404).json({ message: 'Relação não encontrada.' });
      }

      await TeacherClass.destroy();

      return res.status(200).json({ msg: 'Professor removido da turma.' });
    }catch(err) {
      return res.status(500).json({ error: err.message });
    }
  }
  
  async updateClass(req, res) {
    try {
      const { id, updates } = req.body;
      const clss = await Class.findByPk(id);

      const updated = await clss.update(updates);

      return res.json({
        updated,
      });
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }

  async deleteClass(req, res) {
    try {
      const { id } = req.params;
      const clss = await Class.findByPk(id);

      await clss.destroy();

      return res.json({
        msg: 'Deletada com sucesso',
      });
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }
}

export default new AdmController();
