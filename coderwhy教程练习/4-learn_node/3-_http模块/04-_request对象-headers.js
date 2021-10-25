const http = require('http');
//创建一个web服务器
const server = http.createServer((req, res) => {
    console.log(res.headers);
})

// 启动服务器，并制定端口号和主机
server.listen(8888, () => {
    console.log("服务器启动成功~");
})