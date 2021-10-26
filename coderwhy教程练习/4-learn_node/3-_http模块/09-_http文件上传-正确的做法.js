const http = require('http');
const qs = require('querystring')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/upload') {
        if (req.method === 'POST') {
            req.setEncoding('binary')


            let body = ''
            let boundary = req.headers['content-type'].split(';')[1].split('=')[1]

            req.on('data', (data) => {
                body += data
            })
            req.on('end', () => {
                //获取 image/png的位置
                const payload = qs.parse(body, "\r\n", ": ")
                const type = payload["Content-Type"]

                //2.开始在 image/png的位置进行截取
                const typeIndex = body.indexOf(type)
                const typeLen = type.length
                let imageData = body.substring(typeIndex + typeLen)
                //将之间的两个空格去掉
                imageData = imageData.replace(/^\s\s*/, '')

                //去掉boundary
                imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`))
                fs.writeFile('./ffff.png', imageData, 'binary', (err) => {
                    res.end('文件上传完毕~');
                })
                // console.log(imageData);

            })
        }
    }
})
server.listen(8080, () => {
    console.log("文件上服务开启成功");
})