import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const {
        usertype, name, cpf, birthday, email, password,
      } = await User.create(req.body);
      return res.json({
        usertype,
        name,
        cpf,
        birthday,
        email,
        password,
      });
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ error: 'Usuário não existe.' });
      }

      if (!(await user.checkPassword(password))) {
        return res.status(401).json({ error: 'Senha incorreta.' });
      }

      const { id, name, usertype } = user;

      return res.json({
        user: {
          id,
          name,
          email,
          usertype,
        },

        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),

      });
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
