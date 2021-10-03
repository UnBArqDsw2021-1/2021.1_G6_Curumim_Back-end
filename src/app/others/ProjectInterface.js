import Project from '../models/Project';

class ProjectInterface {
    _ProjectType;

    constructor(){}

    async listAll(req, res) {
        try {
          const projects = await Project.findAll({
            where: { projectType: this._ProjectType },
          });
          return res.json({ projects });
        } catch (err) {
          return res.status(500).json({ error: err.stack });
        }
      }
    
      async listByUser(req, res) {
        try {
          const projects = await Project.findAll({
            where: { project_type: this._ProjectType, fk_idProfessional: req.userId },
          });
          return res.json({ projects });
        } catch (err) {
          return res.status(500).json({ error: err.stack });
        }
      }
    
      async create(req, res) {
        try {
          const { title, description, date } = req.body;
    
          if (req.userId === undefined) {
            return res.status(401).json({ error: 'Acesso negado.' });
          }

          console.log(this._ProjectType);
    
          const project = await Project.create({
            fk_idProfessional: req.userId, project_type: this._ProjectType, title, description, date,
          });
    
          return res.status(201).json({
            project,
          });
        } catch (err) {
          return res.status(500).json({ error: err.stack });
        }
      }
    
      async update(req, res) {
        try {
          const { id, updates, projectType } = req.body;
          const project = await Project.findByPk(id);
        
          if (project.fk_idProfessional !== req.userId && req.usertype !== 2) {
            return res.status(401).json({ error: 'Acesso negado.' });
          }

          if (projectType !== project.project_type){
            return res.status(401).json({ error: 'Operação inválida.' });
          }

          const updated = await project.update(updates);
    
          return res.json({
            updated,
          });
        } catch (err) {
          return res.status(500).json({ error: err.stack });
        }
      }
    
      async delete(req, res) {
        try {
          const { id } = req.params;
          const project = await Project.findByPk(id);
    
          if (project.fk_idProfessional !== req.userId && req.usertype !== 2) {
            return res.status(401).json({ error: 'Acesso negado.' });
          }

          await project.destroy();
    
          return res.json({
            msg: 'Deletada com sucesso',
          });
        } catch (err) {
          return res.status(500).json({ error: err.stack });
        }
      }


}

export default ProjectInterface;