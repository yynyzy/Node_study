const http = require('http');
//创建一个web服务器
const server = http.createServer((req, res) => {
    //设置响应的header
    //设置方式一：
    // res.setHeader('Content-Type', 'application/json');

    //方式二
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    //响应结果
    res.write("<h1>123456</h1>")
    res.end("Hello World!");
})

// 启动服务器，并制定端口号和主机
server.listen(8080, () => {
    console.log("服务器启动成功~");
})