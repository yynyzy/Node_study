const fs = require('fs');

//读取文本文件
// fs.readFile('./foo.txt', (err, data) => {
//     console.log(data);
//     console.log(data.toString());
// })

//读取图片文件
fs.readFile('./bar.JPG', (err, data) => {
    console.log(data);
    //复制图片
    fs.writeFile("./foo.png", data, err => {
        console.log(err);
    })
})