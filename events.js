var events = require('events');
var eventEmitter = new events.EventEmitter();

exports.mainEvent = function() {
    var policy = function() {
        console.log("i m prince");
    }
    eventEmitter.on('hi', policy);
}
exports.emitter = eventEmitter;