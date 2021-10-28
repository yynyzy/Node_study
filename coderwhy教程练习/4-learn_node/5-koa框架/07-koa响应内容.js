const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
    // ctx.response.body
    // ctx.response.body = "hello yzy"
    // ctx.response.body = {
    //     name: "yyn",
    //     age: 48,
    //     avatar_url: "http://"
    // }

    //设置状态码
    ctx.status = 200

    // ctx.response.body = ["abc", "yyn", "yzy"]
    ctx.body = "hello Koa"
})

app.listen(8000, () => {
    console.log('koa初体验服务器监听');
})