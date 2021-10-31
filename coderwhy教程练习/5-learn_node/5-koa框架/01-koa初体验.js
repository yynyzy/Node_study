const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
    ctx.response.body = JSON.stringify("hello yzy")
})

app.listen(8000, () => {
    console.log('koa初体验服务器监听');
})