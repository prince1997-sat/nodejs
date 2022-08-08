const fs = require('fs')
const child_process = require('child_process')

for (var i = 0; i < 3; i++) {
    var wpro = child_process.fork("child1.js", [i])
    wpro.on('close', function() {
        console.log("the function exited with code" + code)
    })
}