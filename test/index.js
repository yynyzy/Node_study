const express = require('express');
const app = express();
const fs = require('fs');

app.all('*', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
})
app.get('/users', function (req, res) {
  fs.readFile( __dirname + "/" + "hero.json", 'UTF-8', function (err, data) {
      console.log(data);
      res.end(data);
  });
})

app.post("/adduser", (req, res) => {
  console.log(1);
  req.on(data => {
    // fs.writeFile( __dirname + "/" + "hero.json", data,{ flag: "a", encoding: "UTF-8" }, (err, data) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log(data);
    //   }
    // })
    console.log(data);
  })
  res.end(() => {
    console.log(123);
  })
})

var server = app.listen(8080,'localhost', function (){
  var host = server.address().address
  var port = server.address().port;
  console.log(host);
  console.log(port);
  console.log(' app listening at http://%s:%s', host, port);
});