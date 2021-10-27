const fs = require('fs');

const express = require('express');

const app = express();

app.get('/products/:id/:name', (req, res, next) => {
    console.log(req.params);
    res.end("商品详情数据")
})

app.get('/login', (req, res, next) => {
    console.log(req.query);
    // res.type('application/json')
    // res.end(JSON.stringify({ user: 'yyn', age: 18 }))

    //简单版
    res.json({ user: 'yyn', age: 18 })
})

app.listen(8000, () => {
    console.log('express初体验');
})