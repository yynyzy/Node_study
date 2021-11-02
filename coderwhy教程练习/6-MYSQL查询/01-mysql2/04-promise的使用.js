const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'yyn990902',
    database: 'codehub'
})

const statement = `
SELECT * FROM products WHERE price < ? AND score > ?;
`

connection.promise().execute(statement, [6000, 7.5]).then(([result, fields]) => {
    console.log(result);
}).catch(err => {
    console.log(err);
})