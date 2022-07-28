async function add(a, b) {
    return a + b;
}
async function sub(a, b) {
    return new Promise((resolve, reject) => {
        resolve(a - b);
    })
}
async function mul(a, b) {
    return a * b;
}

add(10, 20)
    .then(res => sub(res, 5))
    .then(res => mul(res, 10))
    .then(res => { console.log(res); })