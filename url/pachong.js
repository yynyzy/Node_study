let axios = require('axios');
let request = require('request');
// console.log(axios);


let httpUrl = 'https://www.1905.com/mdb/film/'

//获取起始页面的所有分类地址
async function getClassUrl(url) {
    let { response, body } = await req(url)
    console.log(body);
    let reg = //igs
}
getClassUrl(httpUrl)



function req(url) {
    return new Promise((resolve, reject) => {
        request.get(url, (err, res, body) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
                resolve(body);
            }
        })
    })
}