var { createPool } = require('mysql2')

var pool = createPool({
    host: "localhost",
    user: "root",
    password: "prince8787#",
    database: "prince"
})

pool.query('select * from pet1', (err, result, field) => {
    if (err) {
        return console.log(err)
    }
    console.log(result)
})