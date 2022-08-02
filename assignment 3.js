function add(a, b) {
    setTimeout((resolve, reject) => {
        resolve(a + b)
    }, 1000)
}

function sub(a, b) {
    setTimeout((resolve, reject) => {
        resolve(a - b)
    }, 1000)
}

function div(a, b) {
    setTimeout((resolve, reject) => {
        resolve(a / b)
    }, 1000)
}
add(20, 30)
    .then(sum => {
        return sub(sum, 40)
    })
    .then(sum => {
        return mul(sum, 100)
    })
    .then(sum => {
        return div(sum, 5)
    })
    .then(sum => {
        console.log(sum)
    })