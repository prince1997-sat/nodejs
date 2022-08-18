var mysql = require('mysql2')
const mysqlUtilities = require('mysql-utilities')

var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'prince8787#',
        database: 'prince'
    })
    /*var show = con.query("Select * from emp where name=?",['prince'], (error, result) => {

        if (error)
            throw error;
        console.log(result)
    })*/
var update = con.query("update emp set age=?,City=?,salary=? where id=?", [25, 'pune', 80, 2], (error, result) => {

        if (error)
            throw error;
        console.log(result)
    })
    //update

/*con.query("Insert into emp Values(?,?,?,?,?)", [4, 'priya', 28, 'pune', 400], (error, result) => {

    if (error)
        throw error;
    console.log('')
})*/
var show1 = con.query("Select * from emp", (error, result) => {

    if (error)
        throw error;
    console.log(result)
})
mysqlUtilities.upgrade(con);
var t = con.queryRow('select * from emp where id =?', [2], (err, row) => {
    if (err)
        throw err
    console.dir(row)
})
t