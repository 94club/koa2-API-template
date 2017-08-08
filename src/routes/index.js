import userRoutes from './user.routes'
import apiRoutes from './api.routes'
import Router from 'koa-router'

const router = new Router()
  .use(userRoutes.routes())
  .use(apiRoutes.routes())

router
  .get('/public/get', function (ctx, next) {
    ctx.body = '欢迎~~！'
  }) // 以/public开头则不用经过权限认证

export default router
