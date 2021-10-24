const path = require('path')
/**
 *  path 模块：
 *          resolve:将两个路径拼接在一起
 */

const fileName = 'yyn.text'
const basePath = './user'

const filePath = path.resolve(basePath, fileName)
console.log(filePath);