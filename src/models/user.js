import {Sequelize, db} from '../lib/sequelize'
import moment from 'moment'

export const User = db.define('api_user', {
  username: {
    type: Sequelize.STRING(50),
    unique: true
  },
  password: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING(50)
  },
  created_at: {
    type: Sequelize.STRING(30)
  },
  updated_at: {
    type: Sequelize.STRING(30)
  },
  is_delete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  timestamp_at: {
    type: Sequelize.BIGINT
  }
},
{
  timestamps: false,
  comment: '用户信息表'
})
// 创建表结构
// User.sync({force: true})

// force: true will drop the table if it already exists
// 创建表结构并且增加一条数据
User.sync({force: true}).then(() => {
  // Table created
  return User.create({
    username: '小明',
    password: 'Hancock',
    email: 'xiao@163.com',
    created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    is_delete: false,
    timestamp_at: moment().format('X')
  })
})
