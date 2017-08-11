module.exports = function () {
  return function (ctx, next) {
    return next().catch((err) => {
      switch (err.status) {
        case 401:
          // ctx.status = 200
          // ctx.body = {
          //   status: 401,
          //   result: {
          //     err: 'Authentication Error',
          //     errInfo: 'Protected resource, use Authorization header to get access.'
          //   }
          // }
          ctx.error('用户授权错误', 'token无效解析失败', null, 401)
          break
        default:
          throw err
      }
    })
  }
}
