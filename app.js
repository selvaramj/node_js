const fs = require('fs');
const emmit = require('./logger');
fs.readdir('./', async (error, file) => await console.log(file));
emmit.event();
console.log('Stop here!');
