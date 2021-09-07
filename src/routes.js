import { Router } from 'express'
import connection from './database/index.js'

const routes = new Router();

routes.get('/', async (req, res) => {
  await connection.authenticate().then(console.log('Connection has been established successfully.')).catch((error) => console.log(error));
  return res.json({ ok: true })
})

export default routes