import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth.config';
import GuardianChild from '../models/GuardianChild';

class Middleware {
  async verifyAdm(req, res, next) {
    try {
      const token = req.headers.authorization;

      if (!token) {
        return res.status(401).json({ error: 'Token não existe.' });
      }

      const decoded = await promisify(jwt.verify)(token, authConfig.secret);

      if (decoded.usertype !== 2) {
        return res.status(401).json({ error: 'Acesso negado.' });
      }
      req.userId = decoded.id;
      req.usertype = decoded.usertype;

      return next();
    } catch (err) {
      return res.status(401).json({ error: err.stack });
    }
  }

  async verifyTeacher(req, res, next) {
    try {
      const token = req.headers.authorization;

      if (!token) {
        return res.status(401).json({ error: 'Token não existe.' });
      }

      const decoded = await promisify(jwt.verify)(token, authConfig.secret);

      if (decoded.usertype !== 1) {
        return res.status(401).json({ error: 'Acesso negado.' });
      }
      req.userId = decoded.id;
      req.usertype = decoded.usertype;

      return next();
    } catch (err) {
      return res.status(401).json({ error: err.stack });
    }
  }

  async verifyGuardian(req, res, next) {
    try {
      const token = req.headers.authorization;

      if (!token) {
        return res.status(401).json({ error: 'Token não existe.' });
      }

      const decoded = await promisify(jwt.verify)(token, authConfig.secret);

      if (decoded.usertype !== 0) {
        return res.status(401).json({ error: 'Acesso negado.' });
      }
      req.userId = decoded.id;
      req.usertype = decoded.usertype;

      return next();
    } catch (err) {
      return res.status(401).json({ error: err.stack });
    }
  }

  async checkChild(req, res, next) {
    try {
      const token = req.headers.authorization;

      const { childId } = req.params;

      const { userId } = req;

      if (childId) {
        const isChild = await GuardianChild.findOne({
          where: {
            fk_idChild: childId,
            fk_idGuardian: userId,
          },
        });
        if (!isChild) {
          return res.status(401).json({ message: 'Usuario não permitido' });
        }
      }
      return next();
    } catch (err) {
      return res.status(401).json({ error: err.stack });
    }
  }
}

export default new Middleware();
