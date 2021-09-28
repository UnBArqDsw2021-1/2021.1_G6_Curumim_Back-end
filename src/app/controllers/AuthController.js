import jwt from 'jsonwebtoken';
import User from '../models/User';

import authConfig from '../../config/auth.config';

class AuthController {
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

      const { id, name } = user;

      return res.json({
        user: {
          id,
          name,
          email,
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
