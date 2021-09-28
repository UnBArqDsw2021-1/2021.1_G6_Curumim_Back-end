import { Router } from 'express';
import AuthController from './app/controllers/AuthController';
import Middleware from './app/middlewares/middleware';
import AdmController from './app/controllers/AdmController';
import TeacherController from './app/controllers/TeacherController';
import GuardianController from './app/controllers/GuardianController';
import ChildController from './app/controllers/ChildController';

const routes = new Router();
// Unverified routes
routes.post('/login', AuthController.login);
routes.post('/dev/register-adm', AdmController.register);
routes.post('/register-guardian', GuardianController.register);
// Admin routes
routes.use(Middleware.verifyAdm);
routes.post('/adm/register-child', AdmController.registerChild);
routes.post('/adm/register-teacher', TeacherController.register);
routes.get('/list-childs', ChildController.listChilds);
routes.get('/list-professionals', TeacherController.list);
routes.get('/list-guardians', GuardianController.list);
// Teacher routes
routes.use(Middleware.verifyTeacher);
routes.post('/teacher/create-activity', TeacherController.createActivity);
// Guardian routes
routes.use(Middleware.verifyGuardian);

export default routes;
