var mysql = require('mysql2')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'prince8787#',
    database: 'prince'
})

var add = async(a) => {
        con.connect((err) => {
            if (err)
                throw err;
            con.query(a, (err, result) => {
                if (err)
                    throw err;
                console.log("Inserted")


            })
        })
    }
    //add("Insert into emp values(2,'prince',23,'mumbai',100)")
var show = async(a) => {
    con.connect((err) => {
        if (err)
            throw err;
        con.query(a, (err, result) => {
            if (err)
                throw err;
            console.log(result)


        })
    })
}

//show('select * from emp')
var remove = async(a) => {
    con.connect((err) => {
        if (err)
            throw err;
        con.query(a, (err, result) => {
            if (err)
                throw err;
            console.log('remove')


        })
    })
}
var update = async(a) => {
        con.connect((err) => {
            if (err)
                throw err;
            con.query(a, (err, result) => {
                if (err)
                    throw err;
                console.log('updated')


            })
        })
    }
    //update('update emp set age=24 where id=2')
var unique = async(a) => {
        con.connect((err) => {
            if (err)
                throw err;
            con.query(a, (err, result) => {
                if (err)
                    throw err;
                console.log(result)


            })
        })
    }
    //unique('select name from emp where id=2')
unique('select name from emp where name like "p%"');