import KoaRouter from 'koa-router'
import { User } from '../controllers'

const router = new KoaRouter()

router
  .get('/public/getUsers', User.getUsers) // 测试取得数据库全部User数据
  .get('/public/getUser/:id', User.getUser) // 测试取得数据库一条User数据
  .get('/public/get', function (ctx, next) {
    ctx.body = '欢迎~~！'
  }) // 以/public开头则不用经过权限认证
/* .all('/upload', controllers.upload.default)
  .get('/api/:name', controllers.api.Get)
  .post('/api/:name', controllers.api.Post)
  .put('/api/:name', controllers.api.Put)
  .del('/api/:name', controllers.api.Delect)
  .post('/auth/:action', controllers.auth.Post)
*/

export default router
