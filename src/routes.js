import { Router } from 'express'
import connection from './database/index.js'
import EventController from './app/controllers/EcController.js';
import EcController from './app/controllers/EcController.js';
import UserController from './app/controllers/UserController.js';
import AuthController from './app/controllers/AuthController.js';

const routes = new Router();



routes.post('/users', UserController.store);
routes.post('/auth/admin', AuthController.store_admin);



export default routes