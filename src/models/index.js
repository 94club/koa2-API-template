/*
let requireDirectory = require('require-directory')
module.exports = requireDirectory(module)
*/
import { db } from '../lib/sequelize'
import User from './user.model'
import FileUpload from './fileUpload.model'
import TodoList from './todoList.model'

User.hasMany(TodoList, {
//   foreignKey: 'user_id', // 可以自己指定外键，不设置时系统默认
  constraints: false // 不设置外键约束
})
// 重新创建所有的表结构
db.sync({force: true})

export { User, FileUpload, TodoList }
