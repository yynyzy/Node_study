const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'yyn990902',
    database: 'codehub'
})

const statement = `
SELECT stu.id stuId, stu.name stuName, stu.age stuAge, 
JSON_ARRAYAGG(JSON_OBJECT('id',cs.id,'name',cs.name,'price',cs.price)) msg
FROM students stu
JOIN student_select_course ssc ON stu.id = ssc.student_id
JOIN course cs ON ssc.course_id = cs.id
GROUP BY stuId;
`

connection.query(statement, (err, results, fields) => {
    console.log(results);
    // connection.end()
})
// connection.on('error', err => {
//     console.log(err);
// })
