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
