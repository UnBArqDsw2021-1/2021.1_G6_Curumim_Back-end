import { Router } from 'express';
import AuthController from './app/controllers/AuthController';
import Middleware from './app/middlewares/middleware';
import AdmController from './app/controllers/AdmController';
import TeacherController from './app/controllers/TeacherController';
import GuardianController from './app/controllers/GuardianController';
import ChildController from './app/controllers/ChildController';
import ActivityController from './app/controllers/ActivityController';

const routes = new Router();
// Unverified routes
routes.post('/login', AuthController.login);
routes.post('/dev/register-adm', AdmController.register);
routes.post('/register-guardian', GuardianController.register);

// Admin routes
routes.use('/adm', Middleware.verifyAdm);
routes.post('/adm/register-child', AdmController.registerChild);
routes.post('/adm/register-teacher', TeacherController.register);
routes.post('/adm/create-activity', ActivityController.createActivity);
routes.post('/adm/update-activity', ActivityController.updateActivity);
routes.post('/adm/delete-activity', ActivityController.deleteActivity);
routes.get('/adm/list-childs', ChildController.listChilds);
routes.get('/adm/list-professionals', TeacherController.list);
routes.get('/adm/list-guardians', GuardianController.list);
routes.get('/adm/list-activities', ActivityController.list);

// Teacher routes
routes.use('/teacher', Middleware.verifyTeacher);
routes.post('/teacher/create-activity', ActivityController.createActivity);
routes.post('/teacher/update-activity', ActivityController.updateActivity);
routes.post('/teacher/delete-activity', ActivityController.deleteActivity);
routes.get('/teacher/list-activities', ActivityController.listMyActivities);

// Guardian routes
routes.use('/guardian', Middleware.verifyGuardian);
routes.get('/guardian/get-activity', GuardianController.getActivityDetails);

export default routes;
