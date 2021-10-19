const fs = require('fs')
// //导入文件模块
// // node，读取文件也有同步和异步的接口

// // 同步
// let fd = fs.openSync('hello.txt', 'r')
// console.log(fd);

// let content = fs.readFileSync('hello.txt',{flag:'r',encoding:'utf-8'})
// console.log(content);

// //异步
// let content2 = fs.readFile('hello.txt', { flag: 'r', encoding: 'utf-8' }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
//     console.log(456);
// })
// console.log(123)



//用promise进行封装
function fsRead(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, {flag:'r', encoding: 'utf-8'}, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}
const w1 = fsRead('hello.txt')
w1.then((res) => {
    console.log(res);
})

ReadList =async () => {
    let file2 =await fsRead('hello.txt')
    let file3 = await fsRead(file2 + '.txt')
    let file3Content = await fsRead(file3 + '.txt')
    console.log(file3Content);
}
ReadList()
