import ClassProject from '../models/ClassProject';
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
            where: { projectType: this._ProjectType, fk_idProfessional: req.userId },
          });
          return res.json({ projects });
        } catch (err) {
          return res.status(500).json({ error: err.stack });
        }
      }
    
      async create(req, res) {
        try {
          const { title, description, date, class_id } = req.body;
    
          if (req.userId === undefined) {
            return res.status(401).json({ error: 'Acesso negado.' });
          }
    
          const project = await Project.create({
            fk_idProfessional: req.userId, projectType: this._ProjectType, title, description, date,
          });
          
          await ClassProject.create({
            fk_idClass: class_id, fk_idProject: project.id
          })
    
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


          if (projectType !== project.projectType){

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
        
      async show(req, res){
        const { id } = req.params;
        try{
          const project = await Project.findOne({
            where: { projectType: this._ProjectType, id: id },
          })

          if(!project){
            return res.status(404).json({message: 'Nao encontrado.'})
          }

          return res.status(200).json(project);
        }catch(err){
          res.status(500).json(err.message)
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