/*
let requireDirectory = require('require-directory')
module.exports = requireDirectory(module)
*/

import { db } from '../lib/sequelize'
import User from './user.model'
import FileUpload from './fileUpload.model'
import TodoList from './todoList.model'

TodoList.belongsTo(User)
User.hasMany(TodoList, {
  // as: 'User', // 使用as选项为关系数据指定别名
  // foreignKey: 'user_id', // TodoList表中增加user_id外键。可以自己指定外键名字，不设置时系统默认
  constraints: false // 不设置外键约束
})
// 重新创建所有的表结构
db.sync({force: true})

export { User, FileUpload, TodoList }
