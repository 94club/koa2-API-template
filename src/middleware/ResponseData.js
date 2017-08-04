/**
 * 返回给客户端的状态、消息和json数据
 */
export default async (ctx, next) => {
  ctx.error = (message, data = {}, code = 500) => {
    ctx.body = {
      code: 500,
      message,
      data
    }
  }
  ctx.notFound = (message, data = {}) => {
    ctx.body = {
      code: 404,
      message,
      data
    }
  }
  ctx.success = (data, message = '') => {
    ctx.body = {
      code: 200,
      message,
      data
    }
  }
  await next()
}
