import { Router } from 'express'

const routes = new Router();

routes.get('/', async (req, res) => {
  return res.json({ ok: true })
})

export default routes