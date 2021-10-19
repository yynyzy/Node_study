const path = require('path')

const filePath = './User/why/yzy.txt'

//路径名，不含文件名
console.log(path.dirname(filePath));
//文件名，含后缀
console.log(path.basename(filePath));
//文件后缀名
console.log(path.extname(filePath));


//2.join 拼接
const fileName = 'yyn.text'
const basePath = './user'

const filePath1 = path.join(basePath, fileName)
console.log(filePath1);

// resolve 拼接
// resolve 会判断拼接的路径字符串中，是否有以./或../开头的路径
const filePath2 = path.resolve(basePath, fileName)
console.log(filePath2);