import models from '../models/index.js'

export let findOneUser = async (ctx) => {
  let user = await models.user.User.findOne()
  ctx.body = user
}

export let findOneById = async (ctx) => {
  let user = await models.user.User.findById(ctx.query.id)
  ctx.body = user
}
