import Child from '../models/Child';

class AdmController {
  async registerChild(req, res) {
    try {
      const { name, registration, birthday } = req.body;
      await Child.create({ name, registration, birthday });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }

    return res.status(204).json({ message: 'Aluno cadastrado!' });
  }
}

export default new AdmController();
