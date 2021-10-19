const fs = require('fs')

//这样写因为是异步，不能保证先覆盖’w‘还是先追加’a‘，所以封装一下
fs.writeFile('test.txt', "晚饭吃啥？", { flag: "w", encoding: "utf8" }, (err) => {
    if (err) {
        console.log('出错');
    }
    console.log('成功');
})

fs.writeFile('test.txt', "红烧肉", { flag: "a", encoding: "utf8" }, (err) => {
    if (err) {
        console.log('出错');
    }
    console.log('成功');
})
//-------------------------------------------------------------------------

function writeFs(path, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, { flag: "a", encoding: "utf8" }, (err,data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}
async function writeLists() {
    await writeFs('yyn.txt','吃红烧肉1\n')
    await writeFs('yyn.txt','吃红烧肉2\n')
    await writeFs('yyn.txt','吃红烧肉3\n')
    await writeFs('yyn.txt','吃红烧肉4\n')
}

writeLists()

//-------------------------------------------------------------------------
