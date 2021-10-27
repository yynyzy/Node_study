const express = require('express');

const app = express();

const USERNAME_DOESNONT_EXISTS = "user register success"
const USERNAME_ALREADY_EXISTS = "username alreadly exists"
app.post('/login', (req, res, next) => {
    const isLogin = false;
    if (!isLogin) {
        res.json("user login success")
    } else {
        // res.type(400)
        // res.json("username does not exists~")
        next(new Error(USERNAME_DOESNONT_EXISTS))
    }
})

app.post('/register', (req, res, next) => {
    //加入在数据查询用户名时，发现不存在
    const isExists = true;
    if (!isExists) {
        res.json("user register success")
    } else {
        // res.type(400)
        // res.json("username alreadly exists~")
        next(new Error(USERNAME_ALREADY_EXISTS))
    }
})

app.use((err, req, res, next) => {
    let status = 400
    let message = ""
    switch (err.message) {
        case USERNAME_DOESNONT_EXISTS:
            message = "user register success";
            break;
        case USERNAME_ALREADY_EXISTS:
            message = "username alreadly exists";
            break;
        default:
            message: "NOT FOUND~"
    }
    res.status(status)
    res.json({
        errCode: message,
        errMessage: message,
    })
})

app.listen(8000, () => {
    console.log("静态服务器启动成功");
})