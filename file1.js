var event = require('./events');

var em = event.emitter;
em.on('hi', event.mainEvent);
em.emit('hi');