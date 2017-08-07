/**
 * 返回给客户端的状态、消息和json数据
 */
export default async (ctx, next) => {
  ctx.error = (message = '', errMsg = '', data = {}, code = 500) => {
    ctx.body = {
      code,
      message,
      errMsg: '用于开发人员方便错误调试。服务器出错,错误信息：' + errMsg,
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
  ctx.success = (data, message = 'ok') => {
    ctx.body = {
      code: 200,
      message,
      data
    }
  }
  await next()
}
