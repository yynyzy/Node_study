const http = require('http');
const url = require('url');
const qs = require('querystring');
//创建一个web服务器
const server = http.createServer((req, res) => {

    //login?username=why&password=123
    const { pathname } = url.parse(req.url)
    if (pathname === '/login') {
        if (req.method === 'POST') {
            //拿到body的数据
            req.setEncoding('utf-8')
            req.on('data', (data) => {
                const { username, pwd } = JSON.parse(data)
                console.log(username, pwd);
            })
            console.log(req.method);
            res.end("请求结束")
        }

    }

})

// 启动服务器，并制定端口号和主机
server.listen(8888, () => {
    console.log("服务器启动成功~");
})