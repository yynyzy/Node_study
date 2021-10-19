const fs = require('fs');

//创建读取流，fs.createReadStream(路径，【配置项】)
const rs = fs.createReadStream("hello.txt", { flags: "r", encoding: "utf-8" })
const ws = fs.createWriteStream("bye.txt", { flags: "w", encoding: "utf-8" })

console.log(rs);

rs.on("open", () => {
    console.log("文件读取打开");
})

rs.on("close", () => {
    console.log("文件读取关闭");
})

// 每一批数据流入完成
rs.on("data", (chunk) => {
    console.log("单批数据流入");
    console.log(chunk);
    ws.write(chunk, () => {
        console.log("单批数据写入完成");
    })
})

