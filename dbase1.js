var mysql = require('mysql2')
var qr = require('querystring')
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'prince8787#',
    database: 'prince'
})

function insert(a, b, c, d, e) {
    if (a == null || a == undefined) {
        return 0;
    } else {
        let str = []
        str.push(a, b, c, d, e)
        return str;
    }
}

function del(i) {
    let str = []
    if (i == null || i == undefined) {
        return 0

    } else {
        str.push(i);
        return str;
    }
}

function update(i) {
    let str = []
    str.push(i)
    return str
}

function query(a, b) {
    con.query(a, b, (err, res) => {
        if (err) {
            console.log(err)
        }
    })

}

function main(a, b, c, d, e, f) {
    let t;
    let p;
    let str = []
    switch (a) {
        case 1:
            t = "INSERT INTO emp values (?,?,?,?,?)"
            str = insert(b, c, d, e, f)
            if (b = null || b == undefined || typeof(b) == 'string')
                console.log("Can't insert as id is null");
            else {
                p = query(t, str)
                console.log('inserted')
            }
            break;
        case 2:
            t = "delete from emp where id=?"
            str = del(b)
            if (b = null || b == undefined || typeof(b) == 'string')
                console.log("Can't delete as id is not int");
            else {
                query(t, str);
                console.log('deleted')
            }
            break;
        case 3:
            t = "update emp set " + b + "=? where id =?"
            str = update(c)
            str.push(d)
            if (d = null || d == undefined || typeof(d) == 'string')
                console.log("Can't update as id is not int");
            else {
                query(t, str);
                console.log('updated')
            }
            //console.log(str)
            break;
        case 4:
            t = "select " + b + ',' + c + ' ' + "from emp where id=?"
            str.push(d)
            if (d = null || d == undefined || typeof(d) == 'string')
                console.log("Can't show as id is not int");
            else {
                query(t, str);
                console.log(deleted)
            }
            break;
    }

}
main(2, 'prince')
    /*con.query("select * from emp", (err, res) => {
        console.log(res);
    })*/