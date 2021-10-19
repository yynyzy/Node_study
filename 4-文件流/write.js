const fs = require('fs')

//创建写入流
// fs.createWriteStream( 文件路径，[，配置项])
const ws = fs.createWriteStream("hello.txt", { flags: "w", encoding: "utf-8" })

//监听文件打开事件
ws.on('open', function () {
    console.log("文件打开");
})
ws.on('ready', function () {
    console.log("文件写入已准备状态");
})
//监听文件关闭事件
ws.on('close', function () {
    console.log("文件写入完成，关闭");
})

// 文件流式写入
ws.write("hello world", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("内容流入完成");
    }
})
// 文件写入完成
ws.end(() => {
    console.log("文件写入关闭");
})