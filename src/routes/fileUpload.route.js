import { FileUpload } from '../controllers'
import Router from 'koa-router'

const router = new Router({prefix: '/api'})
  .post('/fileupload', FileUpload.fileUpload)

export default router
