import { User } from '../models'

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
      ctx.error(err.toString())
    }
  },

  getUser: async (ctx) => {
    let userid = ctx.params.id
    try {
      const user = await User.findById(userid)
      user ? ctx.success(user) : ctx.notFound('没查到用户请检查id是否正确', {id: userid})
    } catch (err) {
      ctx.error(err.toString(), {id: userid})
    }
  }

}
