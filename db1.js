var mysql = require('mysql2')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'prince8787#',
    database: 'prince'
})

function put(a, b, c, d, e) {
    let show = {
        id: a,
        name: b,
        age: c,
        City: d,
        salary: e

    }
    return show
}
async function insert(a, b, c, d, e) {
    let show = put(a, b, c, d, e)
    let str = [];
    if (show.id != 0 && show.id != null) {
        str.push(show.id);
    }
    if (show.name && show.age != null) {
        str.push(show.name)
    }
    if (show.age && show.age != null) {
        str.push(show.age)
    }
    if (show.City && show.City != null) {
        str.push(show.City);
    }
    if (show.salary != 0 && show.salary != null) {
        str.push(show.salary)
    }
    // let column = str.toString()
    //et col = str.toString()
    //let query = "Insert into emp ?"

    let query = con.query('INSERT INTO emp set ? ', show, function(error, results, fields) {
        if (error) throw error;
        console.log(results)
    });
    // console.log(show)
}

function update(a, b, c, d, e) {
    let show = {
        id: a,
        salary: b,
        age: c,
        name: d,
        City: e

    }
    let str = [];

    if (show.salary != 0 && show.salary != null) {
        str.push(show.salary)
    }
    if (show.id != 0 && show.id != null) {
        str.push(show.id);
    }
    // let column = str.toString()
    let query = con.query("update emp set salary=? where id=?", str, (err, results) => {
        console.log(results)

    })
}
//insert(21, 'priya')
function del(a, b, c, d, e) {
    let show = put(a, b, c, d, e)
    let str = [];

    if (show.salary != 0 && show.salary != null) {
        str.push(show.salary)
    }
    if (show.id != 0 && show.id != null) {
        str.push(show.id);
    }
    // let column = str.toString()
    let query = con.query("delete from emp where id=?", str, (err, results) => {
        console.log(results)

    })
}
//update(9, 800)
del(71)