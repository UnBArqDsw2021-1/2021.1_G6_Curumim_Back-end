import UserController from './UserController';
import Project from '../models/Project';


class ActivityController extends UserController {
  async createActivity(req, res){
    try{
      const projectType = 'activity';
      const {title, description, date } = req.body;

      if( req.userId === undefined){
        return res.status(401).json({ error: 'Acesso negado.' });
      }

      const project = await Project.create({fk_idProfessional: req.userId, projectType, title, description, date})

      return res.status(201).json({
        project,
      });
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }

  async updateActivity(req, res){
    try{
      const {id, updates} = req.body
      const project = await Project.findByPk(id);

      if( project.fk_idProfessional !== req.userId && req.usertype !== 2){
        return res.status(401).json({ error: 'Acesso negado.' });
      }
      const updated = await project.update(updates)

      return res.json({
        updated,
      });
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }

  async deleteActivity(req, res){
    try{
      const {id} = req.body
      const project = await Project.findByPk(id);

      if( project.fk_idProfessional !== req.userId && req.usertype !== 2){
        return res.status(401).json({ error: 'Acesso negado.' });
      }
      await project.destroy();

      return res.json({
        msg: "Atividade Deletada com sucesso"
      });
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }
}

export default new ActivityController();
