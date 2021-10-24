const fs = require('fs')
const path = require('path')

//创建文件夹
let dirname = './dir'
if (!fs.existsSync(dirname)) {
    fs.mkdir(dirname, err => {
        console.log(err);
    })
}

//读取文件夹下的所有文件

// fs.readdir(dirname, (err, files) => {
//     console.log(files);
// })

//文件夹里还有文件夹，封装函数递归遍历
function getFiles(dirname) {
    fs.readdir(dirname, { withFileTypes: true }, (err, files) => {
        for (let file of files) {
            if (file.isDirectory()) {
                const filePath = path.resolve(dirname, file.name)
                getFiles(filePath)

            } else {
                console.log(file.name);
            }

        }
    })
}
getFiles(dirname)