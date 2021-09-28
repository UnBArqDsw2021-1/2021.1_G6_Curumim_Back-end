import UserController from './UserController';
import Professionals from '../models/Professionals';

class TeacherController {
  async list(req, res) {
    try {
      const list = await Professionals.findAll();
      return res.json(list);
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }
}

export default new TeacherController();
