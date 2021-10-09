import { Router } from 'express';
import AuthController from './app/controllers/AuthController';
import Middleware from './app/middlewares/middleware';
import AdmController from './app/controllers/AdmController';
import TeacherController from './app/controllers/TeacherController';
import GuardianController from './app/controllers/GuardianController';
import ChildController from './app/controllers/ChildController';
import ProjectController from './app/controllers/ProjectController';

const routes = new Router();
// Unverified routes
routes.post('/login', AuthController.login);
routes.post('/dev/register-adm', AdmController.register);
routes.post('/register-guardian', GuardianController.register);

// Admin routes
routes.use('/adm', Middleware.verifyAdm);
routes.post('/adm/register-child', AdmController.registerChild);
routes.post('/adm/register-class', AdmController.registerClass);
routes.post('/adm/register-child-class', AdmController.registerChildClass);
routes.post('/adm/remove-child-class', AdmController.removeChildClass);
routes.post('/adm/register-guardian-child', AdmController.registerGuardianChild);
routes.post('/adm/delete-guardian-child', AdmController.deleteGuardianChild);
routes.post('/adm/register-teacher', TeacherController.register);
routes.post('/adm/create-project', (req, res, next) => ProjectController.changeState(req, res, next), (req, res) => ProjectController.create(req, res));
routes.put('/adm/update-project', (req, res, next) => ProjectController.changeState(req, res, next), (req, res) => ProjectController.update(req, res));
routes.delete('/adm/delete-project/:type/:id', (req, res, next) => ProjectController.changeState(req, res, next), (req, res) => ProjectController.delete(req, res));
routes.get('/adm/list-childs', ChildController.listChilds);
routes.get('/adm/list-childs-rel', ChildController.listChildrenRelations);
routes.get('/adm/list-professionals', TeacherController.list);
routes.get('/adm/list-guardians', GuardianController.list);
routes.get('/adm/list-classes', AdmController.listClasses);
// routes.get('/adm/list-activities', ActivityController.list);

// Teacher routes
routes.use('/teacher', Middleware.verifyTeacher);
routes.post('/teacher/create-activity', (req, res, next) => ProjectController.changeState(req, res, next), (req, res) => ProjectController.create(req, res));
routes.put('/teacher/update-activity', (req, res, next) => ProjectController.changeState(req, res, next), (req, res) => ProjectController.update(req, res));
routes.delete('/teacher/delete-activity/:type/:id', (req, res, next) => ProjectController.changeState(req, res, next), (req, res) => ProjectController.delete(req, res));
routes.get('/teacher/list-activities', (req, res) => ProjectController.listByUser(req, res));

// Guardian routes
routes.use('/guardian', Middleware.verifyGuardian);
routes.get('/guardian/get-activity', GuardianController.getActivityDetails);
routes.get('/guardian/get-child-activities', GuardianController.listChildActivities)

export default routes;
