import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

const publicKey = fs.readFileSync(path.join(__dirname, '../../publicKey.pub'))

// 用户登录的时候返回token
// let token = jwt.sign({
//   userInfo: userInfo // 你要保存到token的数据
// }, publicKey, { expiresIn: '7d' })

/**
 * 用户登录后返回的token
 * @param userInfo 保存到token中的用户数据
 * expiresIn: '1h'
 */
export let createToken = (userInfo) => {
  return jwt.sign(userInfo, publicKey, {expiresIn: '7d'})
}

/**
 * 取得token解码后的用户信息
 * @param {jwt} token 
 */
export let getAuthInfo = (token) => {
  try {
    let decoded = jwt.verify(token.substr(7), publicKey)
    if (decoded) {
      return decoded
    } else {
      throw new Error('用户没有授权')
    }
  } catch (err) {
    throw new Error('用户没有授权')
  }
}

/**
 * 检查授权是否合法
 */
export let checkAuth = (ctx) => {
  let token = ctx.request.header.authorization
  try {
    let decoded = jwt.verify(token.substr(7), publicKey)
    if (decoded) {
      ctx.success(decoded, '用户授权合法')
    } else {
      ctx.error('用户没有授权', '', {token}, 403)
    }
  } catch (err) {
    ctx.error('用户信息解密错误', err, {token}, 503)
  }
}
