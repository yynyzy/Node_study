const http = require('http');

//http 发送get 请求
// http.get("http://localhost:8080", (res) => {
//     res.on('data', (data) => {
//         console.log(data.toString());
//     })
//     res.on('end', () => {
//         console.log("获取到了所有结果");
//     })
// })

//http 发送 post 请求
const req = http.request({
    method: 'POST',
    hostname: 'localhost',
    port: 8080,
}, (res) => {
    res.on('data', (data) => {
        console.log(data.toString());
    })
    res.on('end', () => {
        console.log("获取到了所有结果");
    })
})
req.end();