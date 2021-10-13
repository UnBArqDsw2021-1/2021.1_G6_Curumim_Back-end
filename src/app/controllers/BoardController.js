/* eslint-disable class-methods-use-this */
import Project from '../models/Project';
import Anotation from '../models/Anotation';
import Child from '../models/Child';
import Class from '../models/Class';

class BoardController {
  async checkBoard(req, res) {
    try {
      const { childId } = req.params;

      const anotations = await Anotation.findAll({ where: { fk_idChild: childId } });

      const child = await Child.findByPk(childId, {
        include: { association: 'turma' },
      });

      if (!child) {
        return res.status(401).json({ message: 'Criança não encontrada!' });
      }

      if (!child.turma) {
        return res.status(401).json({ message: 'Nenhuma turma encontrada para esta criança!' });
      }

      let { Project: projects } = await Class.findByPk(child.turma.id, {

        include: [
          {
            model: Project,
            as: 'Project',
          },
        ],
        order: [
          [Project, 'date', 'desc'],
        ],

      });

      projects = projects.slice(0, 5);

      return res.status(200).json({ child, projects, anotations });
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }
}

export default new BoardController();
