import { User, TodoList } from '../models'
import { mysqlPageInfo } from '../tool/pageUtil'

export default {
  // 取得todo列表分页数据
  todoPages: async (ctx) => {
    // 当前第几页 ctx.query是取得?后的参数如page=1 /public/v1/todolist/?page=1
    const pageNum = ctx.query.page
    const { offset, limit } = mysqlPageInfo(pageNum)
    try {
      let todolist = await TodoList.findAll({
        // include: [ User ], // 默认查询所有字段
        include: [{
          model: User,
          attributes: ['id', 'username'] // 指定需要查询的字段
        }],
        attributes: ['id', 'title', 'content', 'is_complete', 'created_at'],
        order: [['timestamp_at', 'DESC']],
        // limit/offset - 分页与限制返回结果数
        offset,
        limit
      }) // 关联关系m:1
      ctx.success(todolist)
    } catch (err) {
      ctx.error('查询分页todo列表出错', err)
    }
  },
  // 增加todo列表项
  addTodo: async (ctx) => {
    let userid = ctx.params.id
    try {
      const user = await User.findById(userid)
      user ? ctx.success(user) : ctx.notFound('用户不存在', {id: userid})
    } catch (err) {
      ctx.error('查询用户出错', err, {id: userid})
    }
  },
  // 修改todo列表项
  updateTodo: async (ctx) => {
    let userid = ctx.params.id
    try {
      const user = await User.findById(userid)
      user ? ctx.success(user) : ctx.notFound('用户不存在', {id: userid})
    } catch (err) {
      ctx.error('查询用户出错', err, {id: userid})
    }
  },
  // 删除todo列表项
  delTodo: async (ctx) => {
  }
}
