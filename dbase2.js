var mysql = require('mysql2')
var qr = require('querystring')
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'prince8787#',
    database: 'prince'
})

function check(a) {
    if (a == null || a == undefined || typeof(a) == 'string')
        return 1;
    else {
        return 0
    }
}

function insert(a, b, c, d, e) {
    let t
    if (check(a)) {
        console.log("Can't insert as id is null")
    } else {
        let str = []
        str.push(a, b, c, d, e)
        t = "INSERT INTO emp values (?,?,?,?,?)"
        query(t, str)
        console.log('inserted')
    }
}

function del(i) {
    let str = []
    let t
    if (check(i)) {
        console.log("Can't delete as id is not int");
    } else {
        str.push(i);
        t = "delete from emp where id=?"
        query(t, str);
        console.log('deleted')
    }
}

function update(i, j, k) {
    let str = []
    let t
    if (check(i))
        console.log("Can't update as id is not int");
    else {
        str.push(k, i)
        t = "update emp set " + j + "=? where id =?"
        query(t, str);
        console.log('updated')
    }
}

function select(i, j, k) {
    let str = []
    let t
    let c = 1
    if (check(i))
        console.log("Can't update as id is not int");
    else {
        str.push(i)
        t = "select " + j + ',' + k + ' ' + "from emp where id=?"
        query(t, str, c)

    }
}

function query(a, b, c) {
    con.query(a, b, (err, res) => {
        if (err) {
            console.log(err)
        }
        if (c != null) {
            console.log(res)
        }
    })

}

//del('prince')
select(1, 'name', 'age')