const mysql = require('mysql2')

//创建连接池
const connections = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'yyn990902',
    database: 'codehub',
    limit: 10
})

const statement = `
SELECT * FROM  products WHERE price <? AND score >?;
`
connections.execute(statement, [6000, 7.5], (err, result) => {
    console.log(result);
})