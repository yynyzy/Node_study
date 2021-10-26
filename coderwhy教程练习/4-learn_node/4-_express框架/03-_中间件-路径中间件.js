const express = require('express');

const app = express();

//路径匹配
app.use('/home', (req, res, next) => {
    console.log('home middleWare');
    next();
})
app.use('/home', (req, res, next) => {
    console.log('home middleWare2');
    res.end('home middleWare');
})



//开启监听
app.listen(8000, () => {
    console.log('普通中间件已启动');
})