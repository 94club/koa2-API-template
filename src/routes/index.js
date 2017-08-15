import userRoute from './user.route'
import testRoute from './test.route'
import fileUploadRoute from './fileUpload.route'
import Router from 'koa-router'

const router = new Router()
  .use(userRoute.routes())
  .use(testRoute.routes())
  .use(fileUploadRoute.routes())

router
  .get('/public/get', function (ctx, next) {
    ctx.body = '欢迎~~！'
  }) // 以/public开头则不用经过权限认证

export default router
