import { Router } from 'express';
import ChildController from './app/controllers/ChildController';
import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';
import AuthMiddleware from './app/middlewares/middleware';
import Adm from './app/controllers/AdmController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/login', AuthController.login);
routes.use(AuthMiddleware);
routes.get('/list-users', UserController.list);
routes.get('/list-childs', ChildController.listChilds);
routes.post('/adm/register-child', Adm.registerChild);

export default routes;
