const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()

const userRouter = new Router({ prefix: '/users' })
userRouter.get('/:id', (ctx, next) => {
    console.log(ctx.request.params);
    console.log(ctx.request.query);
})
app.use(userRouter.routes())

// app.use((ctx, next) => {
//     console.log(ctx.request.url);
//     console.log(ctx.request.query);
//     console.log(ctx.request.params);
//     ctx.response.body = "hello"
// })


app.listen(8000, () => {
    console.log('koa路由服务器启动成功');
})