/*
let requireDirectory = require('require-directory')
module.exports = requireDirectory(module)
*/

import User from './user.controller'
import Test from './test.controller'
import FileUpload from './fileUpload.controller'

export { User, Test, FileUpload }
