const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/upload') {
        if (req.method === 'POST') {
            const fileWriter = fs.createWriteStream('./foo.png', { flags: 'a+' })
            // req.pipe(fileWriter)
            req.on('data', (data) => {
                // fileWriter.write(data)
            })
            req.on('end', () => {
                console.log('文件上传完毕~');
            })
        }
    }
})
server.listen(8080, () => {
    console.log("文件上服务开启成功");
})