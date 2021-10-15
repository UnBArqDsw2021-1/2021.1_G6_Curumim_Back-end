import Anotation from '../models/Anotation';

class AnotationController {
  async listAll(req, res) {
    try {
      const anotations = await Anotation.findAll();

      return res.status(200).json({
        anotations,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.msg, error: err.stack });
    }
  }

  async listMine(req, res) {
    try {
      const anotations = await Anotation.findAll({
        where: {
          fk_idProfessional: req.userId,
        },
      });

      return res.status(200).json({
        anotations,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.msg, error: err.stack });
    }
  }

  async create(req, res) {
    try {
      const { title, description, child_id } = req.body;

      const anotation = await Anotation.create({
        title, description, fk_idProfessional: req.userId, fk_idChild: child_id,
      });

      return res.status(201).json({
        msg: 'Anotação criada com sucesso!',
        anotation,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.msg, error: err.stack });
    }
  }

  async update(req, res) {
    try {
      const { id, updates } = req.body;
      const anotation = await Anotation.findByPk(id);

      if (anotation === null) {
        return res.status(404).json({ msg: 'Essa anotação não existe.' });
      }

      if (req.userId !== anotation.dataValues.fk_idProfessional) {
        return res.status(403).json({ msg: 'Essa anotação não é sua.' });
      }

      const updated = await anotation.update(updates);

      return res.json({
        msg: 'Anotação atualizada com sucesso!',
        updated,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.msg, error: err.stack });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const anotation = await Anotation.findByPk(id);
      if (anotation === null) {
        return res.status(404).json({ msg: 'Essa anotação não existe.' });
      }

      if (req.userId !== anotation.dataValues.fk_idProfessional) {
        return res.status(403).json({ msg: 'Essa anotação não é sua.' });
      }

      await anotation.destroy();

      return res.json({
        msg: 'Anotação deletada com sucesso!',
      });
    } catch (err) {
      return res.status(500).json({ msg: err.msg, error: err.stack });
    }
  }
}

export default new AnotationController();
