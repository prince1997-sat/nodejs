var events = require('events');
global.emitter = new events()

emitter.on('message', () => {
    console.log("hi am a emitter")
})

module.exports = {
    emitter
}