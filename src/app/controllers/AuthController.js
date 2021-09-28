import jwt from 'jsonwebtoken';
import User from '../models/User';

import authConfig from '../../config/auth.config';

class AuthController {
  async authenticate(req, res) {

  }

  async sessionAuthentication(req, res) {

  }

  async refreshToken(req, res) {

  }

  async login(req, rest) {
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
}
export default new AuthController();
