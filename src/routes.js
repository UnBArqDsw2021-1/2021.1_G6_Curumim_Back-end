import { Router } from 'express';
import UserController from './app/controllers/UserController.js';
import AuthController from './app/controllers/AuthController.js';
import AuthMiddleware from './app/middlewares/middleware.js';
import AdmController from './app/controllers/AdmController.js';
import TeacherController from './app/controllers/TeacherController.js';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/login', UserController.login);
routes.post('/register-teacher', AdmController.registerTeacher);
routes.get('/list-users', UserController.list);
routes.get('/list-professionals', TeacherController.list)
routes.use(AuthMiddleware);

export default routes;
