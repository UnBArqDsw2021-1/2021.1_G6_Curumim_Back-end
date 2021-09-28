import { Router } from 'express';
import AuthController from './app/controllers/AuthController.js';
import AuthMiddleware from './app/middlewares/middleware.js';
import AdmController from './app/controllers/AdmController.js';
import TeacherController from './app/controllers/TeacherController.js';

const routes = new Router();

routes.post('/login', AuthController.login);
routes.post('/adm/register-teacher', TeacherController.register);
routes.get('/list-professionals', TeacherController.list);
routes.use(AuthMiddleware);

export default routes;
