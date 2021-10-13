/* eslint-disable class-methods-use-this */
import Project from '../models/Project';
import Anotation from '../models/Anotation';
import Child from '../models/Child';
import Class from '../models/Class';
import BoardComposite from '../utils/BoardComposite';

class BoardController {
  async checkBoard(req, res) {
    try {
      const { childId } = req.params;

      const anotations = await Anotation.findAll({
        where: { fk_idChild: childId },
        order: [
          ['created_at', 'desc'],
        ],
      });

      const child = await Child.findByPk(childId, {
        include: { association: 'turma' },
      });

      if (!child) {
        return res.status(401).json({ message: 'Criança não encontrada!' });
      }

      if (!child.turma) {
        return res.status(401).json({ message: 'Nenhuma turma encontrada para esta criança!' });
      }

      const { Project: projects } = await Class.findByPk(child.turma.id, {

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

      const boardComposite = new BoardComposite(projects, anotations);

      const { board } = boardComposite.mountBoard();

      return res.status(200).json(board);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}

export default new BoardController();
