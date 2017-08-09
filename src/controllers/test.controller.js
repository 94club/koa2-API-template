import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

const publicKey = fs.readFileSync(path.join(__dirname, '../../publicKey.pub'))

/**
 * 测试用的没有实际作用
 */
export default {
  Get: (ctx) => {
    ctx.body = {
      result: 'get',
      name: ctx.params.name,
      para: ctx.query
    }
  },
  Post: async (ctx) => {
    ctx.body = {
      result: 'post',
      name: ctx.params.name,
      para: ctx.request.body
    }
  },
  /**
   * 检查授权是否合法
   */
  Auth: async (ctx) => {
    let token = ctx.request.header.authorization
    try {
      let decoded = jwt.verify(token.substr(7), publicKey)
      if (decoded) {
        ctx.success(decoded, '用户授权合法')
      } else {
        ctx.error('用户信息解密错误,用户没有授权', '', {token}, 403)
      }
    } catch (err) {
      ctx.error('用户信息解密错误,用户没有授权', err, {token}, 503)
    }
  },
  Put: (ctx) => {
    ctx.body = {
      result: 'put',
      name: ctx.params.name,
      para: ctx.request.body
    }
  },
  Delect: (ctx) => {
    ctx.body = {
      result: 'delect',
      name: ctx.params.name,
      para: ctx.request.body
    }
  }
}
