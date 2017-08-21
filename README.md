# Koa2 RESTful API 服务器模板

这是一个基于Koa2的轻量级RESTful API Server模板，支持ES6、ES7。  
基于[koa2-API-scaffold](https://github.com/yi-ge/koa2-API-scaffold)项目,并且在此基础上做了修改。  
项目使用说明请参考上面链接,感谢@yi-ge给出这么全面和详细的技术说明,技术全面乐于分享，赞。  

## 使用的技术栈
- [koa2](https://github.com/koajs/koa) - HTTP framework.
- [koa-body](https://github.com/dlau/koa-body) - A full-feature koa body parser middleware.
- [koa-router](https://github.com/alexmingoia/koa-router) - Router middleware for koa.
- [koa-jwt](https://github.com/koajs/jwt) - Koa middleware for validating JSON Web Tokens
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - JsonWebToken implementation for node.js
- [koa-static2](https://github.com/Secbone/koa-static2) - Middleware for Koa2 to serve a folder under a name declared by user.
- [koa-logger](https://github.com/koajs/logger) - Development style logger middleware for Koa.
- [nodemailer](https://github.com/nodemailer/nodemailer) - Send e-mails with Node.JS.
- [mysql2](https://github.com/sidorares/node-mysql2) -  fast node-mysql compatible mysql driver for node.js 
- [sequelize](https://github.com/sequelize/sequelize) - An easy-to-use multi SQL dialect ORM for Node.js
- [md5](https://github.com/pvorb/node-md5) - Encrypt data such as password
- [Eslint](https://github.com/eslint/eslint) + [Standard style](https://github.com/standard/standard) - Standard style for code consistency
- [Nodemon](https://github.com/remy/nodemon) - to reload automatically the server in development
- [downloadjs](https://github.com/rndme/download) - file downloading using client-side javascript

## 特性
- async/await
- Upload file
- Download file
- Authentication jwt
- Basic User model
- Basic Fileupload model

## 前端项目示例
客户端 [vue-ssr-front-todo](https://github.com/yzijun/vue-ssr-front-todo) 通过和客户端结合后以前后端分离的方式演示网站开发中的常见技术示例

## 开发使用说明

由于使用MYSQL数据库，启动服务前请先修改数据库配置
修改config.js文件的DB连接的用户名、密码和数据库名

```
$ npm install
//or 可以通过如下操作解决npm速度慢的问题
$ npm install --registry=https://registry.npm.taobao.org
# 本地开发 开启服务
$ npm run dev # 可执行npm start跳过ESlint检查。
```

访问： http://127.0.0.1:3000/public/get

**Node.js版本**

node >= 8.0.0  
npm >= 5.0.0


