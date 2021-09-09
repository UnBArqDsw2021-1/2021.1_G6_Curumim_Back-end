import { Router } from 'express'
import connection from './database/index.js'
import EventController from './app/controllers/EcController.js';
import EcController from './app/controllers/EcController.js';

const routes = new Router();

routes.get('/', async (req, res) => {
  await connection.authenticate().then(console.log('Connection has been established successfully.')).catch((error) => console.log(error));
  return res.json({ ok: true })
})

routes.post('/EC', EcController.store);



export default routes