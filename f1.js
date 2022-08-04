let events = require('./eve').emitter
events.on('hi', () => {
    console.log(" this is my case")
})
module.exports = {
    events
}