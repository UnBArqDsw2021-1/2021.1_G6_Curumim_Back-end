import UserController from './UserController';
import User from '../models/User';
import Guardian from '../models/Guardian';

class GuardianController extends UserController {
  async list(req, res) {
    try {
      const users = await User.findAll();
      const glist = await Guardian.findAll();
      return res.json({ users, guardians: glist });
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }

  async register(req, res) {
    try {
      const usertype = 0;
      const {
        name, cpf, birthday, email, password, adress,
      } = req.body;
      const { id } = await User.create({
        usertype, name, cpf, birthday, email, password,
      });
      await Guardian.create({ id, adress });
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

export default new GuardianController();
