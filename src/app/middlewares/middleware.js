import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth.config';

export default async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: 'Token não existe.' });
    }

    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.adminId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: err.stack });
  }
};
