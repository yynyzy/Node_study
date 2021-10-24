const fs = require('fs')

// fs.writeFile('./foo.txt', 'love', err => { console.log(err) })

const writer = fs.createWriteStream('./foo.txt', {
    flags: "a",
    start: 4,
})
writer.write("你好", err => {
    if (err) {
        console.log(err)
    }
    console.log("写入成功");
})

writer.end("@yzy@")

writer.on('close', () => {
    console.log("文件关闭");
})
