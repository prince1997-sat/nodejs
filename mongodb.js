const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/temp')
    /*.then(() => console.log('successfull'))
    .catch(() => console.log("not successful"))*/

let personal = new mongoose.Schema({
    name: String,
    age: String,
    city: String
})

/*let msg = new emailSchema({
    email: 'ada.lovelace@gmail.com'
})*/

const collection = new mongoose.model('Personal', personal)

const createcollection = async() => {
    try {
        const personalinfo = new collection({
            name: 'ravi',
            age: '29',
            city: 'blr'
        })
        const personalinfo1 = new collection({
            name: 'shankar',
            age: '28',
            city: 'blr'
        })
        const personalinfo2 = new collection({
            name: 'rahul',
            age: '25',
            city: 'blr'
        })


        const result = await collection.insertMany([personalinfo, personalinfo1, personalinfo2]);
        console.log(result)
    } catch {
        console.log(err)
    }
}
createcollection()

const findres = async() => {
    const find = await collection.find();
    console.log(find)
}
findres();