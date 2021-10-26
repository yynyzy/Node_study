const express = require('express');

const app = express();

//路径和方法匹配
app.use((req, res, next) => {
    console.log('common middleWare');
    next();
})

app.get('/home', (req, res, next) => {
    console.log('home path and method 01');
    next();
}, (req, res, next) => {
    console.log('home path and method 02');
    next();
}, (req, res, next) => {
    console.log('home path and method 03');
    res.end()
})



//开启监听
app.listen(8000, () => {
    console.log('express初体验服务器已启动');
})