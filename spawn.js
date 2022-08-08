const fs = require('fs')
const child_process = require('child_process')

for (var i = 0; i < 3; i++) {
    var work = child_process.spawn('node', ['c1.js', i])
    work.on('close', function(data) {
        console.log(data)
    })
}