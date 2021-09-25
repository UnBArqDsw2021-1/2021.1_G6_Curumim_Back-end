import { Router } from 'express';
import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';
import AuthMiddleware from './app/middlewares/middleware';
import Adm from './app/controllers/AdmController';

const routes = new Router();

routes.post('/adm/child', Adm.registerChild);
routes.post('/users', UserController.store);
routes.post('/login', AuthController.login);
routes.use(AuthMiddleware);
routes.get('/list-users', UserController.list);

export default routes;
