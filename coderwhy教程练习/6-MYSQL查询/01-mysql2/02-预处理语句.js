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

connection.execute(statement, [6000, 7.5], (err, result) => {
    console.log(result);
})