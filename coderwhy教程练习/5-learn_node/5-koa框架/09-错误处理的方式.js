const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
    const isLogin = false
    if (!isLogin) {
        ctx.app.emit('error', new Error("你还没有登录"), ctx)
    }
})
//这里的err 只是一个名字，可以取如何名字，推荐err
app.on('error', (err, ctx) => {
    ctx.status = 401
    ctx.body = err.message
})

app.listen(8000, () => {
    console.log('koa初体验服务器监听');
})