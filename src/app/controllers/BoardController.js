/* eslint-disable class-methods-use-this */
import Project from '../models/Project';
import Anotation from '../models/Anotation';
import BoardComposite from '../utils/BoardComposite';
import Child from '../models/Child';

class BoardController {
  async checkBoard(req, res) {
    try {
      const { childId } = req.params;

    
      const child = await Child.findByPk(childId, {
          include: { association: 'class'}, 
          include: { association: 'projects'}
      });

      return res.json();
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }
}

export default new BoardController();
