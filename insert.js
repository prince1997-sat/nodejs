var mysql = require('mysql2')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "prince8787#",
    database: "prince"
})
con.connect(function(err) {
    if (err) {
        console.log(err)
    }
    var sql = "INSERT INTO pet1(name,owner) values('rat','priya')"
    con.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('inserted')
    })
    con.query("SELECT * FROM pet1", function(err, result) {
        if (err) throw err;
        console.log(result);
    })

})