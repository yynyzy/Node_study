const express = require('express');

//可以引进多个路由
const usersRouter = require('./routers/users')
const productsRouter = require('./routers/products')


const app = express();

app.use("/users", usersRouter)

app.listen(8000, () => {
    console.log("路由服务器启动成功");
})