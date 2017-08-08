import md5 from 'md5'
import moment from 'moment'
import { User } from '../models'
import { createToken } from '../services/userAuth.service'
/*
export let findAllUser = async (ctx) => {
  let users = await models.user.User.findAll()
  ctx.body = users
}

export let findOneById = async (ctx) => {
  // let user = await models.user.User.findById(ctx.query.id)
  // ctx.body = user
  var userid = ctx.query.id
  try {
    const user = await models.user.User.findById(userid)
    user ? ctx.success(user) : ctx.notFound('不能找到用户检查id', {id: userid})
  } catch (err) {
    ctx.error(err.toString(), {id: userid})
  }
}
*/
export default {
  getUsers: async (ctx) => {
    try {
      let users = await User.findAll()
      ctx.success(users)
    } catch (err) {
      ctx.error('查询全部用户出错', err)
    }
  },

  getUser: async (ctx) => {
    let userid = ctx.params.id
    try {
      const user = await User.findById(userid)
      user ? ctx.success(user) : ctx.notFound('用户不存在', {id: userid})
    } catch (err) {
      ctx.error('查询用户出错', err, {id: userid})
    }
  },

  login: async (ctx) => {
    let username = ctx.request.body.username
    let password = ctx.request.body.password
    try {
      const user = await User.findOne({
        where: {username, password: md5(password), is_delete: false}
      })
      if (user) {
        // 取得用户数据
        const u = user.dataValues
        u.token = createToken(u)
        ctx.success(u, '用户登录成功')
      } else {
        ctx.notFound('用户名或者密码错误!', {username, password})
      }
    } catch (err) {
      ctx.error('用户登录出错', err, {username, password})
    }
  },

  register: async (ctx) => {
    let newUser = {
      username: ctx.request.body.username,
      password: md5(ctx.request.body.password),
      email: ctx.request.body.email,
      created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
      updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
      is_delete: false,
      timestamp_at: moment().format('X')
    }
    try {
      await User.create(newUser)
      ctx.success(null, '用户注册成功')
    } catch (err) {
      ctx.error('用户注册出错', err, newUser)
    }
  }
}
