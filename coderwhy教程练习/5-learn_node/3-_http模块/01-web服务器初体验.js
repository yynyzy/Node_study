const http = require('http');

//创建一个web服务器
const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    res.end("hello server")
})

// 启动服务器，并制定端口号和主机
server.listen(8888, '0.0.0.0', () => {
    console.log("服务器启动成功~");
})