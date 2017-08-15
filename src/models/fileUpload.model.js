import {Sequelize, db} from '../lib/sequelize'

const FileUpload = db.define('api_fileupload', {
  file_name: { // 文件名
    type: Sequelize.STRING(150)
  },
  ext_name: { // 文件扩展名
    type: Sequelize.STRING(150)
  },
  file_url: { // 文件URL
    type: Sequelize.STRING(1000)
  },
  content_type: { // 文件类型
    type: Sequelize.STRING(50)
  },
  created_at: {
    type: Sequelize.STRING(30)
  },
  updated_at: {
    type: Sequelize.STRING(30)
  },
  timestamp_at: {
    type: Sequelize.BIGINT
  }
},
{
  timestamps: false,
  comment: '文件上传信息表'
})
// 创建表结构
// FileUpload.sync({force: true})

export default FileUpload
