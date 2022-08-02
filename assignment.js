const add = (a, b) => {
    return new Promise((resolve, reject) => {
        resolve(a + b)
    })
}
const sub = (a, b) => {
    return new Promise((resolve, reject) => {
        resolve(a - b);

    })
}
const mul = (a, b) => {
    return new Promise((resolve, reject) => {
        resolve(a * b);

    })

}
const div = (a, b) => {
    return new Promise((resolve, reject) => {
        resolve(a / b);

    })

}
add(20, 30)
    .then(sum => {
        return sub(sum, 40)
    }).then(sum => {
        return mul(sum, 100)
    }).then(sum => {
        return div(sum, 5)
    }).then(sum => {
        console.log(sum);
    })