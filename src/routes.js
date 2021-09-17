import { Router } from 'express'
import connection from './database/index.js'
import EventController from './app/controllers/EcController.js';
import EcController from './app/controllers/EcController.js';
import UserController from './app/controllers/UserController.js';

const routes = new Router();



routes.post('/users', UserController.store);



export default routes