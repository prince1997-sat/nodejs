const express = require('express')
const app = express()

app.get('/one', (req, res) => {
    let sum = data
    console.log(sum);
})

app.get('/two', (req, res) => {

})

app.listen(280, () => {
    console.log("3000,server")
})

let data = () => {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    return sum
}