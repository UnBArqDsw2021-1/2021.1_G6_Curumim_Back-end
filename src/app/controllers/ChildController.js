/* eslint-disable class-methods-use-this */
import Child from '../models/Child';

class ChildController {
  async listChilds(req, res) {
    try {
      const childList = await Child.findAll();
      return res.json(childList);
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }
}

export default new ChildController();
