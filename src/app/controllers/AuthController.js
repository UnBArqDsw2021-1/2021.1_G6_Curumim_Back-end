import jwt from 'jsonwebtoken';
import User from '../models/User';

import authConfig from '../../config/auth.config';
import GuardianChild from '../models/GuardianChild';
import Child from '../models/Child';

class AuthController {
  async authenticate(req, res) {

  }

  async sessionAuthentication(req, res) {

  }

  async refreshToken(req, res) {

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

      const children_list = [];

      const children_rel = await GuardianChild.findAll({
        where: {
          fk_idGuardian: id
        }
      });

      for (const child_rel of children_rel){
        const child = await Child.findByPk(child_rel.dataValues.fk_idChild);
        children_list.push(child.dataValues);
      }

      return res.json({
        user: {
          id,
          name,
          email,
          usertype,
        },

        token: jwt.sign({ id, usertype }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),

        children_list

      });
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }
}
export default new AuthController();
