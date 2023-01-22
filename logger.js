const Event = require('events');
const emmiter = new Event();

emmiter.on('logger', (info) => console.log(info));
function callEmmit() {
  emmiter.emit('logger', { error: 'Mongo DB Down..' });
}

exports.event = callEmmit;
