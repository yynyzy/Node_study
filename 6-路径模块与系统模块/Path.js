let path = require('path')

let strPath = 'https://www.bilibili.com/'

//获取路径信息的扩展名
let info = path.extname(strPath)
console.log(info);

let arr = ['/yyn', 'yzy', 'lz'];
let info1 = path.resolve(...arr)
console.log(info1);

//获取当前执行目录的完整路径
console.log(__dirname);
let info2 = path.join(__dirname, '/yyn', 'yzy', 'lz')
console.log(info2);

let strUrl = 'https://space.bilibili.com/11931417/favlist'
 arrPath = strUrl.split('/')
aPath = arrPath.slice(-2)
let filePath =path.join(__dirname,...aPath)
console.log(filePath);


//解析路径，可以将路径信息直接解析出来，解析出根路径，目录，扩展名，文件名，文件名称，文件扩展名
console.log(path.parse(__filename));