/* eslint-disable class-methods-use-this */
import Child from '../models/Child';
import GuardianChild from '../models/GuardianChild';

class ChildController {
  async listChilds(req, res) {
    try {
      const childList = await Child.findAll();
      return res.json(childList);
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }

  async listChildrenRelations(req, res) {
    try {
      const children = await Child.findAll();
      const guardian_children = await GuardianChild.findAll();
      return res.json({ children, relations: guardian_children });
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }
}

export default new ChildController();
