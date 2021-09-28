import { Router } from 'express';
import AuthController from './app/controllers/AuthController.js';
import Middleware from './app/middlewares/middleware.js';
import AdmController from './app/controllers/AdmController.js';
import TeacherController from './app/controllers/TeacherController.js';
import GuardianController from './app/controllers/GuardianController.js';

const routes = new Router();
// Unverified routes
routes.post('/login', AuthController.login);
routes.post('/dev/register-adm', AdmController.register);
routes.post('/register-guardian', GuardianController.register);
// Admin routes
routes.use(Middleware.verifyAdm);
routes.post('/adm/register-teacher', TeacherController.register);
routes.get('/list-professionals', TeacherController.list);
routes.get('/list-guardians', GuardianController.list);
// Teacher routes
routes.use(Middleware.verifyTeacher);
// Guardian routes
routes.use(Middleware.verifyGuardian);

export default routes;
