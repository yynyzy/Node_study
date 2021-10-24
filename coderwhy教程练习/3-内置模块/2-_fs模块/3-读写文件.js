const fs = require('fs')

const content = '我是大大'
// fs.writeFile('./abc.txt', content, { flag: 'a' }, err => { console.log(err) })


//输出的是buffer
fs.readFile('./abc.txt', { encoding: 'utf8' }, (err, data) => { console.log(data) })