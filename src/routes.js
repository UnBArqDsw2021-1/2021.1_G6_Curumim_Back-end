import { Router } from 'express';
import ChildController from './app/controllers/ChildController';
import AuthController from './app/controllers/AuthController';
import AuthMiddleware from './app/middlewares/middleware';
import Adm from './app/controllers/AdmController';
import TeacherController from './app/controllers/TeacherController';
import BoardController from './app/controllers/BoardController';

const routes = new Router();

routes.post('/login', AuthController.login);
routes.get('/list-childs', ChildController.listChilds);
routes.post('/adm/register-child', Adm.registerChild);
routes.post('/adm/register-teacher', TeacherController.register);
routes.get('/list-professionals', TeacherController.list);
routes.get('/guardian/board/:childId', BoardController.checkBoard);
routes.use(AuthMiddleware);

export default routes;
