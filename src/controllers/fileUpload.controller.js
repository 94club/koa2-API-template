import fs from 'fs'
import path from 'path'
import { System as SystemConfig } from '../config'

export default {
  /*
   * 中间件已设置不需要再设置
  // 设置允许跨域的域名称
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Headers', 'X-Requested-With')
  ctx.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')

  // ----- 情况1：跨域时，先发送一个options请求，此处要返回200 -----
  if (ctx.method === 'OPTIONS') {
    console.log('options 请求时，返回 200')

    // 返回结果
    ctx.status = 200
    ctx.body = 'options OK'
    return
  }
  */
  fileUpload: async (ctx) => {
    // ----- 情况2：发送post请求，上传图片 -----

    // 文件将要上传到哪个文件夹下面
    let uploadfolderpath = path.join(__dirname, '../../assets/uploads')
    // 上传文件的参数名为uploads
    let file = ctx.request.body.files.uploads

    // formidable 会将上传的文件存储为一个临时文件，现在获取这个文件的目录
    let tempfilepath = file.path
    // 获取文件类型
    let type = file.type

    // 获取文件名，并根据文件名获取扩展名
    let filename = file.name
    let extname = filename.lastIndexOf('.') >= 0 ? filename.slice(filename.lastIndexOf('.') - filename.length) : ''
    // 文件名没有扩展名时候，则从文件类型中取扩展名
    if (extname === '' && type.indexOf('/') >= 0) {
      extname = '.' + type.split('/')[1]
    }
    // 将文件名重新赋值为一个随机数（避免文件重名）
    filename = Math.random().toString().slice(2) + extname

    // 构建将要存储的文件的路径
    let filenewpath = path.join(uploadfolderpath, filename)

    // 将临时文件保存为正式的文件
    try {
      fs.renameSync(tempfilepath, filenewpath)
    } catch (err) {
      ctx.error('文件上传出错', err, {filename})
    }
    // 拼接url地址
    let fileURL = `${SystemConfig.API_server_type}${SystemConfig.API_server_host}:${SystemConfig.API_server_port}/assets/uploads/${filename}`
    // let fileURL = `/assets/uploads/${filename}`
    // 返回结果
    ctx.success(fileURL, '文件上传成功')
  }
}
