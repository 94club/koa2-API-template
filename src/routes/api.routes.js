import { Api } from '../controllers'
import Router from 'koa-router'

const router = new Router({prefix: '/api'})
  .get('/:name', Api.Get)
  .post('/:name', Api.Post)
  .put('/:name', Api.Put)
  .del('/:name', Api.Delect)

export default router
