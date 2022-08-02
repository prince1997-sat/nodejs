async function add(a, b) {
    return (a + b)
}
async function sub(a, b) {
    return (a - b)
}
async function mul(a, b) {
    return (a * b)
}
async function div(a, b) {
    return (a / b)
}
add(20, 30)
    .then(sum => {
        return sub(sum, 40)
    }).then(sum => {
        return mul(sum, 100)
    }).then(sum => {
        return div(sum, 5)
    }).then(sum => {
        console.log(sum)
    })