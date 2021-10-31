const Koa = require('koa')
const staticAssests = require('koa-static')
const app = new Koa()

app.use(staticAssests('./build'))

app.listen(8000, () => {
    console.log('koa初体验服务器监听');
})