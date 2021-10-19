const url = require('url');
console.log(url);

let httpUrl = 'https://space.bilibili.com/11931417'

let urlObj = url.parse(httpUrl)
console.log(urlObj);

let targetUrl = 'http://www.taobao.com/'
httpUrl2 = "./yyn/yzy"

let newUrl = url.resolve(targetUrl, httpUrl2)
console.log(newUrl);