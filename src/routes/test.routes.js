import { Test } from '../controllers'
import Router from 'koa-router'

const router = new Router({prefix: '/api'})
  .get('/:name', Test.Get)
  .post('/:name', Test.Post)
  .put('/:name', Test.Put)
  .del('/:name', Test.Delect)

export default router
