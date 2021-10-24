const fs = require('fs');


const filePath = './abc.txt'
// // 1.同步
// const info = fs.statSync(filePath)
// console.log(info);

// // 2.异步
// fs.stat(filePath, (err, info) => {
//     if (!err) {
//         console.log(info);
//     }
// })
// console.log('后续执行的代码');

// 3.promise 类型
fs.promises.stat(filePath).then((info) => { console.log(info); }).catch(err => console.log(err))
