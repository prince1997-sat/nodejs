const fs = require('fs');

fs.readFile('f3.txt', 'utf8', (err, data) => {
    console.log(err, data);
});