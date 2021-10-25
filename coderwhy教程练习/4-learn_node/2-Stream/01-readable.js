const fs = require('fs')

//传统的方式
// fs.readFile('./foo.txt', (err, data) => {
//     console.log(data.toString());
// })

//流的方式
const reader = fs.createReadStream('./foo.txt', {
    start: 3, end: 6, highWaterMark: 2
});
//数据读取功能
reader.on("data", (data) => {
    console.log(data);
    reader.pause(); //暂停
    setTimeout(() => reader.resume(), 2000)//恢复
})

reader.on("open", (data) => {
    console.log("文件打开");
})
reader.on("close", (data) => {
    console.log("文件关闭");
})