import userRoute from './user.route'
import testRoute from './test.route'
import fileUpDownRoute from './fileUpDown.route'
import { todoListPub, todoListAPI } from './todoList.route'
import Router from 'koa-router'

const router = new Router()
  .use(userRoute.routes())
  .use(testRoute.routes())
  .use(fileUpDownRoute.routes())
  .use(todoListPub.routes())
  .use(todoListAPI.routes())

router
  .get('/public/get', function (ctx, next) {
    ctx.body = '欢迎~~！'
  }) // 以/public开头则不用经过权限认证

export default router
