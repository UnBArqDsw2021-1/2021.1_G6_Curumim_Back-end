import Professionals from '../models/Professionals';
import User from '../models/User';

class AdmController {
  async registerTeacher(req, res) {
    try {
      const {
        usertype, name, cpf, birthday, email, password, registration,
      } = req.body;
      const { id } = await User.create({
        usertype, name, cpf, birthday, email, password,
      });
      await Professionals.create({ id, professionalType: 'teacher', registration });
      return res.json({
        usertype,
        name,
        cpf,
        birthday,
        email,
        password,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err.stack });
    }
  }
}

export default new AdmController();
