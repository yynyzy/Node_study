const fs = require('fs')

//传统的方式
// fs.readFile("./foo.txt", (err, data) => {
//     fs.writeFile("./baz.txt", data, (err) => {
//         console.log(err);
//     })
// })

//Stream的写法
const reader = fs.createReadStream("./foo.txt");
const writer = fs.createWriteStream("./foz.txt");

reader.pipe(writer)

writer.close();