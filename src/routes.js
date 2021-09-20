import { Router } from 'express'
import UserController from './app/controllers/UserController.js';
import AuthController from './app/controllers/AuthController.js';
import AuthMiddleware from './app/middlewares/middleware.js'

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/login', AuthController.login);
routes.use(AuthMiddleware)
routes.get('/list-users', UserController.list);

export default routes