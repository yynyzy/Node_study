const Koa = require('koa')

const app = new Koa()

//use 注册中间件
app.use((ctx, next) => {
    if (ctx.request.url === '/login') {
        if (ctx.request.method === 'GET') {
            ctx.response.body = "Login Success"
        }
    } else {
        ctx.response.body = "other request"
    }


})

//koa 没有提供以下方式注册中间件
// app.get / post

// app.use('./login',(ctx, next) => {})

// app.use((ctx, next) => {
// }, (ctx, next) => {
// })

app.listen(8000, () => {
    console.log('koa初体验服务器监听');
})