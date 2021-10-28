const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const multer = require('koa-multer')
const app = new Koa()

const upload = multer()
app.use(bodyParser())
app.use(upload.any())

app.use((ctx, next) => {
    console.log(ctx.req.body);
    console.log(ctx.request.body);
    ctx.response.body = "hello"
})


app.listen(8000, () => {
    console.log('koa路由服务器启动成功');
})