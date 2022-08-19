var mysql = require('mysql2')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'prince8787#',
    database: 'prince'
})

/*async function update(arr) {
    con.query("update emp set age=?,City=?,salary=? where id=?", arr, (error, result) => {
        if (error)
            throw error;
        console.log(result)
    })
}

update([2, 10, 'Blr', '200'])-*/

/*async function show(name, id) {
    con.query("select ? from emp where id=?", [name, id], (err, result) => {
        console.log(result)
    })
}

show('prince', 2)*/

async function insert(id, name, age, city, salary) {
    con.query('Insert into emp values(?,?,?,?,?)', [id, name, age, city, salary], (err, result) => {
        console.log(result)
    })
}
insert(8, 'ravi', 27, 'pune', 900)

/*async function remove(name, salary) {
    con.query('delete from emp where name=? and salary=?', [name, salary], (err, result) => {
        console.log(result)
    })
}
remove('priya', 400)*/