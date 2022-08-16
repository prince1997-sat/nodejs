var mysql = require('mysql2')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "prince8787#",
    database: "prince"
})
var add = async(a) => {
    var t = a
    con.connect((err) => {
        if (err)
            throw err;
        con.query(t, (err, result) => {
            if (err)
                throw err;
            console.log('done')

        })
    })
}
var del = async(a) => {
    var t = a
    con.connect((err) => {
        if (err)
            throw err;
        con.query(t, (err, result) => {
            if (err)
                throw err;
            console.log('done')

        })
    })
}
var alter = async(a) => {
        var t = a
        con.connect((err) => {
            if (err)
                throw err;
            con.query(t, (err, result) => {
                if (err)
                    throw err;
                console.log('done')

            })
        })
    }
    //del("Delete from pet1 where name='dog'")
    //alter("Alter table emp ADD COLUMN salary INT")
var display = async(a) => {
    var t = a
    con.connect((err) => {
        if (err)
            throw err;
        con.query(t, (err, result) => {
            if (err)
                throw err;
            console.log(result)

        })
    })
}
display('select * from emp')