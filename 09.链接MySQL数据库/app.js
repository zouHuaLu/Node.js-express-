const mysql = require('mysql');

let connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'huangjie8499',
    database: 'db2'
})

connection.connect()

connection.query('SELECT * FROM websites',(err,res,field)=>{
    if(err){
        console.error(err)
        return
    }
    console.log('The solution is: ', res)
})

