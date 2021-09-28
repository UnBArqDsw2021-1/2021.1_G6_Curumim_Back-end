import UserController from './UserController';
import Professionals from '../models/Professionals';
import User from '../models/User';

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
    try {
      const usertype = 1;
      const {
        name, cpf, birthday, email, password, registration,
      } = req.body;
      const { id } = await User.create({
        usertype, name, cpf, birthday, email, password,
      });
      await Professionals.create({ id, professionalType: 'teacher', registration });
      return res.json({
        usertype,
        name,
        cpf,
        birthday,
        email,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err.stack });
    }
  }
}

export default new TeacherController();
