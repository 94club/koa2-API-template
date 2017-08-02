import models from '../models/index.js'

export let findAllUser = async (ctx) => {
  let users = await models.user.User.findAll()
  ctx.body = users
}

export let findOneById = async (ctx) => {
  let user = await models.user.User.findById(ctx.query.id)
  ctx.body = user
}
