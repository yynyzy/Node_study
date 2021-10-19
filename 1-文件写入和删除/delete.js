const fs = require('fs')
fs.unlink('yyn.txt', () => {
    console.log('删除成功');
})