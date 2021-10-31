const express = require('express');

const app = express();

//编写普通的中间件
// use 注册一个中间件
app.use(function (req, res, next) {
    console.log("注册了第01个中间件~")

    next()
})
app.use(function (req, res, next) {
    console.log("注册了第02个中间件~")

    next()
})
app.use(function (req, res, next) {
    console.log("注册了第03个中间件~")

    res.end('hello world')
})

//开启监听
app.listen(8000, () => {
    console.log('普通中间件已启动');
})