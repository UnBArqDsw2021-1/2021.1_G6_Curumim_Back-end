import Professionals from '../models/Professionals';
import User from '../models/User';
import UserController from './UserController';

class AdmController extends UserController {
  async register(req, res) {
    try {
      const usertype = 2;
      const {
        name, cpf, birthday, email, password, registration,
      } = req.body;
      const { id } = await User.create({
        usertype, name, cpf, birthday, email, password,
      });
      await Professionals.create({ id, professionalType: 'adm', registration });
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

export default new AdmController();
