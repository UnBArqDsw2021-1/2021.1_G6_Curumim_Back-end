import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const {
        usertype, name, cpf, birthday, email, password,
      } = req.body;

      console.log(req.body);

      const user = await User.create({
        usertype, name, cpf, birthday, email, password,
      });

      return res.json(user);
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }

  async list(req, res) {
    try {
      const list = await User.findAll();
      return res.json(list);
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }
}

export default new UserController();
