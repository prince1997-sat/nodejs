var mysql = require('mysql2')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'prince8787#',
    database: 'prince'
})

/*async function update(a, b, c, d, e) {
    con.query('update emp set ? where id=?', [b, c, d, e, a], (err, result) => {
        console.log(result);
    })
}
update(9, 'sohail', 28, 'kerla', 300)*/

async function update(a, b, c) {
    if (a == 1) {
        con.query("update emp set salary=? where id=?", [c, b], (err, result) => {
            console.log(result)
        })

    }
    if (a == 2) {
        con.query("update emp set City=? where id=?", [c, b], (err, result) => {
            console.log(result)
        })
    }
    if (a == 3) {
        con.query("update emp set age=? where id=?", [c, b], (err, result) => {
            console.log(result)
        })
    }
    if (a == 4) {
        con.query("update emp set name=? where id=?", [c, b], (err, result) => {
            console.log(result)
        })


    }
}
async function update1(a, b, c, d) {
    /*for sal and name*/
    if (a == 5) {
        update(1, b, c)
        update(4, b, d)

    }
    /*for city and name*/
    if (a == 6) {
        update(2, b, c)
        update(4, b, d)

    }
    if (a == 7) {
        update(3, b, c)
        update(4, b, d)

    }
    /*  update(a-4, b, c)
        update(a-1, b, d)*/


}
/*sync function update(args) {
    if (args[0] == 1) {
        con.query("update emp set salary=? where id=?", [agrs[2], agrs[1]], (err, result) => {
            console.log(result)
        })

    }
    /*if (a == 2) {
        con.query("update emp set City=? where id=?", [c, b], (err, result) => {
            console.log(result)
        })
    }
    if (a == 3) {
        con.query("update emp set age=? where id=?", [c, b], (err, result) => {
            console.log(result)
        })
    }
    if (a == 4) {
        con.query("update emp set name=? where id=?", [c, b], (err, result) => {
            console.log(result)
        })


    }*/
//update1(5, 2, 500, 'sohail')

/*con.query("select * from emp", (err, result) => {
    console.log(result)
})*/

async function show(a, b) {
    switch (a) {
        case 1:
            con.query("select salary from emp where id=?", [b], (err, result) => {
                console.log(result)
            })
            break;
        case 2:
            con.query("select City from emp where id=?", [b], (err, result) => {
                console.log(result)
            })
            break;
        case 3:
            con.query("select name from emp where id=?", [b], (err, result) => {
                console.log(result)
            })
            break;

        default:
            break;
    }



}
show(2, 9)