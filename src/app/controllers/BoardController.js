/* eslint-disable class-methods-use-this */
import Project from '../models/Project';
import Anotation from '../models/Anotation';
import BoardComposite from '../utils/BoardComposite';
import Child from '../models/Child';
import ClassProject from '../models/ClassProject';

class BoardController {
  async checkBoard(req, res) {
    try {
      const { childId } = req.params;

      //const anotations = Anotation.findAll({ where: { fk_idChild: childId}})

      const child = await Child.findByPk(childId, {
          include: { association: 'turma'},
      });
      
      const projects = await ClassProject.findAll({ where: { fk_idClass: child.turma.id } })

      return res.status(200).json({child, projects});
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }
}

export default new BoardController();
