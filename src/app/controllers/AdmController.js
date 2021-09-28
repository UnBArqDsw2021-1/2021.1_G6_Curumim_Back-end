import Child from '../models/Child';
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

  async registerChild(req, res) {
    try {
      const { name, registration, birthday } = req.body;
      await Child.create({ name, registration, birthday });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }

    return res.status(201).json({ message: 'Aluno cadastrado!' });
  }
}

export default new AdmController();
