Koa2 RESTful API 服务器模板
=============================

这是一个基于Koa2的轻量级RESTful API Server模板，支持ES6。

基于[koa2-API-scaffold](https://github.com/yi-ge/koa2-API-scaffold)项目,并且在此基础上做了修改增加了一些示例代码

项目使用说明请参考上面链接,感谢@yi-ge给出这么全面和详细的技术说明,技术全面乐于分享，赞。

开发使用说明
------------
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


