const fs = require('fs')

//文件描述符fd
fs.open('./abc.txt', (err, fd) => {
    if (!err) { console.log(fd); }


    fs.fstat(fd, (err, info) => {
        if (!err) { console.log(info); }
    })
})