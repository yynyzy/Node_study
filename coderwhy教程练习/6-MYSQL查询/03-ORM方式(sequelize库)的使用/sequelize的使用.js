const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('codehub', 'root', 'yyn990902', {
    host: 'localhost',
    dialect: 'mysql'
})
sequelize.authenticate().then(res => {
    console.log("数据库连接成功");
}).catch(err => {
    console.log("数据库连接失败");
})