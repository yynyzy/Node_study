const fs = require('fs');

const rs = fs.createReadStream("hello.txt", { flags: "r", encoding: "utf-8" })
const ws = fs.createWriteStream("BYE2.txt", { flags: "w", encoding: "utf-8" })

rs.on("open", () => { })

rs.on("close", () => { })

//简单写法
rs.pipe(ws)