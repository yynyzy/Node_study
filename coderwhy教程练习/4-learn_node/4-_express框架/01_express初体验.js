const express = require('express');

//express 其实是一个函数 :createApplicatiin

//返回app
const app = express();

app.get('/', (req, res, next) => {
    res.end('Welcome')
})

//开启监听
app.listen(8080, () => {
    console.log('服务已启动');
})